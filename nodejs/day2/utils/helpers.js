const fs = require("fs");
const path = require("path");
const DATA_FILE = path.join(__dirname, "../data/tasks.json");

// lab 3
const sendJSON = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

// lab2
const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
};

const readTasks = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));

const writeTasks = (tasks) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));

module.exports = { sendJSON, parseJSONBody, readTasks, writeTasks };
