import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import InputBox from "./components/InputBox";
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="chat-container">
          <Sidebar />
          <MainContent />
        </div>
        <InputBox />
      </div>
    </Router>
  );
};

export default App;


