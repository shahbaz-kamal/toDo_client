// Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-light-background dark:bg-dark-background">
      <div className="text-center">
        <div className="loader mb-4">
          <div className="flex justify-center items-center">
            {" "}
            <svg
              className="animate-spin h-10 w-10 text-light-primary dark:text-dark-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="text-light-text dark:text-dark-text text-2xl font-semibold">
          Loading your tasks...
        </h1>
        <p className="text-light-text dark:text-dark-text mt-2">
          Please wait while we fetch your data.
        </p>
      </div>
    </div>
  );
};

export default Loading;
