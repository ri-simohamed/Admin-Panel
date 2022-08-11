import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Electro-Shop</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Shop By Department</p>

          <li>
            <PhoneAndroidOutlinedIcon className="icon" />
            <span>Phone</span>
          </li>

          <li>
            <HeadphonesOutlinedIcon className="icon" />
            <span>Headphones</span>
          </li>
          <li>
            <ComputerOutlinedIcon className="icon" />
            <span>Computer</span>
          </li>
          <li>
            <AirportShuttleOutlinedIcon className="icon" />
            <span>Cars</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
