import * as task from "azure-pipelines-task-lib/task";

task.debug(`Running on nodejs ${process.version}`); // visible only if system.debug is true
console.log(`Running on nodejs ${process.version}`);

// set INPUT_message="my cool message"
const message = task.getInput('message');

console.log(`Your message: ${message}`);

task.setResult(task.TaskResult.Succeeded, '');