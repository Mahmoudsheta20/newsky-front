import React from "react";
import { makhha, tawar } from "../../assets/image";
import "./ImageGrid.css";
const ImageGrid = () => {
  return (
    <div className="galery">
      <h2>
        Top <span>Hotels</span> & <span>Place</span>
      </h2>
      <div className="conatiner__galery">
        <div className="col">
          <div className="top">
            <img src={makhha} alt="" />
          </div>
          <div className="bottom">
            <img src={tawar} alt="" />
          </div>
        </div>
        <div className="col-center">
          <img src={tawar} alt="" />
        </div>
        <div className="col">
          <div className="top">
            <img src={tawar} alt="" />
          </div>
          <div className="bottom">
            <img src={makhha} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
