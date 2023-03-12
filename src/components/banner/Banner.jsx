import React from "react";
import { banner, banner1, HeaderImg } from "../../assets/image";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="ads">
      <div className="container__ads">
        <img src={HeaderImg} alt="" />
      </div>
      <div className="text">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a.{" "}
        </p>
      </div>
    </div>
  );
};

export default Banner;
