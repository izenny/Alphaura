import React from "react";
// import product2 from "../../assets/product2.png";
// import product3 from "../../assets/product-dropper.png";
import product3 from "../../assets/product3.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const Banner2 = () => {
  return (
    <div className="w-full lg:h-3/4 py-10   lg:px-10 items-center flex flex-col md:flex-row   justify-center ">
      <div className="w-full lg:w-1/2">
        <h2 className="flex flex-col items-center justify-center text-4xl md:text-5xl font-bold text-center mt- ">
          LOOK & FEEL <span> BEAUTIFUL AGAIN</span>
        </h2>
        <div className="w-full ">
          {/* <img src={product2} alt="" className="w-full object-cover"/> */}
          <img src={product3} alt="" className="w-full  object-contain" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col  ">
        <div className="flex items-center justify-center gap-4 w-full lg:w-3/4 p-4">
          <img src={icon1} alt="" className="w-16" />
          <div>
            <h3 className="text-3xl font-medium">LOCKED-IN MOISTURE</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-full lg:w-3/4 p-4">
          <img src={icon2} alt="" className="w-16" />
          <div>
            <h3 className="text-3xl font-medium">POTENT ANTIOXIDANTS</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-full lg:w-3/4 p-4">
          <img src={icon3} alt="" className="w-16" />
          <div>
            <h3 className="text-3xl font-medium">REGROW LUCIOUS HAIR</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
