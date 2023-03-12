import React from "react";
import { RiCustomerService2Fill, Ri24HoursFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { SiFastapi } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import "./Service.css";
import {
  destination,
  passport,
  technical,
  travel,
  wallet,
} from "../../assets/image";
const Service = () => {
  return (
    <div className="service">
      <div className="container__service">
        <div className="box">
          <img src={travel} alt="" />
          <h2>Lorem, ipsum.</h2>

          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="box">
          <img src={passport} alt="" />
          <h2>Lorem, ipsum.</h2>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="box">
          <img src={destination} alt="" />
          <h2>Lorem, ipsum.</h2>

          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="box">
          <img src={technical} alt="" />
          <h2>Lorem, ipsum.</h2>

          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="box">
          <img src={wallet} alt="" />
          <h2>Lorem, ipsum.</h2>

          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
