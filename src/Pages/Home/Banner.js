import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryBtn from "./Shared/PrimaryBtn";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen px-12 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-3xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              nesciunt nulla alias quod, accusantium cum cupiditate, maxime
              nobis repellendus voluptatum magnam facilis deserunt aperiam quo.
              Minima, sit soluta. Numquam, blanditiis.
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
