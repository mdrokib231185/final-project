import React from "react";

const Reviews = ({ review }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.description}</p>
          <div className="flex justify-center items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                <img src={review.img} alt="" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl">{review.name}</h1>
              <h2 className="text-2xl">{review.location}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
