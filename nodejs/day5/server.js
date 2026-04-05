const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose
  .connect("mongodb://127.0.0.1:27017/chatLab")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now },
  }),
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", async (socket) => {
  console.log("User connected:", socket.id);

  try {
    const docs = await Message.find().sort({ timestamp: 1 }).limit(10);
    socket.emit("load history", docs);
  } catch (err) {
    console.error(err);
  }

  socket.on("chat message", async (msg) => {
    const newMessage = new Message({ content: msg });
    await newMessage.save();

    io.emit("chat message", msg);
  });
});

server.listen(3000, () => console.log("🚀 Server at http://localhost:3000"));
