const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const db = require("knex")(configuration);
const io = require("socket.io")(process.env.PORT || 8080, {
  cors: {
    origin: "https://airprinter.leomuehlfeld.at",
    methods: ["GET", "POST"]
  }
});

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
  const data = await db("messages")
    .orderBy("date", "desc")
    .limit(50);
  return data;
};

// Listen for new connections
io.on("connection", async socket => {
  console.log("connection added");
  const previousMessages = await loadMessages();
  socket.emit("all messages", previousMessages);

  // Listen for incoming messages
  socket.on("message", async messageData => {
    console.log("recieved new message");
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
