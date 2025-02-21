import React, { useEffect, useState } from "react";
import useSingleUser from "../../Hooks/useSingleUser";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import TaskCard from "./taskCard";

const AddTask = () => {
  const [toDoTaskData, setToDoTaskData] = useState([]);
  const [inProgressTaskData, setInProgressTaskData] = useState([]);
  const [doneTaskData, setdoneTaskData] = useState([]);
  const { user } = useAuth();
  const { userData } = useSingleUser();
  console.log(userData);
  const axiosSecure = UseAxiosSecure();

  //   getting task data by this user
  const { data: allTaskData = [], refetch: refetchAllTaskData } = useQuery({
    queryKey: ["all-tasks-data", userData?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const email = userData?.email;
      const res = await axiosSecure.get(`task/${email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  const handleAddTask = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const createdBy = userData?.email;
    const category = "toDo";
    const newTask = { title, description, createdBy, category };
    console.log(newTask);
    try {
      const res = await axiosSecure.post("task", newTask);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchAllTaskData();
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    if (allTaskData.length > 0) {
      setToDoTaskData(allTaskData.filter((data) => data.category === "toDo"));
      setInProgressTaskData(
        allTaskData.filter((data) => data.category === "inProgress")
      );
      setdoneTaskData(allTaskData.filter((data) => data.category === "done"));
    }
  }, [allTaskData]);
  console.log(toDoTaskData);

  return (
    <div>
      <h3 className="text-center font-bold text-4xl md:text-5xl mb-6 text-light-text dark:text-dark-text">
        Add Task
      </h3>
      <section className="">
        <form
          onSubmit={handleAddTask}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg md:text-xl font-medium text-light-text dark:text-dark-text">
                Title
              </span>
            </label>
            <input
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
                Password
              </span>
            </label>
            <input
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
      </section>

      {/* display task section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* todo */}
        <div className=" p-3 rounded-xl shadow-xl dark:bg-dark-accent dark:bg-opacity-20">
          <h1 className="font-extrabold text-2xl md:text-3xl text-light-text dark:text-dark-text mb-3 text-center">
            To Do
          </h1>
          <div className="flex flex-col gap-6">
            {toDoTaskData.map((item, index) => (
              <TaskCard
                key={item._id}
                item={item}
                index={index}
                refetchAllTaskData={refetchAllTaskData}
              ></TaskCard>
            ))}
          </div>
        </div>

        {/* inprogress */}
        <div className="  p-3 rounded-xl shadow-xl dark:bg-dark-accent dark:bg-opacity-20">
          <h1 className="font-extrabold text-2xl md:text-3xl text-light-text dark:text-dark-text mb-3 text-center">
            In Progress
          </h1>
          <div className="flex flex-col gap-6">
            {inProgressTaskData.map((item, index) => (
              <TaskCard
                key={item._id}
                item={item}
                index={index}
                refetchAllTaskData={refetchAllTaskData}
              ></TaskCard>
            ))}
          </div>
        </div>
        {/* done */}
        <div className=" p-3 rounded-xl shadow-xl dark:bg-dark-accent dark:bg-opacity-20">
          <h1 className="font-extrabold text-2xl md:text-3xl text-light-text dark:text-dark-text mb-3 text-center">
            Done
          </h1>
          <div className="flex flex-col gap-6">
            {doneTaskData.map((item, index) => (
              <TaskCard
                key={item._id}
                item={item}
                index={index}
                refetchAllTaskData={refetchAllTaskData}
              ></TaskCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTask;
