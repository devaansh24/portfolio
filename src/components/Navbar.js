import React from "react";
import bannerp from "../utils/icons-images/bannerp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-lg rounded-sm font-mono flex items-center justify-between">
      <div className="max-w-[48px] p-2">
        <img src={bannerp} alt="" />
      </div>
      <ul className="nav flex space-x-4 px-4 py-4 text-xl">
        <NavItem to="/about">ABOUT</NavItem>
        <NavItem to="/contacts">CONTACT</NavItem>
        <NavItem to="/projects">PROJECTS</NavItem>
              <NavItem to="https://drive.google.com/file/d/185DHjNCGzu59mmbCjLv4EZ9wqCG1fnep/view?usp=sharing" download>
          RESUME
        </NavItem>
      </ul>
    </div>
  );
};

const NavItem = ({ to, download, children }) => {
  return (
    <li className="p-2 hover:bg-slate-100 rounded-lg">
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
