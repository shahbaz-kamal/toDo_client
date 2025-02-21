import React from "react";
import { format } from "date-fns";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

const TaskCard = () => {
  // Hardcoded task data
  const task = {
    title: "Buy groceries",
    description: "Need to get milk, eggs, and vegetables from the store.",
    createdBy: "shahbazkamal384@gmail.com",
    category: "To-Do",
    createdAt: new Date(1740115719742), // Converting timestamp to date
  };

  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-4 rounded-xl shadow-md border border-light-primary dark:border-dark-primary w-full ">
          <p className="text-base md:text-lg text-light-text dark:text-dark-text font-medium opacity-80">
        {format(task.createdAt, "PPpp")}
      </p>
      <h3 className="text-xl md:text-2xl font-bold mb-2">{task.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {task.description}
      </p>
      
    
      <div className="flex justify-end gap-3 mt-4">
        <button className="text-blue-500 hover:text-blue-700">
          <FaEdit size={18} />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FaTrash size={18} />
        </button>
        <button className="text-green-500 hover:text-green-700">
          <FaCheckCircle size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
