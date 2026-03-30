const {
  sendJSON,
  parseJSONBody,
  readTasks,
  writeTasks,
} = require("../utils/helpers");

const handleTaskRoutes = async (req, res) => {
  const { method, url } = req;
  const urlParts = url.split("/");

  //    lab 2 get tasks
  if (method === "GET" && url === "/tasks") {
    sendJSON(res, 200, readTasks());
  }

  // lab 3 post task
  else if (method === "POST" && url === "/tasks") {
    const body = await parseJSONBody(req);
    const tasks = readTasks();
    const newTask = { id: Date.now(), title: body.title, done: false };
    tasks.push(newTask);
    writeTasks(tasks);
    sendJSON(res, 201, newTask);
  }

  // lab4 delete task by id
  else if (method === "DELETE" && url.startsWith("/tasks/")) {
    const id = Number(urlParts[2]);
    let tasks = readTasks();
    const index = tasks.findIndex((t) => t.id === id);

    if (index !== -1) {
      tasks.splice(index, 1);
      writeTasks(tasks);
      sendJSON(res, 200, { message: "Task deleted" });
    } else {
      sendJSON(res, 404, { error: "Task not found" });
    }
  } else {
    sendJSON(res, 404, { error: "Not Found" });
  }
};

module.exports = handleTaskRoutes;
