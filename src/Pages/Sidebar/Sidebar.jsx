import React from 'react'
import blogo from '../../assets/blogo.png'
import "boxicons/css/boxicons.min.css";
import './Side.css'
const Sidebar = () => {
  return (
    <div className="side-main">
      <div className="side-logo">
        <img src={blogo} alt="logo" />
      </div>
      <div >
        <div className="sideSection">
          <i
            class="bx bxs-dashboard"
            style={{ color: "#9A9AA9", fontSize: "30px" }}
          ></i>
          <p>Dashboard</p>
        </div>
        <div className="sideSection">
          <i
            class="bx bxs-bar-chart-square"
            style={{ color: "#605BFF", fontSize: "30px" }}
          ></i>
          <p style={{ color: "#605BFF" }}>Upload</p>
        </div>
        <div className="sideSection">
          <i
            class="bx bxs-receipt"
            style={{ color: "#9A9AA9", fontSize: "30px" }}
          ></i>
          <p>Invoice</p>
        </div>
        <div className="sideSection">
          <i
            class="bx bxs-notepad"
            style={{ color: "#9A9AA9", fontSize: "30px" }}
          ></i>
          <p>Schedule</p>
        </div>
        <div className="sideSection">
          <i
            class="bx bxs-calendar"
            style={{ color: "#9A9AA9", fontSize: "30px" }}
          ></i>
          <p>Calendar</p>
        </div>
        <div className="sideSection">
          <i
            class="bx bxs-bell"
            style={{ color: "#9A9AA9", fontSize: "30px" }}
          ></i>
          <p>Notification</p>
        </div>
        <div className="sideSection">
          <i
            class="bx bxs-cog"
            style={{ color: "#9A9AA9", fontSize: "30px" }}
          ></i>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
