import React from "react";
import "../css/App.css";

const MessageComponent = ({ type, message, score }) => {
  const messageClass =
    type === "Translate" || type === "Answer" ? "user-message" : "bot-message";
  const roundedScore = Math.round(score);

  return (
    <div className={`message ${messageClass}`}>
      <span className="denoter">{type}</span>
      {"  "}
      <span className="msg">{message}</span>
      {type === "Answer" && (
        <div className="level-score">
          Score <span className="score">{roundedScore}%</span>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
