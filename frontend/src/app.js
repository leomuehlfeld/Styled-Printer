import React, { useState, useEffect, useCallback, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import io from "socket.io-client";
// Import Containers
import InputSection from "./container/input-section.js";
import OutputSection from "./container/output-section.js";
// Import Layouts
import ListElement from "./components/layouts/list-element.js";
import Header from "./components/layouts/header.js";
// Import Form
import Modal from "./components/form/modal.js";
import TextArea from "./components/form/textarea.js";
import Input from "./components/form/input.js";
import Button from "./components/form/button.js";
// Global Styled Literal
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body{
    font-family: neue-haas-grotesk-display;
    letter-spacing: .5px;
  }
`;

const useSocket = () => {
  const socketRef = useRef(null)

  useEffect(() => {
    //Your IP goes here:
    const s = io("192.168.0.38:8080");
    socketRef.current = s;
  }, [socketRef]);
  return socketRef
}

const App = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useSocket()

  const addMessage = useCallback(message => {
    setMessages([message, ...messages]);
  }, [messages]);

  useEffect(
    () => {
      const socket = socketRef.current;
      // Is socket initialized yet?
      if (socket) {
        console.log("Listening for messages")
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
      } else {
        console.log("Socket not found")
      }
    },
    [messages, addMessage, socketRef]
  );

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <InputSection>
        <Modal>
          <TextArea
            maxLength="100"
            placeholder="Your Message"
            onChange={e => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <Input
            maxLength="20"
            placeholder="Your name"
            onChange={e => setUser(e.target.value)}
            value={user}
            type="text"
          />
          <Button
            warning
            type="button"
            onClick={e => {
              e.preventDefault();
              setValue("");
              setUser("");
            }}
          >
            Clear
          </Button>
          <Button
            type="submit"
            onClick={e => {
              // Prevent form reload
              e.preventDefault();

              // Send Message
              socketRef.current.emit("message", {
                message: value,
                author: user
              });
              // Reset message input
              setValue("");
              // Append message
              addMessage({
                message: value,
                date: new Date(),
                author: user
              });
            }}
          >
            Print
          </Button>
        </Modal>
      </InputSection>

      <OutputSection>
        {messages.map(m => (
            <ListElement
              msg={m.message}
              author={m.author || "Anonym"}
              date={new Date(m.date).toLocaleDateString()}
            />
          ))}
      </OutputSection>
    </div>
  );
};

export default App;
