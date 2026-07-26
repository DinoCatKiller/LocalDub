import { StageName } from "../../cmd/tasks/input";
import { TaskStage } from "../../context/types";

export const stages_to_map = (stages: TaskStage[]): Record<StageName, TaskStage> => {
  return stages.reduce((acc, stage) => {
    acc[stage.name as StageName] = stage;
    return acc;
  }, {} as Record<StageName, TaskStage>);
};
