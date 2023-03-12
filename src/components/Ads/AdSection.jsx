import React from "react";
import { HeaderImg } from "../../assets/image";
import "./Ads.css";
const AdSection = () => {
  return (
    <div className="ads">
      <div className="container__ads">
        <img src={HeaderImg} alt="" />
      </div>
    </div>
  );
};

export default AdSection;
