import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import project1 from "../assets/projects/project1.png";

const Work = () => {
  return (
    <div className="w-full h-screen  text-[#e5e5e5] bg-[#118ab2]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#e5e5e5] border-[#073b4c]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          

          <div
            style={{ backgroundImage: `url(${project1})` }}
            className="border-t-4 border-b-4 border-[#073b4c] group container flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Wine&Dine
              </span>
              <div className="pt-8 text-center">
                <a href="https://ghost9742.github.io/wine-dine/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover-class">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ghost9742/wine-dine" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover-class">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
