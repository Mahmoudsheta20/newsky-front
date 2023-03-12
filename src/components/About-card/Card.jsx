import React from "react";
import { card1, makhha, paris, tawar } from "../../assets/image";
import "./Card.css";

const Card = () => {
  return (
    <div className="About__main">
      <div className="conatiner">
        <div className="row">
          {" "}
          <div className="card">
            <img src={makhha} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Working hours</p>
              <p>
                Sunday - Thursday <span>9AM - 9PM</span>
              </p>
              <button>Get directions</button>
            </div>
          </div>{" "}
          <div className="card">
            <img src={tawar} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Working hours</p>
              <p>
                Sunday - Thursday <span>9AM - 9PM</span>
              </p>
              <button>Get directions</button>
            </div>
          </div>{" "}
          <div className="card">
            <img src={paris} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Working hours</p>
              <p>
                Sunday - Thursday <span>9AM - 9PM</span>
              </p>
              <button>Get directions</button>
            </div>
          </div>{" "}
          <div className="card">
            <img src={paris} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Working hours</p>
              <p>
                Sunday - Thursday <span>9AM - 9PM</span>
              </p>
              <button>Get directions</button>
            </div>
          </div>{" "}
          <div className="card">
            <img src={paris} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Working hours</p>
              <p>
                Sunday - Thursday <span>9AM - 9PM</span>
              </p>
              <button>Get directions</button>
            </div>
          </div>{" "}
          <div className="card">
            <img src={card1} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Working hours</p>
              <p>
                Sunday - Thursday <span>9AM - 9PM</span>
              </p>
              <button>Get directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
