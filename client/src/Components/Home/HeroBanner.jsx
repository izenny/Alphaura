import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import product from "../../assets/product1.png";
const HeroBanner = () => {
  return (
    <div className="w-full md:h-4/5 flex flex-col md:flex-row items-center justify-center px-10  bg-linear-to-b from-white to-primary-light">
      <div className="px-4">
        <h4 className="flex items-center justify-center text-sm ">
          {" "}
          <FaStar className="text-primary " />
          <FaStar className="text-primary " />
          <FaStar className="text-primary " />
          <FaStar className="text-primary " />
          <FaStar className="text-primary " />
          <span className="px-2 md:text-lg"> Rated 4.8/5 based on +3,425 reviews</span>
        </h4>
        <h1 className="text-4xl md:text-5xl flex flex-col font-bold text-center mt-2 ">
          GROW YOUR HAIR   <span>ONCE & FOR ALL</span> 
        </h1>
        <p className="text-center text-slate-800 flex flex-col text-xl md:text-xl p-2">
          All Natural Science Backed Hair Blend to make you <span ></span>feel and look your
          best.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex flex-col items-center justify-center w-[109px] h-[84px] md:w-[153.04px] md:h-[117.94px] bg-primary-light">
            <TiTick size={22} className="text-primary " />
            <h3 className="text-center flex flex-col text-[14px] font-medium">
              LOOK &{" "}
              <span className="text-center text-[14px] font-medium">
                FEEL YOUNG
              </span>
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center  w-[109px] h-[84px]  md:w-[153.04px] md:h-[117.94px] bg-primary-light">
            <TiTick size={22} className="text-primary " />
            <h3 className="text-center flex flex-col text-[14px] font-medium">
              Thick{" "}
              <span className="text-center text-[14px] font-medium">
                & lush hair
              </span>
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center  w-[109px] h-[84px] md:w-[153.04px] md:h-[117.94px] bg-primary-light">
            <TiTick size={22} className="text-primary" />
            <h3 className="text-center text-[14px] flex flex-col font-medium">
              REGROW{" "}
              <span className="text-center text-[14px] font-medium"></span> YOUR
              HAIR
            </h3>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <button className="text-white bg-primary w-full p-2 cursor-pointer hover:scale-105 transform transition-all duration-300">
            SHOP BLOOM NOW RISK FREE
          </button>
        </div>
      </div>
      <div className="  md:h-full  flex items-center justify-center ">
        <img src={product} alt=""  className="w-full h-full object-contain "/>
      </div>
    </div>
  );
};

export default HeroBanner;
