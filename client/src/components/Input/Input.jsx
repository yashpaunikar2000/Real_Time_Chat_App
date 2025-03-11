import React from "react";
import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter
      sendMessage(event);
    }
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown} // Updated from onKeyPress to onKeyDown
      />
      <button className="sendButton" type="button" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default Input;
