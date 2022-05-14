import React from "react";

const Servicess = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card  shadow-xl">
        <div className="card-body">
          <h2 className="text-primary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">No Slot Available</span>
            )}
          </p>
          <p>{slots.length} space available</p>
          <div className="card-actions justify-end">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              for="booking-modal"
              className="btn-primary btn modal-button"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicess;
