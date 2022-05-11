import React from 'react';

const Servicess = ({ service }) => {
      const {name, slots} = service
  return (
    <div>
      <div class="card  shadow-xl">
        <div class="card-body">
          <h2 class="text-primary">{name }</h2>
          <p>{slots.length } space available</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicess;