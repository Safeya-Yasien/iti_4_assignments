const express = require("express");
const router = express.Router();
const taskService = require("../services/taskService");

router.get("/", async (req, res) => {
  const tasks = await taskService.getTasks();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  try {
    const newTask = await taskService.addTask(req.body.title);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await taskService.deleteTask(Number(req.params.id));
    res.status(200).json({
      success: true,
      message: `Task with id ${req.params.id} deleted`,
    });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
