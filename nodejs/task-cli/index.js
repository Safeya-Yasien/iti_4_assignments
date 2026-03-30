const fs = require("node:fs");
const path = require("node:path");

// import tasks data from JSON file
const tasksData = require("./tasks.json");

function loadTasks() {
  try {
    const data = fs.readFileSync("tasks.json", "utf-8");
    return JSON.parse(data);
  } catch (e) {
    console.error("Error loading tasks:", e);
  }
}

function saveTasks(tasks) {
  console.log("Saving tasks...");
  try {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
  } catch (e) {
    console.error("Error saving tasks:", e);
  }
}

// return node executable path
// const command = process.argv[0];

// return path of folder
// const command = process.argv[1];

const command = process.argv[2];

switch (command) {
  case "add": {
    const taskName = process.argv[3];
    const taskDescription = process.argv[4];
    const taskId = tasksData.tasks.length + 1;
    tasksData.tasks.push({
      id: taskId,
      name: taskName,
      description: taskDescription,
      completed: false,
    });

    saveTasks(tasksData);
    break;
  }

  case "list": {
    const tasks = loadTasks();
    console.log("Tasks:", tasks);

    break;
  }
  case "remove": {
    const taskId = parseInt(process.argv[3]);
    const tasks = loadTasks();
    const taskIndex = tasks.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      console.error("task not found");
      break;
    }
    tasks.tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    console.log("Task removed successfully", tasks);
    break;
  }
  //   make task as done by id
  case "done": {
    const taskId = parseInt(process.argv[3]);
    const tasks = loadTasks();

    const task = tasks.tasks.find((t) => t.id === taskId);
    if (!task) {
      console.error("task not found");
      break;
    }
    task.completed = true;
    saveTasks(tasks);
    console.log("Task marked as done successfully", tasks);
    break;
  }
}
