import React from "react";
import bannerp from "../utils/icons-images/bannerp.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-center lg:items-center xl:justify-center xl:items-center shadow-3xl xs:shadow-3xl bg-gradient-to-r from-slate-100 to-blue-100">
      <div className="flex max-w-[32px] display:block justify-start items-start">
        <img src={bannerp} alt="" />
      </div>
      <ul className="flex justify-center items-center font-mono text-xl p-2 m-2 px-10 font-extrabold">
        <NavItem to="/about">ABOUT</NavItem>
        <NavItem to="/contacts">CONTACT</NavItem>
        <NavItem to="/projects">PROJECTS</NavItem>
        <NavItem
          to="https://drive.google.com/file/d/1rd8Qazp6LGKG_h7pvuYFzl47ILSlNLdL/view?usp=sharing"
          download
        >
          RESUME
        </NavItem>
      </ul>
    </div>
  );
};

const NavItem = ({ to, download, children }) => {
  return (
    <li className="p-2 hover:bg-blue-100 rounded-lg">
      {download ? (
        <a href={to} download>
          {children}
        </a>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </li>
  );
};

export default Navbar;
