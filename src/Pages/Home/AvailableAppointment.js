import { format } from "date-fns";
import id from "date-fns/esm/locale/id/index.js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";
import Services from "./Servicess";
import Loading from "./Shared/Loading";

const AvailableAppointment = ({ date }) => {
  //   const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  //    useEffect(() => {
  //      fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //        .then((res) => res.json())
  //        .then((data) => setServices(data));
  //    }, [formatedDate]);

  return (
    <div>
      <h1 className="text-xl text-primary text-center">
        Available Appointment :{format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Services
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Services>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
