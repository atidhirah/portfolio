import React from "react";

import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div id="top" className="container section">
        Top
      </div>
      <div id="about" className="container section">
        About
      </div>
      <div id="works" className="container section">
        Works
      </div>
    </>
  );
};

export default Home;
