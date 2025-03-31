import React from "react";
import icon10 from "../../assets/icon10.png";
import icon11 from "../../assets/icon11.png";
import icon12 from "../../assets/icon12.png";
import icon13 from "../../assets/icon13.png";
import icon14 from "../../assets/icon12.png";
import icon15 from "../../assets/icon14.png";
import icon16 from "../../assets/icon15.png";
import icon17 from "../../assets/icon16.png";
import icon18 from "../../assets/icon17.png";
import icon19 from "../../assets/icon18.png";

import model from "../../assets/model1.jpeg";
import { CiCircleCheck } from "react-icons/ci";
const Quality = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-primary w-full flex flex-col justify-center items-center py-5">
        <h2 className="text-white font-semibold text-2xl uppercase">
          the highest quality
        </h2>
        <div className="w-full flex flex-wrap justify-center items-center gap-10 py-5">
          <div className="flex flex-col justify-center items-center">
            <div className=" w-16 border-4 border-white p-2 rounded-full">
              <img src={icon10} alt="" className="invert" />
            </div>
            <p className="text-white uppercase flex flex-col text-center leading-tight font-medium">
              Made in <span>THE USA</span>{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" w-16  border-white  rounded-full">
              <img src={icon11} alt="" className="invert" />
            </div>
            <p className="text-white uppercase flex flex-col text-center leading-tight font-medium">
              No <span> Additives</span>{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" w-16 border-4 border-white p-2 rounded-full">
              <img src={icon12} alt="" className="invert" />
            </div>
            <p className="text-white uppercase flex flex-col text-center leading-tight font-medium">
              All<span> Natural</span>{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" w-16 border-4 border-white p-2 rounded-full">
              <img src={icon13} alt="" className="invert" />
            </div>
            <p className="text-white uppercase flex flex-col text-center leading-tight font-medium">
              Fully science<span> Based</span>{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" w-16 border-4 border-white p-2 rounded-full">
              <img src={icon14} alt="" className="invert" />
            </div>
            <p className="text-white uppercase flex flex-col text-center leading-tight font-medium">
              All <span> Natural</span>{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" w-16 border-4 border-white p-2 rounded-full">
              <img src={icon15} alt="" className="invert" />
            </div>
            <p className="text-white uppercase flex flex-col text-center leading-tight font-medium">
              3rd PARTY <span>TESTED</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex p-3  lg:p-8 justify-center items-center">
        <div className="w-full items-center lg:w-3/5 flex flex-col lg:flex-row">
          <div className="lg:w-[400px] lg:h-[400px] w-[350px] ">
            <img src={model} alt="" className=" w-full h-full object-cover" />
          </div>
          <div className=" flex-1 flex flex-col justify-cent gap-2  m-5">
            <h2 className="flex flex-col text-3xl  font-bold">
              WHY BLOOM IS THE <span> BEST SERUM</span>
            </h2>
            <p className="flex flex-col">
              Potent blends of healing botanicals & all natural{" "}
              <span>ingredients to make your hair look amazing:</span>
            </p>
            <h3 className="font-bold flex  items-center text-xl gap-1">
              <CiCircleCheck size={22} className="text-primary " /> Science
              Backed
            </h3>

            <h3 className="font-bold flex  items-center text-xl gap-1">
              <CiCircleCheck size={22} className="text-primary " />
              All Natural Ingredients
            </h3>

            <h3 className="font-bold flex  items-center text-xl gap-1">
              <CiCircleCheck size={22} className="text-primary " /> Money Back
              Guarantee
            </h3>

            <h3 className="font-bold flex  items-center text-xl gap-1">
              <CiCircleCheck size={22} className="text-primary " /> Money Back
              Guarantee
            </h3>
            <div className="w-[90%]  flex items-center justify-center mt-4">
              <button className="text-white bg-primary w-full p-2  cursor-pointer hover:scale-105 transform transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary w-full gap-4  py-10 flex flex-col justify-center items-center">
        <h2 className="font-bold text-5xl text-white flex flex-col text-center uppercase">
          {" "}
          Unlimited <span>Benefits</span>
        </h2>

        <div className="md:flex hidden gap-4">
          <div className="bg-white flex gap-2 p-2 px-6 rounded-2xl justify-center items-center">
            <div className="w-16">
              <img src={icon16} alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase">Lorem Ipsum</h4>
              <p className="flex flex-col text-lg">
                Lorem Ipsum Dolor Es. Lorem Ipsum{" "}
                <span>Dolor Es. Lorem Ipsum Dolor Es.</span>
              </p>
            </div>
          </div>

          <div className="bg-white flex gap-2 p-2 px-6 rounded-2xl justify-center items-center">
            <div className="w-16">
              <img src={icon17} alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase">Lorem Ipsum</h4>
              <p className="flex flex-col text-lg">
                Lorem Ipsum Dolor Es. Lorem Ipsum{" "}
                <span>Dolor Es. Lorem Ipsum Dolor Es.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="bg-white flex gap-2 p-2 px-6 rounded-2xl justify-center items-center">
            <div className="w-16">
              <img src={icon18} alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase">Lorem Ipsum</h4>
              <p className="flex flex-col text-lg">
                Lorem Ipsum Dolor Es. Lorem Ipsum{" "}
                <span>Dolor Es. Lorem Ipsum Dolor Es.</span>
              </p>
            </div>
          </div>

          <div className="bg-white flex gap-2 p-2 px-6 rounded-2xl justify-center items-center">
            <div className="w-16">
              <img src={icon19} alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase">Lorem Ipsum</h4>
              <p className="flex flex-col text-lg">
                Lorem Ipsum Dolor Es. Lorem Ipsum{" "}
                <span>Dolor Es. Lorem Ipsum Dolor Es.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
