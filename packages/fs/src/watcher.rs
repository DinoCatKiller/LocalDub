//! Generic filesystem watching, modeled on Zed's `crates/fs/src/fs_watcher.rs`
//! but stripped of editor-only complexity (case-insensitive name matching,
//! WSL/network-filesystem detection, gpui executor).
//!
//! Design:
//! - A process-global [`GlobalWatcher`] owns one native (`notify::RecommendedWatcher`)
//!   and one poll (`notify::PollWatcher`) backend, plus a dedicated dispatch thread.
//! - `watch(path)` registers a directory (Linux: `NonRecursive`; the caller watches
//!   the parent and filters by name — this avoids the inotify single-file-invalidation
//!   trap when a file is truncated/recreated). It returns an [`FsWatch`] handle whose
//!   `Drop` unwatches.
//! - `watch_stream(path)` is a convenience that yields a `Stream<PathEvent>`.

use crate::event::{PathEvent, PathEventKind, WatcherMode};
use async_channel::{Receiver, Sender};
use futures::stream::{self, Stream};
use notify::{Event, EventKind, RecursiveMode, Watcher};
use std::{
    collections::HashMap,
    io,
    path::{Path, PathBuf},
    sync::{Arc, Mutex, OnceLock},
    time::Duration,
};

/// Control which backend is used, via `LOCALDUB_FILE_WATCHER_MODE`.
/// `auto` (default) currently resolves to Native; kept as a hook for future
/// filesystem-type detection.
fn requires_poll_watcher() -> bool {
    match std::env::var("LOCALDUB_FILE_WATCHER_MODE")
        .as_deref()
        .unwrap_or("auto")
    {
        "native" => false,
        "poll" => true,
        _ => false,
    }
}

fn poll_interval() -> Duration {
    static POLL_INTERVAL: OnceLock<Duration> = OnceLock::new();
    *POLL_INTERVAL.get_or_init(|| {
        let ms: u64 = std::env::var("LOCALDUB_FILE_WATCHER_POLL_MS")
            .ok()
            .and_then(|v| v.parse().ok())
            .unwrap_or(2000)
            .clamp(500, 30_000);
        Duration::from_millis(ms)
    })
}

/// Handle returned by [`watch`]. Dropping it removes the underlying watch.
#[derive(Debug)]
pub struct FsWatch {
    id: WatcherRegistrationId,
}

impl Drop for FsWatch {
    fn drop(&mut self) {
        global_watcher().remove(self.id);
    }
}

/// Register `path` to be watched. `path` should be a directory; callers that
/// care about a single file should watch its parent directory and filter by
/// name in their event handling (this survives files being truncated/recreated).
///
/// Returns an [`FsWatch`] handle; the watch is active until the handle is dropped.
pub fn watch(path: impl Into<PathBuf>) -> io::Result<FsWatch> {
    let id = global_watcher().add(path.into())?;
    Ok(FsWatch { id })
}

/// Watch `path` and yield a stream of [`PathEvent`]s covering it. The underlying
/// watch is tied to the returned stream's lifetime: dropping the stream unwatches.
pub fn watch_stream(path: impl Into<PathBuf>) -> io::Result<impl Stream<Item = PathEvent>> {
    let handle = watch(path.into())?;
    let (tx, rx): (Sender<PathEvent>, Receiver<PathEvent>) = async_channel::unbounded();
    // The real callback is installed on the existing registration.
    global_watcher().install_callback(handle.id, move |event: &Event| {
        for path_event in map_notify_event(event) {
            let _ = tx.try_send(path_event);
        }
    });
    Ok(stream::unfold((rx, handle), |(rx, handle)| async move {
        match rx.recv().await {
            Ok(event) => Some((event, (rx, handle))),
            // Channel closed (shouldn't happen while handle is alive) → end stream.
            Err(_) => None,
        }
    }))
}

fn map_notify_event(event: &Event) -> Vec<PathEvent> {
    let kind = match event.kind {
        EventKind::Create(_) => Some(PathEventKind::Created),
        EventKind::Modify(_) => Some(PathEventKind::Changed),
        EventKind::Remove(_) => Some(PathEventKind::Removed),
        _ => None,
    };
    let mut events: Vec<PathEvent> = event
        .paths
        .iter()
        .map(|p| PathEvent::new(p.clone(), kind))
        .collect();
    if event.need_rescan() {
        events.retain(|e| e.kind != Some(PathEventKind::Rescan));
        let p = event.paths.first().cloned().unwrap_or_default();
        events.push(PathEvent::new(p, Some(PathEventKind::Rescan)));
    }
    events
}

