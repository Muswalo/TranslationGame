import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";
import "../css/App.css";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";

const Sidebar = ({ levels, onLevelClick, userName, onLogout }) => {
  const { isSideBarOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <div className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
      <div>
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
          <div className="sidebar-logo-text">LLPS GAME</div>
        </div>

        <span className="headertext">Levels</span>

        <ul className="nav flex-column mb-3">
          {levels.map((level) => (
            <li key={level.id} className="nav-item lev">
              <Link
                className={`nav-link ${level.isLocked ? "locked" : "lev"}`}
                to="#"
                onClick={(event) => {
                  if (level.isLocked) {
                    event.preventDefault();
                  } else {
                    onLevelClick(level.id);
                  }
                }}
              >
                {level.name} {level.isLocked && <i className="fas fa-lock"></i>}
              </Link>
            </li>
          ))}
        </ul>

        <span className="headertext">Navigation</span>

        <ul className="nav flex-column mb-3">
          <li className="nav-item lev">
            <Link className="nav-link lev" to="#">
              Grades <i className="fas fa-graduation-cap"></i>
            </Link>
          </li>
          <li className="nav-item lev">
            <Link className="nav-link lev" to="#">
              Settings <i className="fas fa-cog"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-cont">
        <div className="user-image-container">
          <img src={user} alt="Profile" className="user-image" />
        </div>
        <div className="user-cred">
          <Link to="#" className="logout" onClick={onLogout}>
            Logout
            <span>
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </Link>
          <Link to="#" className="profile-link">
            {userName}
          </Link>
        </div>
      </div>

      <div
        className="closeIcon"
        onClick={() => (isSideBarOpen ? closeSidebar() : openSidebar())}
      >
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default Sidebar;
