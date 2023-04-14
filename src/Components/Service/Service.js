import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div
      className="lg:w-[80%] w-[90%] mx-auto lg:px-[100px] p-[20px]  
    lg:pt-[40px] lg:pb-[104px] service lg:mt-[136px] mt-[30px] "
    >
      <div className="service-child flex lg:flex-row flex-col lg:items-center items-start  lg:justify-between w-[100%]">
        <div className="lg:w-[618px] w-[100%]">
          <h1>Let’s try our service now!</h1>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="service-info mt-4">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