// ----------------------------------------------------------------------------
// GlobalWatcher internals
// ----------------------------------------------------------------------------

#[derive(Default, Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord, Hash)]
struct WatcherRegistrationId(u32);

struct RegistrationState {
    callback: Arc<dyn Fn(&Event) + Send + Sync>,
    path: Arc<Path>,
    mode: WatcherMode,
}

struct GlobalWatcher {
    state: Mutex<WatcherState>,
    // Separate lock from `state`: notify callbacks fire while we hold the
    // watcher lock, and those callbacks read `state`, so the two must not be
    // nested in the wrong order.
    native_watcher: Mutex<Option<Box<dyn WatchBackend>>>,
    poll_watcher: Mutex<Option<Box<dyn WatchBackend>>>,
    event_tx: Sender<(WatcherMode, notify::Result<Event>)>,
}

struct WatcherState {
    registrations: HashMap<WatcherRegistrationId, RegistrationState>,
    last_id: WatcherRegistrationId,
    // path -> set of registration ids watching it (or an ancestor of it)
    path_index: HashMap<Arc<Path>, Vec<WatcherRegistrationId>>,
}

impl WatcherState {
    fn next_id(&mut self) -> WatcherRegistrationId {
        let id = self.last_id;
        self.last_id = WatcherRegistrationId(id.0.wrapping_add(1));
        id
    }
}

/// Object-safe wrapper around a `notify::Watcher` backend. We box the two
/// concrete backends so `add`/`remove` share one call site.
trait WatchBackend: Send {
    fn watch(&mut self, path: &Path, mode: RecursiveMode) -> notify::Result<()>;
    fn unwatch(&mut self, path: &Path) -> notify::Result<()>;
}

impl WatchBackend for notify::RecommendedWatcher {
    fn watch(&mut self, path: &Path, mode: RecursiveMode) -> notify::Result<()> {
        notify::Watcher::watch(self, path, mode)
    }
    fn unwatch(&mut self, path: &Path) -> notify::Result<()> {
        notify::Watcher::unwatch(self, path)
    }
}

impl WatchBackend for notify::PollWatcher {
    fn watch(&mut self, path: &Path, mode: RecursiveMode) -> notify::Result<()> {
        notify::Watcher::watch(self, path, mode)
    }
    fn unwatch(&mut self, path: &Path) -> notify::Result<()> {
        notify::Watcher::unwatch(self, path)
    }
}

impl GlobalWatcher {
    fn add(&self, path: PathBuf) -> io::Result<WatcherRegistrationId> {
        let mode = if requires_poll_watcher() {
            WatcherMode::Poll
        } else {
            WatcherMode::Native
        };
        let arc_path: Arc<Path> = Arc::from(path.as_path());

        // Touch the OS watcher outside the state lock.
        self.ensure_watcher(mode)
            .map_err(|e| io::Error::other(e.to_string()))?;
        {
            let mut w = match mode {
                WatcherMode::Native => self.native_watcher.lock().unwrap(),
                WatcherMode::Poll => self.poll_watcher.lock().unwrap(),
            };
            let recursive = if mode == WatcherMode::Poll {
                RecursiveMode::Recursive
            } else {
                // Linux inotify: NonRecursive on the directory we watch. The
                // caller filters by child name. This survives file recreation.
                #[cfg(target_os = "linux")]
                {
                    RecursiveMode::NonRecursive
                }
                #[cfg(not(target_os = "linux"))]
                {
                    RecursiveMode::Recursive
                }
            };
            w.as_mut().unwrap().watch(&path, recursive)
                .map_err(|e| io::Error::other(e.to_string()))?;
        }

        let mut state = self.state.lock().unwrap();
        let id = state.next_id();
        state.registrations.insert(
            id,
            RegistrationState {
                // Placeholder; replaced by install_callback (or stays a no-op
                // if the caller only wants the watch registered without a stream).
                callback: Arc::new(|_| {}),
                path: arc_path.clone(),
                mode,
            },
        );
        state.path_index.entry(arc_path).or_default().push(id);
        Ok(id)
    }

