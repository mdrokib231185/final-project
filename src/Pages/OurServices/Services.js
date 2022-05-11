import React from "react";

const Services = ({ service }) => {
  return (
    <div className="card card-compact mt-5 shadow-xl">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
          possimus facere dignissimos ut illum atque impedit porro magni cumque
          aspernatur.
        </p>
      </div>
    </div>
  );
};

export default Services;
