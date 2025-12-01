import { useState } from "react";

function App() {
  const [messageInput, setMessageInput] = useState("");
  const [displayedMessage, setDisplayedMessage] = useState("Hello World");

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h1>React Message App</h1>

      <label>Message to Display:</label>
      <input
        style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />

      <button style={{ padding: "10px 20px" }} onClick={() => setDisplayedMessage(messageInput)}>
        Display Message
      </button>

      <h2>{displayedMessage}</h2>
    </div>
  );
}

export default App;