    /// Install the real event callback on an existing registration.
    fn install_callback(
        &self,
        id: WatcherRegistrationId,
        cb: impl Fn(&Event) + Send + Sync + 'static,
    ) {
        if let Some(reg) = self.state.lock().unwrap().registrations.get_mut(&id) {
            reg.callback = Arc::new(cb);
        }
    }

    fn remove(&self, id: WatcherRegistrationId) {
        let mut state = self.state.lock().unwrap();
        let Some(reg) = state.registrations.remove(&id) else {
            return;
        };
        if let Some(ids) = state.path_index.get_mut(&reg.path) {
            ids.retain(|&x| x != id);
            if ids.is_empty() {
                state.path_index.remove(&reg.path);
            }
        }
        drop(state);

        let res = {
            let mut w = match reg.mode {
                WatcherMode::Native => self.native_watcher.lock().unwrap(),
                WatcherMode::Poll => self.poll_watcher.lock().unwrap(),
            };
            w.as_mut().unwrap().unwatch(&reg.path)
        };
        if let Err(e) = res {
            // inotify auto-removes a watch when its directory is deleted, so a
            // later unwatch can race that and fail benignly. Ignore WatchNotFound.
            if !matches!(e.kind, notify::ErrorKind::WatchNotFound) {
                tracing::warn!("fs watcher unwatch failed for {:?}: {e}", reg.path);
            }
        }
    }

    fn ensure_watcher(&self, mode: WatcherMode) -> notify::Result<()> {
        match mode {
            WatcherMode::Native => {
                let mut slot = self.native_watcher.lock().unwrap();
                if slot.is_some() {
                    return Ok(());
                }
                // CORE-style filtering isn't available in notify 6.1; the native
                // backend already avoids Access events by default. Use default config.
                let watcher = notify::RecommendedWatcher::new(
                    {
                        let tx = self.event_tx.clone();
                        move |event| {
                            let _ = tx.try_send((WatcherMode::Native, event));
                        }
                    },
                    notify::Config::default(),
                )?;
                *slot = Some(Box::new(watcher) as Box<dyn WatchBackend>);
            }
            WatcherMode::Poll => {
                let mut slot = self.poll_watcher.lock().unwrap();
                if slot.is_some() {
                    return Ok(());
                }
                let config = notify::Config::default().with_poll_interval(poll_interval());
                let watcher = notify::PollWatcher::new(
                    {
                        let tx = self.event_tx.clone();
                        move |event| {
                            let _ = tx.try_send((WatcherMode::Poll, event));
                        }
                    },
                    config,
                )?;
                *slot = Some(Box::new(watcher) as Box<dyn WatchBackend>);
            }
        }
        Ok(())
    }

    /// Find every registration whose watched path is an ancestor of (or equal to)
    /// `event_path`, and invoke its callback. Mirrors Zed's ancestor-matching.
    fn dispatch(&self, event: Event) {
        let mut ids: Vec<WatcherRegistrationId> = Vec::new();
        let state = self.state.lock().unwrap();
        for event_path in &event.paths {
            for ancestor in event_path.ancestors() {
                if let Some(regs) = state.path_index.get(ancestor) {
                    ids.extend_from_slice(regs);
                }
                if ancestor == event_path {
                    break;
                }
            }
        }
        ids.sort_unstable();
        ids.dedup();
        for id in ids {
            if let Some(reg) = state.registrations.get(&id) {
                (reg.callback)(&event);
            }
        }
    }
}

static GLOBAL_WATCHER: OnceLock<GlobalWatcher> = OnceLock::new();

fn global_watcher() -> &'static GlobalWatcher {
    GLOBAL_WATCHER.get_or_init(|| {
        let (event_tx, event_rx) = async_channel::unbounded();
        std::thread::Builder::new()
            .name("fs-watcher-dispatch".to_string())
            .spawn(move || {
                while let Ok((_mode, event)) = event_rx.recv_blocking() {
                    match event {
                        Ok(event) => global_watcher().dispatch(event),
                        Err(e) => tracing::warn!("fs watcher error: {e}"),
                    }
                }
            })
            .expect("failed to spawn fs watcher dispatch thread");
        GlobalWatcher {
            state: Mutex::new(WatcherState {
                registrations: HashMap::new(),
                last_id: WatcherRegistrationId(0),
                path_index: HashMap::new(),
            }),
            native_watcher: Mutex::new(None),
            poll_watcher: Mutex::new(None),
            event_tx,
        }
    })
}
