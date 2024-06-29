import React from "react";
import { useSidebar } from "../contexts/SidebarContext";
import "../css/App.css";

const MainContent = ({ messages, currentLevel, score, totalT, agscore }) => {
  const { openSidebar } = useSidebar();

  const noMessagesContent = (
    <div className="welcome-message">
      <div className="emoji" style={{ fontSize: "50px" }}>
        😉
      </div>
      <p className="welcome-text">
        Hello there, young explorer! Ready to play the translation game? Let's
        learn something new today!
      </p>
    </div>
  );

  const MessageComponent = ({ type, message, score }) => {
    const messageClass =
      type === "Translate" || type === "Answer"
        ? "user-message"
        : "bot-message";
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

  return (
    <div className="main-content">
      <div className="det-cont">
        <span className="openIcon" onClick={openSidebar}>
          <i className="fas fa-bars-staggered"></i>
        </span>
        <span className="level-cont">
          <span className="levelLabel">{currentLevel}</span>
          <span className="count">{`${score}/${totalT}`}</span>
        </span>
        <span className="agscore">
          Score <span className="score">{agscore}%</span>
        </span>
      </div>

      <div className="chat-box">
        {messages.length === 0
          ? noMessagesContent
          : messages.map((msg, index) => (
              <MessageComponent
                key={index}
                type={msg.type}
                message={msg.message}
                score={msg.score}
              />
            ))}
      </div>
    </div>
  );
};

export default MainContent;
