import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const {_id, slots, name } = treatment;
  const [user, loading, error] = useAuthState(auth);

  // console.log(slots);
  const handelBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const formateDate = format(date, "PP")
    const booking ={
      treatmentId: _id,
      treatment: name,
      date: formateDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.value
    }

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Appointment is set, ${formateDate} at ${slot}`)
        }
        else {
          toast.warning(
            `Already appointment on ${data.booking?.date} at ${data.booking?.date}`
          );
        }
        refetch()
        setTreatment(null);
      });
    
   


  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-primary text-lg">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handelBooking}
            className="grid grid-cols-1 gap-3 mt-3 justify-items-center"
          >
            <input
              type="text"
              readOnly
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              disabled value={user?.displayName}
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              disabled value={user?.email}
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Type Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
