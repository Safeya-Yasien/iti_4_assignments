import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello test" });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
