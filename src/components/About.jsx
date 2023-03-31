import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#14213d] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#fca311] text-[#e5e5e5]">
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              perspiciatis quidem dicta exercitationem nobis rerum, blanditiis
              reprehenderit natus. Beatae fugit provident placeat nisi vero
              sequi repudiandae sed amet maxime ipsa?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore quaerat accusamus illum
              assumenda. Sunt rerum, dolor cum eum omnis placeat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
