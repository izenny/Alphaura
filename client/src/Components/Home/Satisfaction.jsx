import React from "react";
import icon19 from "../../assets/icon19.png";
import { FaStar } from "react-icons/fa";
const Satisfaction = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2 p-4 md:p-10">
      <div className="md:w-[70%] w-full border-2 flex flex-col gap-3 justify-center items-center p-2 rounded-lg border-primary">
        <div className="bg-primary-light p-1 px-4 rounded-xl text-primary uppercase text-sm font-semibold">
          {" "}
          <h2>Our Guarantee</h2>
        </div>
        <h2 className="flex flex-col text-center text-4xl font-semibold">
          {" "}
          100% Satisfaction <span>Guarantee</span>
        </h2>
        <div className="flex justify-center  items-center w-full">
          <img src={icon19} alt="" className="w-20" />
        </div>
        <p className="text-center p-5 w-[70%] md:px-16 md:p-5">
          The market awareness level of women aged 45+ experiencing hair loss
          varies based on their familiarity with solutions and the problem
          itself. Here's a breakdown:
        </p>
        <p className="text-center p-5 w-[70%] md:px-16 md:p-5">
          If you are not 100% satisfied, or you do not see adequate results
          within those 30 days, simply request your money back and you will be
          refunded in full.
        </p>
        <div className="w-[70%]  flex items-center justify-center mt-4">
          <button className="text-white bg-primary w-full p-2  cursor-pointer hover:scale-105 transform transition-all duration-300">
            Shop Now
          </button>
        </div>
        <h4 className="flex items-center justify-center text-sm md:text-lg">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-primary" />
          ))}
          <span className="px-2">Rated 4.8/5 based on +3,425 reviews</span>
        </h4>
      </div>
    </div>
  );
};

export default Satisfaction;
