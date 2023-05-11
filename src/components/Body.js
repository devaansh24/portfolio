import React from "react";
import Navbar from "./Navbar";

import About from "./About";

const Body = () => {
  return (
    <div className="m-2 p-2 font-mono">
      <Navbar />
      <About />
    </div>
  );
};

export default Body;
