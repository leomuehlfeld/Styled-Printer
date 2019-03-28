const fs = require("fs-extra");
const WebSocket = require("ws");

const server = new WebSocket.Server({
  port: 8080
});

const STORAGE_PATH = "./data.json";

let messages = [];

let raspSocket = undefined;

const loadInitialData = async () => {
  try {
    messages = await fs.readJson(STORAGE_PATH);
  } catch (err) {
    messages = [];
  }
};

const saveMessage = msg => {
  console.log("Saving message", msg);
  const message = {
    message: msg,
    date: new Date()
  };

  messages.push(message);
  fs.writeJson(STORAGE_PATH, messages);
};

server.on("connection", ws => {
  ws.send(JSON.stringify(messages));
  ws.on("message", msg => {
    saveMessage(msg);
  });
});

loadInitialData();
