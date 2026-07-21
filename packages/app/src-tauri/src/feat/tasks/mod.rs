pub mod log;

use config_rs::{
    root::base_dir,
    // servers::ServerType
};
use core_rs::{
    cmd::tasks::get_task::GroupInfo,
    context::{
        self,
        Context,
        // Task
    },
};

#[fnrpc::rpc_query]
pub async fn get_group_list() -> Result<Vec<GroupInfo>, String> {
    core_rs::cmd::tasks::get_task::get_group_list()
}

#[fnrpc::rpc_query]
pub async fn get_task_ctx(task_dir: String) -> Result<Context, String> {
    let path = base_dir().join(&task_dir);
    context::read_ctx(
        &path
            .to_str()
            .ok_or_else(|| format!("Invalid task_dir: {}", task_dir))?,
    )
}
