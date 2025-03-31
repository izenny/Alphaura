// import React from "react";
// import { FaStar } from "react-icons/fa";
// import story1 from "../../assets/story1.png";
// import story2 from "../../assets/story2.png";
// import story3 from "../../assets/story3.png";

// import { FaCirclePlay } from "react-icons/fa6";
// const Stories = () => {
//   return (
//     <div className="w-full py-4">
//       <div>
//         <h4 className="flex items-center justify-center text-sm ">
//           {" "}
//           <FaStar className="text-primary " />
//           <FaStar className="text-primary " />
//           <FaStar className="text-primary " />
//           <FaStar className="text-primary " />
//           <FaStar className="text-primary " />
//           <span className="px-2 md:text-lg">
//             {" "}
//             Rated 4.8/5 based on +3,425 reviews
//           </span>
//         </h4>
//         <h1 className="flex flex-col text-4xl font-bold text-center my-5">
//           HEAR IT FROM <span>OTHERS</span>
//         </h1>
//       </div>
//       <div className="w-full flex justify-center gap-2 overflow-x-auto px-4">
//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story1}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story2}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story3}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story1}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story2}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story3}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         <div className="relative w-[200px] h-[350px] flex items-center justify-center">
//           <img
//             src={story1}
//             alt="Story"
//             className="w-full h-full object-cover "
//           />
//           <FaCirclePlay
//             size={40}
//             className="fill-primary absolute inset-0 m-auto bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>
//       </div>
//       <div className="w-full flex justify-center flex-col items-center">
//         <div className="w-[90%] md:w-1/4 flex items-center justify-center mt-4">
//           <button className="text-white bg-primary w-full p-2 cursor-pointer hover:scale-105 transform transition-all duration-300">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stories;


import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";

const Stories = () => {
  const stories = [story1, story2, story3, story1, story2, story3, story1];

  return (
    <div className="w-full py-4 flex flex-col items-center">
    
      <div className="text-center">
        <h4 className="flex items-center justify-center text-sm md:text-lg">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-primary" />
          ))}
          <span className="px-2">Rated 4.8/5 based on +3,425 reviews</span>
        </h4>
        <h1 className="text-5xl font-bold my-5 flex flex-col">
          HEAR IT FROM <span className="">OTHERS</span>
        </h1>
      </div>

      
      <div className="w-full flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative min-w-[80%] md:min-w-[200px] h-[350px] flex items-center justify-center snap-start"
          >
            <img src={story} alt="Story" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaCirclePlay
                size={40}
                className="fill-primary bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-[90%] md:w-1/4 flex items-center justify-center mt-4">
        <button className="text-white bg-primary w-full p-2  cursor-pointer hover:scale-105 transform transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Stories;
