// import React from "react";
// import { MdOutlineCheckCircleOutline } from "react-icons/md";
// import hand from "../../assets/hand.png";
// import icon4 from "../../assets/icon4.png"
// const SixReasons = () => {
//   return (
//     <div className="w-full  ">
//       <div className="w-full flex justify-center items-center overflow-clip gap-4 bg-white p-4">
//         <h3 className="flex justify-center items-center gap-1 text-primary font-semibold text-nowrap">
//           {" "}
//           <MdOutlineCheckCircleOutline size={25} />
//           Science Backed
//         </h3>
//         <h3 className="flex justify-center items-center gap-1 text-primary font-semibold text-nowrap">
//           <MdOutlineCheckCircleOutline size={25} />
//           All Natural Ingredients
//         </h3>
//         <h3 className="flex justify-center items-center gap-1 text-primary font-semibold text-nowrap">
//           <MdOutlineCheckCircleOutline size={25} />
//           Money Back Guarantee
//         </h3>
//       </div>
//       <div className="bg-background-dark  relative w-full overflow-hidden flex flex-col justify-center h-[500px] px-16 ">
//         <h1 className="flex flex-col p-5 text-white font-medium text-4xl md:text-6xl">
//           6 Reasons you need
//           <span className="text-primary font-bold"> Bloom Serum</span>
//         </h1>
//         <div className="w-full h-full absolute bottom-0 flex justify-center items-center -rotate-110 -rotate-x-180">
//             <img src={hand} alt="" className="w-[800px] h-full object-cover "/>
//         </div>
//         <div className="flex md:justify-between flex-col md:flex-row gap-5 ">
//             <div className="flex flex-col gap-5 ">
//                 <h2  className="text-primary p-2  px-16 text-2xl bg-background-dark2 text-center">  Reduce Frizziness & Moisturize Hair</h2>
//                 <h2 className="text-primary p-2 px-16 text-2xl bg-background-dark2 text-center">Protects Hair against Heat Damage</h2>
//                 <h2 className="text-primary p-2 px-16 text-2xl bg-background-dark2 text-center">Rich in Antioxidants and Vitamins</h2>
//             </div>
//             <div className="flex flex-col gap-5">
//                 <h2  className="text-primary p-2 px-16 text-2xl bg-background-dark2 text-center">Improved Hair Growth & Blood Flow</h2>
//                 <h2 className="text-primary p-2 px-16 text-2xl bg-background-dark2 text-center">Reduce Frizziness & Moisturize Hair</h2>
//                 <h2 className="text-primary p-2 px-16 text-2xl bg-background-dark2 text-center">Nourish your Scalp &  Follicles</h2>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SixReasons;

import React from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import hand from "../../assets/hand.png";
import hand2 from "../../assets/hand2.png";

import icon4 from "../../assets/icon4.png";
const SixReasons = () => {
  return (
    <div className="w-full  ">
      <div className="w-full flex justify-center items-center overflow-clip gap-4 bg-white p-4">
        <h3 className="flex justify-center items-center gap-1 text-primary font-semibold text-nowrap">
          {" "}
          <MdOutlineCheckCircleOutline size={25} />
          Science Backed
        </h3>
        <h3 className="flex justify-center items-center gap-1 text-primary font-semibold text-nowrap">
          <MdOutlineCheckCircleOutline size={25} />
          All Natural Ingredients
        </h3>
        <h3 className="flex justify-center items-center gap-1 text-primary font-semibold text-nowrap">
          <MdOutlineCheckCircleOutline size={25} />
          Money Back Guarantee
        </h3>
      </div>
      <div className="bg-background-dark relative w-full overflow-hidden flex flex-col justify-center items-center lg:h-[700px] lg:px-16">
        <div className="w-full mb-16">
          <h1 className="flex flex-col p-5 text-white font-medium text-4xl md:text-6xl ">
            6 Reasons you need
            <span className="text-primary font-bold"> Bloom Serum</span>
          </h1>
        </div>

        {/* Centering Image */}
        <div className="w-full h-full   lg:absolute inset-0 top-25  lg:flex justify-center lg:-rotate-x-180 lg:-rotate-90 rotate-x-180 rotate-180 items-center">
          <img src={hand2} alt="" className="lg:w-[500px] w-full h-auto object-cover" />
        </div>

        {/* Content Overlay */}
        <div className="lg:relative mb-10  z-10 flex lg:justify-between flex-col lg:flex-row gap-10 w-full px-10 lg:px-0">
          <div className="flex flex-col w-full lg:w-auto gap-10">
            <h2 className="text-primary p-2 lg:px-16  w-full md:text-2xl bg-background-dark2 ">
              Reduce Frizziness & Moisturize Hair
            </h2>
            <h2 className="text-primary p-2 lg:px-16 md:text-2xl bg-background-dark2 ">
              Protects Hair against Heat Damage
            </h2>
            <h2 className="text-primary p-2 lg:px-16 md:text-2xl bg-background-dark2 ">
              Rich in Antioxidants and Vitamins
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="text-primary p-2 lg:px-16 md:text-2xl bg-background-dark2 ">
              Improved Hair Growth & Blood Flow
            </h2>
            <h2 className="text-primary p-2 lg:px-16 md:text-2xl bg-background-dark2 ">
              Reduce Frizziness & Moisturize Hair
            </h2>
            <h2 className="text-primary p-2 lg:px-16 md:text-2xl bg-background-dark2 ">
              Nourish your Scalp & Follicles
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixReasons;
