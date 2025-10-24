import React from "react";
import Banner from "../components/Banner/Banner";
import State from "../components/State/State";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Banner />
      </div>
      <State></State>
    </div>
  );
};

export default Home;
