import React from 'react';
import "../css/App.css";

const InputBox = () => {
    return (
        <div className="input-group fixed-bottom">
            <input type="text" className="form-control" placeholder="Type to Translate..." />
            <button className="goal-btn"><i className='fas fa-paper-plane'></i></button>
        </div>
    );
};

export default InputBox;
