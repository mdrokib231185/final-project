import React from "react";
import Services from "./Services";
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'

const Service = () => {
  const services = [
    {
      id: 1,
      title: " Fluoride Treatment",
      description: "Lorem ipsum dolor sit amet.",
      img: flouride ,
    },
    {
      id: 2,
      title: " Cavity Treatment",
      description: "Lorem ipsum dolor sit amet.",
      img: cavity ,
    },
    {
      id: 3,
      title: " Teeth Treatment",
      description: "Lorem ipsum dolor sit amet.",
      img:  teeth ,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h1 className="text-primary text-3xl font-bold">Our Service</h1>
        <h3 className=" text-3xl font-bold">Service we provided</h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
