import React from "react";
import Banner from "./Banner";
import AddTask from "./AddTask";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="">
      {(user && user.email) || (
        <section className="">
          <Banner></Banner>
        </section>
      )}

      {user && user?.email && (
        <section className="w-11/12 md:w-10/12 mx-auto mt-14">
          <AddTask></AddTask>
        </section>
      )}
    </div>
  );
};

export default Home;
