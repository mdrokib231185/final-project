import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary-500 to-primary-500 ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
