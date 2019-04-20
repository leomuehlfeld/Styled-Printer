import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import io from "socket.io-client";

// Import Containers
import InputSection from "./container/input-section.js";
import OutputSection from "./container/output-section.js";

// Import Typo
import Headline from "./components/typo/headline.js";

// Import Form
import Modal from "./components/form/modal.js";
import Input from "./components/form/input.js";

// Globa Styled Literal
const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/xbh2tiu.css");

  body {
    margin: 0;
    padding: 0;
    font-family: neue-haas-grotesk-display;
  }
`;

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
      <GlobalStyle />
      <Headline>Air Printer</Headline>
      <InputSection>
        <Modal>
          <Input
            placeholder="Message"
            onChange={e => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <Input
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
        </Modal>
      </InputSection>

      <OutputSection>
        <ul>
          {messages.map(m => (
            <li>
              {m.author || "Anonym"} wrote: {m.message}{" "}
              {new Date(m.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </OutputSection>
    </div>
  );
};

export default App;
