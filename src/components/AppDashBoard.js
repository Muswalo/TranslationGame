import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import InputBox from "./InputBox";

const AppDashBoard = () => {
  return (
    <div className="container-fluid">
      <div className="chat-container">
        <Sidebar />
        <MainContent />
      </div>
      <InputBox />
    </div>
  );
};

export default AppDashBoard;
