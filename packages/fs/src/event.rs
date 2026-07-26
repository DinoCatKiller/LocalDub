//! File-system event types, modeled on Zed's `PathEvent` / `PathEventKind`.

use serde::{Deserialize, Serialize};
use specta::Type;
use std::path::PathBuf;

/// What happened to a watched path. Mirrors the subset of `notify::EventKind`
/// we care about; `Rescan` is emitted when the OS watcher loses sync and the
/// consumer should re-read state from disk rather than trust incremental events.
#[derive(Copy, Clone, PartialEq, Eq, Debug, Serialize, Deserialize, Type)]
pub enum PathEventKind {
    Removed,
    Created,
    Changed,
    Rescan,
}

/// A single filesystem change delivered to a watcher.
#[derive(Clone, PartialEq, Eq, Debug, Serialize, Deserialize, Type)]
pub struct PathEvent {
    pub path: PathBuf,
    pub kind: Option<PathEventKind>,
}

impl PathEvent {
    pub fn new(path: impl Into<PathBuf>, kind: Option<PathEventKind>) -> Self {
        Self {
            path: path.into(),
            kind,
        }
    }
}

/// Which backend a registration uses. Native uses the OS watcher
/// (inotify/FSEvents/ReadDirectoryChanges); Poll falls back to periodic
/// stat-based scanning for filesystems where native watching is unreliable.
#[derive(Clone, Copy, Debug, Default, PartialEq, Eq)]
pub enum WatcherMode {
    #[default]
    Native,
    Poll,
}
