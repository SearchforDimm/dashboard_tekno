import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img src="../images/teknomadya.png" alt="logo_img" />
        </span>
        <span className="logo_name">TEKNOMADYA</span>
        <i
          className="bx bx-chevron-left"
          id="lock-icon"
          title="Unlock Sidebar"
        ></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>
      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-home-alt"></i>
                <span>Home Page</span>
              </a>
            </li>
          </ul>
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Pages</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="calendar.html" className="link flex">
                <i className="bx bx-calendar"></i>
                <span>Calendar</span>
              </a>
            </li>
            <li className="item">
              <a href="worklog.html" className="link flex">
                <i className="bx bx-briefcase"></i>
                <span>Work Log</span>
              </a>
            </li>
            <li className="item">
              <a href="workorder.html" className="link flex">
                <i className="bx bx-table"></i>
                <span>Work Order</span>
              </a>
            </li>
          </ul>
          <ul className="menu_item logout">
            <div className="menu_title flex">
              <span className="title">Setting</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <button className="link flex btn-logout" onClick={Logout}>
                <i className="bx bx-log-out"></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
