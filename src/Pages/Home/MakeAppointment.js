import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from "./Shared/PrimaryBtn";
const MakeAppointment = () => {
  return (
        <section style={{
          background: `url(${appointment})`
    }} className="flex justify-center items-center">
      
        <div className="flex-1 hidden lg:block">
          <img className='mt-[-150px]' style={{height:500}} src={doctor} alt="" />
        </div>
        <div className="flex-1 text-white px-5">
          <h3 className="text-primary text-xl">Appointment</h3>
          <h2 className="text-2xl py-5">Make an Appointment today</h2>
          <p className="text-3xl pb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            corporis a velit quia. Similique minima quia reiciendis beatae.
            Sequi voluptate asperiores corrupti vero reiciendis tempore
            accusantium natus illum rerum molestias cumque quaerat placeat sed
            odit nisi corporis, ipsam itaque ex!
                    </p>
                    <PrimaryBtn> Get Appointment</PrimaryBtn>
        </div>
      
    </section>
  );
};

export default MakeAppointment;
