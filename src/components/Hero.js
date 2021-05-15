import React from "react";

const Hero = () => {
  const headingTexts = ["front-end", "website", "developer"];
  const headingElem = headingTexts.map((text) => {
    const chars = text.split("").map((ch) => <span>{ch}</span>);
    return <div className="span-group">{chars}</div>;
  });

  return (
    <section id="hero" className="section container">
      <div className="text-container">
        <p>I am a</p>
        <h1>{headingElem}</h1>
        <p>Based in Indonesia</p>
      </div>
      <div className="image-container"></div>
    </section>
  );
};

export default Hero;
