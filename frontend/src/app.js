import React, { useState, useEffect, useRef } from "react";

// Import Typo
import Headline from "./components/typo/headline";

const useSocket = (url, handleConnection, handleMessage) => {
  const ref = useRef();

  useEffect(
    () => {
      let ws = ref.current;
      if (!ws) {
        ws = new WebSocket(url);
        ref.current = ws;
      }

      ws.onopen = handleConnection;
      ws.onmessage = handleMessage;

      return () => {
        ws.close();
      };
    },
    [url]
  );

  return ref && ref.current;
};

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = useSocket(
    "ws://192.168.2.27:8080",
    () => {
      console.log("Connected");
    },
    messageEvent => {
      const newMessages = JSON.parse(messageEvent.data);
      setMessages(newMessages);
    }
  );

  console.log("socket", socket);
  return (
    <div className="App">
      <Headline>Printer</Headline>
      <form>
        <input
          onChange={e => setMessage(e.target.value)}
          value={message}
          type="text"
        />
        <button
          onClick={e => {
            e.preventDefault();
            setMessage("");
            setMessages([
              ...messages,
              {
                message,
                date: new Date()
              }
            ]);
            socket.send(message);
          }}
        >
          Print
        </button>
      </form>
      <ul>
        {messages.map(m => (
          <li>
            {m.message} {new Date(m.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
