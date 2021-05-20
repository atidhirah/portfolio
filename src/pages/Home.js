import React from "react";

import Header from "../components/Header";
import Works from "../components/Works";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container section">Top</div>
      <div className="container section">About</div>
      <div className="container section">Works</div>
    </>
  );
};

export default Home;
