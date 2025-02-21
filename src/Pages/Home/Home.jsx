import React from "react";
import Banner from "./Banner";
import AddTask from "./AddTask";

const Home = () => {
  return (
    <div className="">
      <section className="">
        <Banner></Banner>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto mt-10">
        <AddTask></AddTask>
      </section>
    </div>
  );
};

export default Home;
