import React from 'react';
import "../css/App.css";

const InputBox = () => {
    return (
        <div className="input-group fixed-bottom">
            <input type="text" className="form-control" placeholder="Type to Translate..." />
            <button className="goal-btn">GO</button>
        </div>
    );
};

export default InputBox;
