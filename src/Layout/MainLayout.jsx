import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="w-full bg-light-secondary dark:bg-dark-secondary bg-opacity-50 fixed backdrop-blur-sm">
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
