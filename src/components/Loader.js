import React from "react";
import logo from "../assets/images/logo.png";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="progress-bar"></div>
    </div>
  );
};

export default Loader;
