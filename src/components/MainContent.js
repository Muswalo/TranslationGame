import React from "react";
import "../css/App.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="det">
        <span className="openIcon">
          <i className="fas fa-bars-staggered"></i>
        </span>
        <div className="det-cont">
          <span className="level-cont">
            <span className="levelLabel">Level 1</span>
            <span className="count">1/20</span>
          </span>
          <span className="agscore">
            Aggregate Score <span className="score">50%</span>
          </span>
        </div>
      </div>

      <div className="chat-box">
        <div className="chat-messages">
          <div className="message user-message">
            <span className="denoter">Translate</span>
            {"  "}
            <span className="msg">Muli bwanji?</span>
          </div>

          <div className="message bot-message">
            <span className="denoter">Student</span>
            {"  "}
            <span className="msg">How is your day?</span>
          </div>

          <div className="message user-message">
            <span className="denoter">Answer</span>
            {"  "}
            <span className="msg">How are you doing?</span>
            <div className="level-score">
              Score <span className="score">50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
