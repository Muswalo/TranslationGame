import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import InputBox from "./components/InputBox";
import { SidebarProvider } from "./contexts/SidebarContext";

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <div className="container-fluid">
          <div className="chat-container">
            <Sidebar />
            <MainContent />
          </div>
          <InputBox />
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;


