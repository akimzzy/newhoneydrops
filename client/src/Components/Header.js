import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Header = ({ open, setOpen }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(
      () => (value === 300 ? setValue(0) : setValue(value + 100)),
      5000
    );
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <header id="#">
      <img className="logoBG" src={require("../assets/logoBG.svg")} alt="" />

      <Nav open={open} setOpen={setOpen} />

      <div className="content">
        <div className="words">
          <h1>Honeydrops Telematics Ltd.</h1>
          <div className="message">
            <p className={value < 100 ? "active" : ""}>Track your car/vehicle from anywhere in the world</p>
            <p className={value === 100 ? "active" : ""}>Car/Vehicle security? We've got you covered.</p>
            <p className={value === 200 ? "active" : ""}>...bridging the gap between a need and a service.</p>
            <p className={value === 300 ? "active" : ""}>...bridging the gap between a need and a service.</p>
          </div>
          <a href="#services">
            <button>Get started</button>
          </a>
          {/* <button className="button_sec">Contact us</button> */}
        </div>

        <div className="slide_container">
          <div>
            <div
              className="slide"
              style={{ transform: `translateX(-${value}%)` }}
            >
              <div className="slide_img">
                <img
                  src={require("../assets/slide1.png")}
                  alt="cars and trucks"
                />
              </div>
              <div className="slide_img">
                <img
                  src={require("../assets/slide1.png")}
                  alt="cars and trucks"
                />
              </div>
              <div className="slide_img">
                <img
                  src={require("../assets/slide1.png")}
                  alt="cars and trucks"
                />
              </div>
              <div className="slide_img">
                <img
                  src={require("../assets/slide1.png")}
                  alt="cars and trucks"
                />
              </div>
            </div>
          </div>
          <div className="trailBox">
            <div
              className={value === 0 ? "trail active" : "trail"}
              onClick={() => setValue(0)}
            ></div>
            <div
              className={value === 100 ? "trail active" : "trail"}
              onClick={() => setValue(100)}
            ></div>
            <div
              className={value === 200 ? "trail active" : "trail"}
              onClick={() => setValue(200)}
            ></div>
            <div
              className={value === 300 ? "trail active" : "trail"}
              onClick={() => setValue(300)}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
