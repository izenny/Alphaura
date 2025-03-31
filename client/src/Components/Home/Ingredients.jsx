import React from "react";
import Ingredient from "../../assets/Ingredient.png";
import { GoCheckCircleFill } from "react-icons/go";

const Ingredients = () => {
  return (
    <div className="w-full bg-background flex flex-col items-center py-8">
      <div className="w-full text-center mb-6">
        <h2 className="uppercase text-5xl font-bold flex flex-col">
          All natural <span className="">Ingredients</span>
        </h2>
        <p className="mt-2 flex flex-col">
          Potent blends of healing botanicals & all-natural{" "}
          <span className="">ingredients  to make your hair  look amazing.</span>
         
        </p>
      </div>

      {/* Scrollable Container */}
      <div className="w-full flex gap-4 px-4 overflow-x-auto  scrollbar-hide">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="min-w-[80%] md:min-w-[450px] flex items-center bg-white py-4 px-6 gap-4  shadow-md snap-start"
          >
            <div className="w-[150px] md:w-[200px]">
              <img
                src={Ingredient}
                alt="Ingredient"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Avocado Oil
              </h2>
              <div className="flex items-center gap-2">
                <GoCheckCircleFill
                  size={20}
                  className="fill-primary shrink-0"
                />
                <p className="text-sm">
                  A Chinese herb that has been used traditionally.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheckCircleFill
                  size={20}
                  className="fill-primary shrink-0"
                />
                <p className="text-sm">
                  May help in reducing{" "}
                  <span className="font-semibold">sleep latency</span>.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheckCircleFill
                  size={20}
                  className="fill-primary shrink-0"
                />
                <p className="text-sm">
                  It may help in reducing{" "}
                  <span className="font-semibold">sleep latency</span>.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
