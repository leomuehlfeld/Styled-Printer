const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const db = require("knex")(configuration);
const io = require("socket.io")(process.env.PORT || 8080);

// Save Message to DB
// Deconstruct first parameter (messageData) to msg and author and date
const saveMessage = async ({ date, message, author }) => {
  await db("messages").insert({
    date: date,
    message: message,
    author: author
  });
};

// Load Messages from DB
const loadMessages = async () => {
  const data = await db("messages");
  return data;
};

// Listen for new connections
io.on("connect", async socket => {
  const previousMessages = await loadMessages();
  socket.emit("all messages", previousMessages);

  // Listen for incoming messages
  socket.on("message", async messageData => {
    const message = {
      ...messageData,
      date: new Date()
    };
    // Forward message to all clients except for sender
    socket.broadcast.emit("message", message);

    // Save message
    await saveMessage(message);
  });
});
