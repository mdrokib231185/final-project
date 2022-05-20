import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Home/Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DocotrRow from "./DocotrRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null)
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Avavtar</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <DocotrRow
              key={doctor._id}
              doctor={doctor}
              index={index}
              refetch={refetch}
              setDeletingDoctor={setDeletingDoctor}
            ></DocotrRow>
          ))}
        </tbody>
      </table>
      {deletingDoctor && (
        <DeleteConfirmModal
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
