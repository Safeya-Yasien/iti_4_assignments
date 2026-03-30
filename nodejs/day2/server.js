const http = require("http");
const handleTaskRoutes = require("./routes/taskRoutes");
const { sendJSON } = require("./utils/helpers");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    sendJSON(res, 200, { message: "Hello World" });
  } else {
    handleTaskRoutes(req, res);
  }
});

server.listen(3000, () =>
  console.log(`Server is running on port 3000: http://localhost:3000`),
);
