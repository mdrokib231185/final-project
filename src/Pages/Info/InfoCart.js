import React from "react";

const InfoCart = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card card-side  shadow-xl ${bgClass}`}>
      <figure className="pl-5 pt-5">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCart;
