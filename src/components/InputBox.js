import React from "react";
import "../css/App.css";

const InputBox = ({
  inputValue,
  onInputChange,
  onMessageSubmit,
  isStart,
  start,
  onNext,
  showNext,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (isStart) {
        start();
      } else if (showNext) {
        onNext();
      } else if (inputValue.trim()) {
        onMessageSubmit();
      }
    }
  };

  const handleClick = () => {
    if (isStart) {
      start();
    } else if (showNext) {
      onNext();
    } else if (inputValue.trim()) {
      onMessageSubmit();
    }
  };

  return (
    <div className="input-group fixed-bottom">
      <input
        type="text"
        className="form-control"
        placeholder="Type to Translate..."
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
        disabled={isStart || showNext}
      />
      <button
        key={showNext}
        className="goal-btn"
        onClick={handleClick}
        disabled={!inputValue.trim() && !isStart && !showNext}
      >
        {isStart ? (
          <span className="g-button">Start</span>
        ) : showNext ? (
          <i className="fas fa-forward"></i>
        ) : (
          <i className="fas fa-paper-plane"></i>
        )}
      </button>
    </div>
  );
};

export default InputBox;
