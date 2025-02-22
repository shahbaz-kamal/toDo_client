import React from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const TaskUpdateModal = ({
  refetchAllTaskData,
  isOpen,
  setIsOpen,
  selectedData,
}) => {
  const { _id, title, description, createdBy, category, createdAt } =
    selectedData;

  const axiosSecure = UseAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    console.log(title, description);
    try {
      const res = await axiosSecure.patch(`task/update/${_id}`,{title,description});
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your task has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchAllTaskData();
        setIsOpen(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
      setIsOpen(false);
    }
  };
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg md:text-xl font-medium text-light-text dark:text-dark-text">
                Title
              </span>
            </label>
            <input
              defaultValue={title}
              name="title"
              type="text"
              placeholder="Title"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg md:text-xl font-medium text-light-text dark:text-dark-text">
                Description
              </span>
            </label>
            <input
              defaultValue={description}
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control  col-span-1 md:col-span-2">
            <button className=" rounded-md px-4 py-2 bg-light-primary text-light-text dark:bg-dark-primary hover:bg-opacity-80 dark:hover:bg-opacity-80 transition ease-in-out duration-300 text-lg md:text-xl flex items-center justify-center gap-2">
              Add Task
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => setIsOpen(false)} className="rounded-md px-4 py-2 bg-light-primary text-light-text dark:bg-dark-primary hover:bg-opacity-80 dark:hover:bg-opacity-80 transition ease-in-out duration-300 text-lg md:text-xl flex items-center justify-center gap-2">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default TaskUpdateModal;
