


import React from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

const Compare = () => {
  const features = [
    "Guilt-Free Enjoyment",
    "Nothing Artificial",
    "60% Less Sugar & Calories",
    "Handcrafted In USA",
    "Vegan & Organic",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-6 px-4">
      <div className="md:w-[70%] w-full border-2 flex flex-col gap-5 justify-center items-center p-4 rounded-lg border-primary">
        {/* Title */}
        <h2 className="text-4xl uppercase text-center flex flex-col font-bold">
          Alphaura vs <span className="text-primary">Others</span>
        </h2>

        {/* Comparison Table */}
        <div className="grid grid-cols-3 w-full text-center items-center">
          {/* Header Row */}
          <div></div>
          <div></div>
          <div className="font-semibold text-lg py-3">Others</div>

          {/* Comparison Data */}
          {features.map((feature, index) => {
            const isFirst = index === 0;
            const isLast = index === features.length - 1;

            return (
              <React.Fragment key={index}>
                <div className={`py-3 mx-2 border-slate-500 ${!isLast ? "border-b" : ""}`}>
                  {feature}
                </div>
                <div
                  className={`py-3 flex justify-center bg-primary text-white border-slate-700 
                    ${!isLast ? "border-b" : ""} 
                    ${isFirst ? "rounded-t-lg" : ""} 
                    ${isLast ? "rounded-b-lg" : ""}`}
                >
                  <MdOutlineCheckCircleOutline size={25} />
                </div>
                <div className={`py-3 flex justify-center mx-2 border-slate-500 ${!isLast ? "border-b" : ""}`}>
                  <CiCircleRemove size={25} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Compare;
