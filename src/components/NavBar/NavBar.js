import { React, useState } from "react";
import { Link } from "react-router-dom";
import { WiDaySunny } from "react-icons/wi";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <WiDaySunny className="navbar-icon" />
          EXCELLENT TITLE, MUCH WOW, SUCH COOL
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
            <Link to="/" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Plans
            </Link>
          </li>
          <li className="nav-btn">
            <button type="button">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
