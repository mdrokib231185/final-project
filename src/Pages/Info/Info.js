import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <InfoCart
            cardTitle="Opening Ours"
            bgClass="bg-gradient-to-r from-secondary to-primary"
            img={clock}
          ></InfoCart>
          <InfoCart
            cardTitle="Our location"
            bgClass="bg-accent"
            img={marker}
          ></InfoCart>
          <InfoCart
            cardTitle="Contact us"
            bgClass="bg-gradient-to-r from-secondary to-primary"
            img={phone}
          ></InfoCart>
        </div>
      );
};

export default Info;