import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Questions = () => {
  return (
    <div className="w-full justify-center flex-col gap-5 items-center flex bg-[#151020] py-5 ">
      <h2 className="flex text-white flex-col text-center font-bold text-4xl md:text-5xl">
        Frequently <span>Asked Questions</span>
      </h2>

      <div className="bg-white p-3 px-4  rounded-lg flex justify-center items-center gap-10">
        <h2>Lorem ipsum dolor sit amet?</h2> <FaChevronDown />
      </div>

      <div className="bg-white p-3 px-4  rounded-lg flex justify-center items-center gap-10">
        <h2>Lorem ipsum dolor sit amet?</h2> <FaChevronDown />
      </div>

      <div className="bg-white p-3 px-4  rounded-lg flex justify-center items-center gap-10">
        <h2>Lorem ipsum dolor sit amet?</h2> <FaChevronDown />
      </div>

      <div className="bg-white p-3 px-4  rounded-lg flex justify-center items-center gap-10">
        <h2>Lorem ipsum dolor sit amet?</h2> <FaChevronDown />
      </div>
    </div>
  );
};

export default Questions;
