import { React, useState } from "react";
import { Link } from "react-router-dom";
import { WiDaySunny } from "react-icons/wi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { Button } from "../Button/Button.js";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <WiDaySunny className="navbar-icon" />
          SUNNY
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/demo" className="nav-links">
              Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plans" className="nav-links">
              Plans
            </Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/sign-up" className="btn-link">
                <Button
                  buttonStyle="btn-style-outline"
                  buttonFont="btn-font-default"
                >
                  Sign Up
                </Button>
              </Link>
            ) : (
              <Link to="/sign-up" className="btn-link">
                <Button
                  buttonStyle="btn-style-outline"
                  buttonSize="btn-size-mobile"
                  buttonFont="btn-font-default"
                >
                  Sign Up
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
