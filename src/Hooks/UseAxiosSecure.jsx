import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://to-do-server-fawn.vercel.app/",
});
const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
