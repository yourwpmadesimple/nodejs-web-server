const { Server } = require("ws");

const wss = new Server({ port: "3000" });

wss.on("connection", (socket) => {
  socket.on("close", () => {
    console.log("socket disconnected");
  });

  console.log("New socket connected");
});

console.log("chat server waiting for onnection on ws://localhost:3000");
