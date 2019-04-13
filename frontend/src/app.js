import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// Import Typo
import Headline from "./components/typo/headline";

const App = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const addMessage = message => {
    setMessages([message, ...messages]);
  };

  useEffect(() => {
    const s = io("192.168.0.108:8080");
    setSocket(s);
  }, []);

  useEffect(
    () => {
      // Is socket initialized yet?
      if (socket) {
        // Listen for new incoming message
        socket.on("message", message => {
          addMessage(message);
        });

        // Listen for all previous messages
        socket.on("all messages", allMessages => {
          // Update state to new messages
          console.log("All", allMessages);

          setMessages(
            [...allMessages].sort((a, b) => new Date(b.date) - new Date(a.date))
          );
        });
      }
    },
    [messages, socket]
  );

  return (
    <div className="App">
      <Headline>Air Printer</Headline>
      <form>
        <input
          placeholder="Message"
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <input
          maxLength="50"
          placeholder="Username"
          onChange={e => setUser(e.target.value)}
          value={user}
          type="text"
        />
        <button
          onClick={e => {
            // Prevent form reload
            e.preventDefault();

            // Send Message
            socket.emit("message", {
              message: value,
              author: user
            });

            // Reset message input
            // setValue("");

            // Append message
            addMessage({
              message: value,
              date: new Date(),
              author: user
            });
          }}
        >
          Print
        </button>
      </form>
      <ul>
        {messages.map(m => (
          <li>
            {m.author || "Anonym"} wrote: {m.message}{" "}
            {new Date(m.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
