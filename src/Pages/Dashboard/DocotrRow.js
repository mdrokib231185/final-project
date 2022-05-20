import id from "date-fns/esm/locale/id/index.js";
import React from "react";
import { toast } from "react-toastify";

const DocotrRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, email, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={doctor.img} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="DeleteConfirmModal"
          class=" btn btn-xs btn-error bg-red-500"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DocotrRow;
