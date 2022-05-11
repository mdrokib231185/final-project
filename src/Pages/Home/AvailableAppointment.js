import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Servicess';

const AvailableAppointment = ({ date }) => {
      const [services, setServices] = useState([])
      useEffect(() => {
            fetch('Services.json')
                  .then(res => res.json())
            .then(data => setServices(data))
      },[])
      return (
        <div>
                  <h1 className='text-xl text-primary text-center'>Available Appointment :{format(date, "PP")}</h1>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {services.map(service => <Services key={service._id}
                        service={service}></Services>)}
                  </div>
        </div>
      );
};

export default AvailableAppointment;