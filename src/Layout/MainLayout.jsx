import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <section className="w-11/12 md:w-10/12 mx-auto mt-6">
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default MainLayout;
