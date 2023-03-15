import React, { useState, useEffect } from "react";
import "./Social.css";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { messenger, snapchat, whatsapp } from "../../assets/image";

const Social = () => {
  const [active, setActive] = useState(false);
  const [length, strength] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      strength(window.scrollY);
    };
  }, []);
  console.log(length);

  return (
    <>
      {active ? (
        <div
          className={`social ${length > 200 && "active"}`}
          onClick={() => setActive(false)}
        >
          <p>
            <IoIosArrowDown />
          </p>
        </div>
      ) : (
        <div
          className={`social ${length > 200 && "active"}`}
          onClick={() => setActive(true)}
        >
          <p>
            <BiMessageSquareDetail />
          </p>
        </div>
      )}
      {active && (
        <div className="social__menu">
          {/* <div className="esc">
          <IoClose />
        </div> */}
          <h3>Chat with us:</h3>

          <div className="social_box">
            <img src={whatsapp} alt="" />
            <p>whats App</p>
          </div>
          <div className="social_box">
            <img src={messenger} alt="" />
            <p>Messenger</p>
          </div>
          <div className="social_box">
            <img src={snapchat} alt="" />
            <p>Snapchat</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Social;
