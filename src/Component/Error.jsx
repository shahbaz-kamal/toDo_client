// Error.jsx
import React from 'react';

const Error = () => {
    const errorMessage = "An unexpected error has occurred. Please try again later.";

    return (
        <div className="flex items-center justify-center h-screen bg-light-background dark:bg-dark-background">
            <div className="text-center">
                <div className='flex justify-center items-center'> <svg
                    className="h-16 w-16 text-red-600 dark:text-red-400 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                </svg></div>
               
                <h1 className="text-light-text dark:text-dark-text text-2xl font-semibold">
                    Oops! Something went wrong.
                </h1>
                <p className="text-light-text dark:text-dark-text mt-2">{errorMessage}</p>
                <button
                    className="mt-4 px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default Error;
