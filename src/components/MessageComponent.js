import React from "react";
import "../css/App.css";

const MessageComponent = ({ type, message, score }) => {
  const messageClass = type === "Translate" || type === "Answer" ? "user-message" : "bot-message";

  return (
    <div className={`message ${messageClass}`}>
      <span className="denoter">{type}</span>
      {"  "}
      <span className="msg">{message}</span>
      {type === "Answer" && (
        <div className="level-score">
          Score <span className="score">{score}%</span>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
