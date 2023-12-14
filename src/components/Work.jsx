import React from "react";
import project1 from "../assets/projects/weather-app.png";
import project2 from "../assets/projects/todo-app.png";

const Work = () => {
  const items = [
    {
      id: 1,
      src: `${project1}`,
      link1: "https://ghost9742.github.io/angular-weather-app/",
      link2: "https://github.com/ghost9742/angular-weather-app",
    },
    {
      id: 2,
      src: `${project2}`,
      link1: "https://ghost9742.github.io/angular-todo-app/",
      link2: "https://github.com/ghost9742/angular-todo-app",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link1: "link here",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link1: "link here",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link1: "link here",
    },
  ];
  return (
    //     <div className="w-full h-screen  text-[#e5e5e5] bg-[#118ab2]">
    //       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    //         <div className="pb-8">
    //           <p className="text-4xl font-bold inline border-b-4 text-[#e5e5e5] border-[#073b4c]">
    //             Work
    //           </p>
    //           <p className="py-6">// Check out some of my recent work</p>
    //         </div>

    //         {/* Container */}
    //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    //           {/* Grid Item */}

    //           <div
    //             style={{ backgroundImage: `url(${project1})` }}
    //             className="border-t-4 border-b-4 border-[#073b4c] group container flex justify-center items-center mx-auto content-div"
    //           >
    //             {/* Hover Effects */}
    //             <div className="opacity-0 group-hover:opacity-100">
    //               <span className="text-2xl font-bold text-white tracking-wider">
    //                 Wine&Dine
    //               </span>
    //               <div className="pt-8 text-center">
    //                 <a href="https://ghost9742.github.io/wine-dine/" target="_blank">
    //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover-class">
    //                     Demo
    //                   </button>
    //                 </a>
    //                 <a href="https://github.com/ghost9742/wine-dine" target="_blank">
    //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover-class">
    //                     Code
    //                   </button>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //        <div
    //         name=''
    //         className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left'
    //       >
    //         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    //           <div className='pb-8'>
    //             <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
    // Title            </p>
    //             <p className='py-6'>subtitle</p>
    //           </div>

    //           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
    //             {items.map(({ id, src, link }) => (
    //               <div
    //                 key={id}
    //                 className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
    //               >
    //                 <img
    //                   src={src}
    //                   alt=''
    //                   className='rounded-md duration-200 hover:scale-105'
    //                 />
    //                 <div className='flex items-center justify-center'>
    //                   <button
    //                     className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
    //                     onClick={() => window.open(link, '_blank')}
    //                   >
    //                     button
    //                   </button>
    //                   <button
    //                     className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
    //                     onClick={() => window.open(link, '_blank')}
    //                   >
    //                     button
    //                   </button>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div
      name=""
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full text-center md:text-left "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pb-2 sm:mt-20 sm:mb-20 mt-20 lg:pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-[#06d6a0] ">
            Work{" "}
          </p>
          {/* <p className="py-6">work</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5 sm:mb-20 mb-20">
          {items.map(({ id, src, link1, link2 }) => (
            <div
              key={id}
              className="shadow-md flex flex-col items-center justify-between shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img src={src} alt="" className="rounded-md duration-200" />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-[#06d6a0]"
                  onClick={() => window.open(link1, "_blank")}
                >
                  Live
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-solid border-2 border-[#06d6a0]"
                  onClick={() => window.open(link2, "_blank")}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
