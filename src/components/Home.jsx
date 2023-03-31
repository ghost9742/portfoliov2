import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#14213d]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#e5e5e5]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fca311]">
          Nemanja Milosavljevic
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e5e5e5]">
          I'm a HTML Email Developer
        </h2>
        <p className="text-[#e5e5e5] py-4 max-w-[700px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          expedita reiciendis quae. Laudantium officia mollitia est cumque?
          Sapiente, tempora aperiam?
        </p>
        <div>
          <Link
            to={"/work"}
            className="text-white group border-2 px-6 py-3 my-2 w-44 flex items-center hover:bg-[#fca311] hover:text-[#000000] hover:border-[#000000]"
          >
            View Work
            <span className="group-hover:px-2 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
