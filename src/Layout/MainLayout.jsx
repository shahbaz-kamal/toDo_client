import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default MainLayout;
