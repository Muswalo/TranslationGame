import React from "react";
import { useSidebar } from "../contexts/SidebarContext";
import "../css/App.css";
import MessageComponent from "./MessageComponent";

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
        {messages.length === 0 ? (
          noMessagesContent
        ) : (
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <MessageComponent
                key={index}
                type={msg.type}
                message={msg.message}
                score={msg.score}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
