import React, { useState } from "react";
import { format } from "date-fns";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import TaskUpdateModal from "./TaskUpdateModal";

const TaskCard = ({ item, refetchAllTaskData }) => {
  const axiosSecure = UseAxiosSecure();
  const { _id, title, description, createdBy, category, createdAt } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // handle delete
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(_id);
        try {
          const res = await axiosSecure.delete(`task/${_id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetchAllTaskData();
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      }
    });
  };
  // updating category
  const handleCategoryUpdate = async (_id) => {
    console.log(_id);
    try {
      const res = await axiosSecure.patch(`task/${_id}`, { category });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task category updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchAllTaskData();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

  // editing
  const handleEdit = () => {
    setSelectedData(item);
    setIsOpen(true);
  };

  return (
    <>
      {" "}
      <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-4 rounded-xl shadow-md border border-light-primary dark:border-dark-primary w-full ">
        <p className="text-base md:text-lg text-light-text dark:text-dark-text font-medium opacity-80">
          {format(createdAt, "PPpp")}
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-light-text dark:text-dark-text opacity-80 mb-3">
          {description}
        </p>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit size={18} />
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash size={18} />
          </button>
          {(category === "toDo" || category === "inProgress") && (
            <button
              onClick={() => handleCategoryUpdate(_id)}
              className="text-green-500 hover:text-green-700"
            >
              <FaCheckCircle size={18} />
            </button>
          )}
        </div>
      </div>
      {/* modal */}
      {selectedData && (
        <TaskUpdateModal
          refetchAllTaskData={refetchAllTaskData}
          setIsOpen={setIsOpen}
          selectedData={selectedData}
          isOpen={isOpen}
        ></TaskUpdateModal>
      )}
    </>
  );
};

export default TaskCard;
