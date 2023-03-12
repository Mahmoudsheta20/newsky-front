import React, { useState } from "react";
import { logo } from "../../assets/image";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  const [active, setactive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="right">
          <img src={logo} alt="" />
          <h2>
            New<span>sky</span>
          </h2>
        </div>

        <div className="center">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Our Offices</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="left">
          <button>Book Now</button>
          {/* <p>Lng</p> */}
        </div>
      </nav>
      <nav className="menu">
        <div className="right">
          <img src={logo} alt="" />
          <h2>
            New<span>sky</span>
          </h2>
        </div>

        <div className="left__menu" onClick={() => setactive(!active)}>
          <AiOutlineMenu />
        </div>
        <div className={`center__menu ${active && "active"}`}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Our Offices</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
