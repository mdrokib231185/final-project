import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  deletingDoctor,
  refetch,
  setDeletingDoctor,
}) => {
  const { name, email } = deletingDoctor;
  const handelDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
              toast.success(`doctor ${name} is Deleted`);
              setDeletingDoctor(null)
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="DeleteConfirmModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-red-500 text-lg">
            Are You Sure You Want To Delete ${name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handelDelete()}
              class=" btn btn-xs btn-error bg-red-500"
            >
              Delete
            </button>
            <label
              for="DeleteConfirmModal"
              class=" btn btn-xs btn-error bg-red-500"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
