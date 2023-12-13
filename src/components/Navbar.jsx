import React from "react";
import { SiUpwork } from "react-icons/si";

import { AiOutlineHome } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import Logo from "../assets/logo-color.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white">
      <NavLink to={"/"}>
        <img src={Logo} alt="Logo" style={{ width: "70px" }} />
      </NavLink>

      {/* menu*/}
      <ul className="hidden md:flex">
        <li>
          {" "}
          <NavLink className="p-3" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="p-3" to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="p-3" to={"/work"}>
            Work
          </NavLink>
        </li>
      </ul>

      {/* Mobile menu*/}
      <nav className="md:hidden z-9999 fixed bottom-0 inset-x-0 mx-auto rounded-t-3xl w-[90%] flex justify-between text-center text-4xl px-11 py-2 bg-gray-700 text-[#ffffff]">
        <NavLink to={"/"} className="p-3">
          <AiOutlineHome size={30} />
        </NavLink>
        <NavLink to={"/about"} className="p-3 ">
          <BsPersonBadge size={30} />
        </NavLink>
        <NavLink to={"/work"} className="p-3 ">
          <BsBriefcase size={30} />
        </NavLink>
        <a
          href="https://www.upwork.com/freelancers/~017fcc2b2c6b184aee"
          className=" p-3 hover:cursor-pointer text-[#14A800]"
          target="_blank"
          rel="noreferrer"
        >
          <SiUpwork size={30} />
        </a>
      </nav>

      {/* Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14A800]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.upwork.com/freelancers/~017fcc2b2c6b184aee"
              target="_blank"
              rel="noreferrer"
            >
              Upwork <SiUpwork size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
