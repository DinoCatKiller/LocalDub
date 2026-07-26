//! LocalDub filesystem watching crate.
//!
//! Provides a generic, process-global file watcher built on `notify`, modeled on
//! Zed's `fs_watcher.rs` but without editor-only complexity. Watch a directory
//! and receive a stream of [`PathEvent`]s; filter by child name in the caller to
//! track a single file (this survives the file being truncated or recreated).
//!
//! ```
//! # async fn example() -> std::io::Result<()> {
//! use fs::watch_stream;
//! let mut stream = watch_stream("/path/to/dir")?;
//! # Ok(())
//! # }
//! ```

mod event;
mod watcher;

pub use event::{PathEvent, PathEventKind, WatcherMode};
pub use watcher::{watch, watch_stream, FsWatch};
