use config_rs::root::base_dir;
use futures::{stream, Stream};
use std::path::Path;
use std::pin::Pin;

/// Subscribe to real-time changes in a task (episode-level) directory tree.
///
/// Watches the directory at `task_dir` (relative to `base_dir()`, or an absolute
/// path) using a `NonRecursive` OS watcher — exactly one inotify watch, so the
/// cost is tiny. Emits [`fs::PathEvent`] for every leaf that changes inside that
/// directory (e.g. `.log` updates, generated `.srt`/video). The event carries the
/// path and the kind of change, but **never the file contents**; the consumer
/// decides when to read.
///
/// Note: this is the episode-level directory. To observe a newly created
/// sub-task, watch its parent directory and, on a `Created` directory event,
/// open another `watch_task_tree` for it (per-directory,逐级 watch).
#[fnrpc::rpc_subscribe]
pub fn watch_task_tree(task_dir: String) -> impl Stream<Item = fs::PathEvent> {
    let p = if Path::new(&task_dir).is_relative() {
        base_dir().join(&task_dir)
    } else {
        Path::new(&task_dir).to_path_buf()
    };

    let event_stream: Pin<Box<dyn Stream<Item = fs::PathEvent> + Send>> = match fs::watch_stream(p) {
        Ok(s) => Box::pin(s),
        Err(e) => {
            tracing::error!("failed to watch task tree {task_dir}: {e}");
            Box::pin(stream::empty())
        }
    };
    event_stream
}
