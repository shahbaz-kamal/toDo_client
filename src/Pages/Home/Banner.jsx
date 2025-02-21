import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const Banner = () => {
  const { googleSignInUser, user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const handleGoogleSignIn = async () => {
    googleSignInUser()
      .then(async (result) => {
        console.log(result.user);
        const email = result?.user?.email;
        const newUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
        };
        const res = await axiosSecure.post(`users/${email}`, newUser);
        if (
          res?.data?.insertedId ||
          res?.data?.message == "User already Exists in the Database"
        ) {
          Swal.fire({
            icon: "success",
            text: "Google Login Successfull",
          });
        } else {
          Swal.fire({
            icon: "success",
            text: "Google Login Successfull",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/Mx87KXrf/pexels-ivan-samkov-4238524.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-light-accent dark:text-dark-accent">
              Streamline Your Workflow,
            </span>{" "}
            <span className="text-dark-text ">Effortlessly</span>
          </h1>
          <p className="mb-5 text-dark-text text-lg md:text-xl">
            TaskFlow is your ultimate task management solution, designed to keep
            you organized and focused. Effortlessly create, update, and reorder
            tasks across To-Do, In Progress, and Done categories. With real-time
            synchronization, your tasks stay updated instantly—no refresh
            needed. Whether on desktop or mobile, experience a sleek, responsive
            UI that makes productivity seamless.
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="rounded-md px-4 py-2 bg-light-primary text-light-text dark:bg-dark-primary hover:bg-opacity-80 dark:hover:bg-opacity-80 transition ease-in-out duration-300 text-lg md:text-xl flex items-center justify-center gap-2"
          >
            <FaGoogle /> Log In to Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
