import React from "react";

const LevelCompletePopup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
      <div className="emoji" style={{ fontSize: "50px" }}>
        😊
      </div>
        <h2>Level Complete!</h2>
        <p>Congratulations! You have completed the level.</p>
        <button className="popup-button" onClick={onClose}>
          Proceed to Next Level
        </button>
      </div>
    </div>
  );
};

export default LevelCompletePopup;
