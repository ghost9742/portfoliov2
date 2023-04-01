import React from "react";
import { SiUpwork } from "react-icons/si";

import { AiFillHome } from "react-icons/ai";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";

import Logo from "../assets/logo-color.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#14213d] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* menu*/}
      <ul className="hidden md:flex">
        <li>
          {" "}
          <Link className="p-3" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="p-3" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="p-3" to={"/work"}>
            Work
          </Link>
        </li>
      </ul>

      {/* Mobile menu*/}
      <nav className="md:hidden z-10 fixed bottom-0 left-0 w-[100%] flex justify-between text-center text-4xl mx-0 px-20 bg-[#fca311] text-[#14213d]">
        <Link to={"/"} className="p-3">
          <AiFillHome />
        </Link>
        <Link to={"/about"} className="p-3">
          <BsFillPersonBadgeFill />
        </Link>
        <Link to={"/work"} className="p-3">
          <BsFillBriefcaseFill />
        </Link>
        <a
          href="https://www.upwork.com/freelancers/~017fcc2b2c6b184aee"
          className="p-3 hover:cursor-pointer text-[#14A800]"
          target="_blank"
          rel="noreferrer"
        >
          <SiUpwork />
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
