import React from "react";
import { HeaderImg } from "../../assets/image";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img src={HeaderImg} alt="" />
      <section>
        <div className="container">
          <div className="form">
            <div className="input">
              <p>
                <MdDateRange />
              </p>
              <input type="text" placeholder="Depart" />
            </div>
            <div className="input">
              <p>
                <MdDateRange />
              </p>
              <input type="text" placeholder="Return" />
            </div>
          </div>
          <div className="form">
            <div className="input">
              <p>
                <GiAirplaneDeparture />
              </p>
              <input type="text" id="from" placeholder="Enter Your Place" />
            </div>

            <div className="input">
              <p>
                <GiAirplaneArrival />
              </p>
              <input type="text" id="to" placeholder="Enter Destantion" />
            </div>
          </div>

          <div className="button">
            <button>Search</button>
          </div>
        </div>

        {/* <div className="form">

          <div className="from_to">
            <div className="input">
              <input type="text" placeholder="Depart" />
              <p>
                <MdDateRange />
              </p>
            </div>
            <div className="input">
              <input type="text" placeholder="Return" />
              <p>
                <MdDateRange />
              </p>
            </div>
          </div>

          <div className="from_to">
            <div className="input">
              <input type="text" id="from" placeholder="Enter Your Place" />
              <label htmlFor="from">
                <GiAirplaneDeparture />
              </label>
            </div>

            <div className="input">
              <input type="text" id="to" placeholder="Enter Destantion" />
              <label htmlFor="to">
                <GiAirplaneArrival />
              </label>
            </div>
          </div>
          <div className="button">
            <button>Click</button>
          </div>
        </div> */}
      </section>
    </header>
  );
};

export default Header;
