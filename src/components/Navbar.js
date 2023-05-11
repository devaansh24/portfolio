import React from "react";
import bannerp from "../utils/icons-images/bannerp.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar shadow-md rounded-sm font-mono flex items-center justify-between">
      <div className="max-w-[48px] p-2">
        <img src={bannerp} alt="" />
      </div>
      <ul className="nav">
        <div className="nav-items flex justify-end cursor-pointer space-x-4 px-4 py-4 text-xl">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contacts">CONTACT</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
