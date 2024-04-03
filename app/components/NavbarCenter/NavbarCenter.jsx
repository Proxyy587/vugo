import React from "react";
import "./NavbarCenter.css";

const NavbarCenter = () => {
  return (
    <>
      <div className="navbar-items-center flex flex-col gap-10 justify-center items-center text-white">
        <a href="#" className="text-2xl">
          Home
        </a>
        <a href="#" className="text-2xl">
          Contact
        </a>
        <a href="#" className="text-2xl">
          Features
        </a>
        <a href="#" className="text-2xl">
          About
        </a>
      </div>
    </>
  );
};

export default NavbarCenter;
