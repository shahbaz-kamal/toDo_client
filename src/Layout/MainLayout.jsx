import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import useAuth from "../Hooks/useAuth";
import Loading from "../Component/Loading";

const MainLayout = () => {
  const {loading}=useAuth()
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <header className="w-full bg-light-secondary dark:bg-dark-secondary bg-opacity-50 fixed backdrop-blur-sm z-10">
        <Navbar></Navbar>
      </header>
      <section className="">
        <Outlet></Outlet>
      </section>
      {/* <footer className="mt-8">
        <Footer></Footer>
      </footer> */}
    </>
  );
};

export default MainLayout;
