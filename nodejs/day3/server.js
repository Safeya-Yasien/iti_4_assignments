const express = require("express");
const app = express();
const PORT = 3000;
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});
