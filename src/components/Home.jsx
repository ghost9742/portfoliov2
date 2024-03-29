import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#e5e5e5]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#06d6a0]">
          Nemanja Milosavljevic
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e5e5e5]">
          I'm a Front-End Web Developer.
        </h2>
        <p className="text-[#e5e5e5] py-4 max-w-[700px]">
          Interested in working together? Let's have a talk.
        </p>
        <div>
          <Link
            to={"/work"}
            className="text-white group border-2 px-6 py-3 my-2 w-44 flex items-center hover:bg-[#06d6a0] hover:text-[#000000] hover:border-[#000000]"
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
