import "./index.css";
import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#5d5d5d] h-15 w-full px-2 text-fuchsia-50 md:px-10 lg:px-20">
        <div
          id="logo"
          className="w-[50%] h-full flex items-center justify-center"
        >
          <h1 className="text-4xl ">pstar</h1>
        </div>
        <div
          id="nav-list"
          className=" w-[50%] h-full flex items-center justify-center gap-4"
        >
          <a href="#section2">About</a>
          <a href="#section3">Skills</a>
          <a href="#section4">Works</a>
          <a href="#section5">Contacts</a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
