import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#118ab2] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#073b4c] text-[#e5e5e5]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#e5e5e5]">
            <p>Hi. I'm Nemanja, nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p>
            I bring over two years of extensive experience on Upwork, where I have consistently delivered successful project outcomes. With a proven track record of completing multiple projects to client satisfaction, I am excited about the prospect of collaborating with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
