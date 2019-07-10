import * as task from "azure-pipelines-task-lib/task";

console.log(`Running on nodejs ${process.version}`);

task.setResult(task.TaskResult.Succeeded, '');