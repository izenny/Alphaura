// import React from "react";
// import { CiCircleCheck, CiHeart } from "react-icons/ci";
// import product from "../../assets/product1.png";
// import { FaStar } from "react-icons/fa";
// const ProductDetails = () => {
//   return (
//     <div className="w-full flex flex-col md:flex-row  p-5">
//       {/* Image Section */}
//       <div className="md:w-1/2 flex flex-col items-center">
//         <div className="md:w-3/4 md:h-96 h-3/4 border rounded-lg overflow-hidden">
//           <img
//             src={product}
//             alt="Product"
//             className="w-full h-full object-contain"
//           />
//         </div>
//         <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
//           {[...Array(3)].map((_, index) => (
//             <div
//               key={index}
//               className="w-20 h-20 border cursor-pointer rounded-lg overflow-hidden"
//             >
//               <img
//                 src={product}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Data Section */}
//       <div className="md:w-1/2">
//         <div className="w-full flex flex-col ">
//           <h4 className="flex items-center font-medium text-sm ">
//             {" "}
//             <FaStar className="text-primary " />
//             <FaStar className="text-primary " />
//             <FaStar className="text-primary " />
//             <FaStar className="text-primary " />
//             <FaStar className="text-primary " />
//             <span className="px-2 md:text-lg">
//               {" "}
//               Rated <span className="text-primary">4.8/5</span> based on +3,425
//               reviews
//             </span>
//           </h4>
//           <h2 className="flex flex-col  font-bold text-4xl ">
//             BLOOM HAIR GROWTH <span>REVIVAL SERUM</span>
//           </h2>
//           <div className="flex gap-2 items-center">
//             <p className="text-[#ffffffb7]  line-through text-sm">$150.99</p>{" "}
//             <p className="text-xl font-semibold">$99.99</p>{" "}
//             <p className="bg-primary text-white p-0.5 font-semibold px-2">
//               SAVE $50
//             </p>
//           </div>
//           <h3 className="font-bold flex  items-center text-xl gap-1">
//             <CiCircleCheck size={22} className="text-primary " /> Science Backed
//           </h3>

//           <h3 className="font-bold flex  items-center text-xl gap-1">
//             <CiCircleCheck size={22} className="text-primary " />
//             All Natural Ingredients
//           </h3>

//           <h3 className="font-bold flex  items-center text-xl gap-1">
//             <CiCircleCheck size={22} className="text-primary " /> Money Back
//             Guarantee
//           </h3>
//         </div>
//         <div className="w-[80%] border border-primary">
//           <div className="flex gap-2 justify-between ">
//             <div className="flex p-3 bg-primary text-white font-medium gap-3 w-1/2 justify-between">
//               <div className="flex gap-2">
//                 <input type="radio" className="" />
//                 <label htmlFor="" className="flex flex-col leading-tight">
//                   {" "}
//                   Subscribe & <span>Save 20%</span>
//                 </label>
//               </div>
//               <div>
//                 <p className=" text-[#ffffffb7] line-through text-sm text-right">
//                   $150.99
//                 </p>{" "}
//                 <p className="text-xl font-semibold">$99.99</p>{" "}
//               </div>
//             </div>
//             <div className="flex gap-2 items-center text-xl font-medium justify-center">
//               <input type="radio" className="" />
//               <label htmlFor="" className="flex flex-col leading-tight">
//                 One Time
//               </label>
//             </div>
//             <div className="pr-2 flex justify-center flex-col">
//               <p className=" text-[#534f4fd9] line-through text-sm font-medium text-right">
//                 $150.99
//               </p>{" "}
//               <p className="text-xl font-semibold">$120.99</p>{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { CiCircleCheck, CiHeart } from "react-icons/ci";
import product from "../../assets/product1.png";
import { FaStar } from "react-icons/fa";
import { IoIosLock, IoMdAdd, IoMdClose } from "react-icons/io";
const ProductDetails = () => {
  const [selectedOption, setSelectedOption] = useState("subscribe");
  const [selectedBuy, setSelectedBuy] = useState("30day");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Product Details",
      content:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Risk Free Guarantee",
      content:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Shipping & Deliveries",
      content:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Returns",
      content:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row md:p-5 p-4">
      {/* Image Section */}
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="md:w-3/4 md:h-96 h-3/4 border rounded-lg overflow-hidden">
          <img
            src={product}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 border cursor-pointer rounded-lg overflow-hidden"
            >
              <img
                src={product}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2 m-5">
          <div>
            <div className="w-20 h-20 border border-dotted border-primary bg-primary-light"></div>
            <p className="flex uppercase flex-col text-center text-sm font-semibold">
              FREE LASH <span>SERUM</span>{" "}
            </p>
          </div>

          <div>
            <div className="w-20 h-20 border border-dotted border-primary bg-primary-light"></div>
            <p className="flex uppercase flex-col text-center text-sm font-semibold">
              FREE  <span>SHIPPING</span>{" "}
            </p>
          </div>

          <div>
          <div className="w-20 h-20 flex justify-center items-center border border-dotted border-primary bg-primary-light">
            <IoIosLock size={30} className="text-gray-600"/>
            </div>
            <p className="flex flex-col text-center text-sm font-semibold">
              FREE $50 <span> GIFT CARD</span>{" "}
            </p>
          </div>

          <div>
            <div className="w-20 h-20 flex justify-center items-center border border-dotted border-primary bg-primary-light">
            <IoIosLock size={30} className="text-gray-600"/>
            </div>
            <p className="flex flex-col text-center text-sm font-semibold">
            FREE $100 <span> GIFT CARD</span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Data Section */}
      <div className="w-full md:w-1/2">
        <div className="w-full flex flex-col gap-2 ">
          <h4 className="flex items-center font-medium text-sm ">
            <FaStar className="text-primary " />
            <FaStar className="text-primary " />
            <FaStar className="text-primary " />
            <FaStar className="text-primary " />
            <FaStar className="text-primary " />
            <span className="px-2 md:text-lg">
              Rated <span className="text-primary">4.8/5</span> based on +3,425
              reviews
            </span>
          </h4>
          <h2 className="flex flex-col font-bold text-4xl ">
            BLOOM HAIR GROWTH <span>REVIVAL SERUM</span>
          </h2>
          <div className="flex gap-2 items-center">
            <p className="text-[#534f4fd9] line-through text-sm font-medium">
              $150.99
            </p>
            <p className="text-xl font-semibold">$99.99</p>
            <p className="bg-primary text-white p-0.5 font-semibold px-2">
              SAVE $50
            </p>
          </div>
          <h3 className="font-bold flex items-center text-xl gap-1">
            <CiCircleCheck size={22} className="text-primary " /> Science Backed
          </h3>

          <h3 className="font-bold flex items-center text-xl gap-1">
            <CiCircleCheck size={22} className="text-primary " />
            All Natural Ingredients
          </h3>

          <h3 className="font-bold flex items-center text-xl gap-1">
            <CiCircleCheck size={22} className="text-primary " /> Money Back
            Guarantee
          </h3>
        </div>

        <div className="md:w-[80%]  w-full border-2 border-primary mt-4  ">
          <div className="flex  ">
            <div
              className={`flex md:p-3 p-1  font-medium md:gap-3 justify-between w-1/2 cursor-pointer ${
                selectedOption === "subscribe"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
              onClick={() => setSelectedOption("subscribe")}
            >
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="purchase"
                  checked={selectedOption === "subscribe"}
                  onChange={() => setSelectedOption("subscribe")}
                  className="w-6 h-6 cursor-pointer"
                />
                <label className="flex flex-col  leading-tight">
                  Subscribe & <span>Save 20%</span>
                </label>
              </div>
              <div className="text-right">
                <p className="text-[#534f4fd9] line-through text-sm font-medium">
                  $150.99
                </p>
                <p className="text-xl font-semibold">$99.99</p>
              </div>
            </div>

            <div
              className={`flex p-3 font-medium gap-3 justify-between w-1/2 cursor-pointer ${
                selectedOption === "one-time"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
              onClick={() => setSelectedOption("one-time")}
            >
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="purchase"
                  checked={selectedOption === "one-time"}
                  onChange={() => setSelectedOption("one-time")}
                  className="w-6 h-6 cursor-pointer"
                />
                <label className="flex flex-col leading-tight">One Time</label>
              </div>
              <div className="text-right">
                <p className="text-[#534f4fd9] line-through text-sm font-medium">
                  $150.99
                </p>
                <p className="text-xl font-semibold">$120.99</p>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div
              className={`p-4 border flex justify-between ${
                selectedBuy === "30day" ? " bg-primary-light" : "bg-white"
              }`}
            >
              <div className={`flex gap-1 items-center`}>
                <input
                  type="radio"
                  name="buy"
                  checked={selectedBuy === "30day"}
                  onChange={() => setSelectedBuy("30day")}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="">30 Day Supply</label>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#534f4fd9] line-through text-sm font-medium">
                  $150.99
                </p>
                <p className="text-xl font-semibold">$120.99</p>
              </div>
            </div>

            <div
              className={`p-4 border flex justify-between ${
                selectedBuy === "1free" ? " bg-primary-light" : "bg-white"
              }`}
            >
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  name="buy"
                  checked={selectedBuy === "1free"}
                  onChange={() => setSelectedBuy("1free")}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="">30 Day Supply</label>
              </div>
              <div className="flex items-center gap-1">
                <p
                  className={`${
                    selectedBuy === "1free"
                      ? " bg-primary"
                      : "bg-primary-light text-primary"
                  } text-white p-0.5 text-sm font-semibold px-2`}
                >
                  SAVE $20
                </p>
                <p className="text-[#534f4fd9] line-through text-sm font-medium">
                  $94
                </p>
                <p className="text-xl font-semibold">$199</p>
              </div>
            </div>

            <div
              className={`p-4 border flex justify-between ${
                selectedBuy === "3free" ? " bg-primary-light" : "bg-white"
              }`}
            >
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  name="buy"
                  checked={selectedBuy === "3free"}
                  onChange={() => setSelectedBuy("3free")}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="">30 Day Supply</label>
              </div>
              <div className="flex items-center gap-1">
                <p
                  className={`${
                    selectedBuy === "3free"
                      ? " bg-primary"
                      : "bg-primary-light text-primary"
                  } text-white p-0.5 text-sm font-semibold px-2`}
                >
                  SAVE $25
                </p>
                <p className="text-[#534f4fd9] line-through text-sm font-medium">
                  $94
                </p>
                <p className="text-xl font-semibold">$379</p>
              </div>
            </div>

            <div
              className={`p-4 border flex justify-between ${
                selectedBuy === "6free" ? " bg-primary-light" : "bg-white"
              }`}
            >
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  name="buy"
                  checked={selectedBuy === "6free"}
                  onChange={() => setSelectedBuy("6free")}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="">30 Day Supply</label>
              </div>
              <div className="flex items-center gap-1">
                <p
                  className={`${
                    selectedBuy === "6free"
                      ? " bg-primary"
                      : "bg-primary-light text-primary"
                  } text-white p-0.5 text-sm font-semibold px-2`}
                >
                  SAVE $30
                </p>
                <p className="text-[#534f4fd9] line-through text-sm font-medium">
                  $94
                </p>
                <p className="text-xl font-semibold">$599</p>
              </div>
            </div>

            <div className="flex justify-around">
              <h3 className="font-bold flex items-center text-sm gap-1">
                <CiCircleCheck size={22} className="text-primary " />
                VIP SALES
              </h3>

              <h3 className="font-bold flex items-center text-sm gap-1">
                <CiCircleCheck size={22} className="text-primary " />
                Auto Replenish
              </h3>

              <h3 className="font-bold flex items-center text-sm gap-1">
                <CiCircleCheck size={22} className="text-primary " />
                Easy Cancellation
              </h3>
            </div>
          </div>
        </div>
        <div className="my-4 w-full flex justify-center md:w-[80%]">
          <button className="text-white uppercase font-bold text-lg bg-primary w-full p-4  cursor-pointer hover:scale-105 transform transition-all duration-300">
            Add To Cart
          </button>
        </div>
        <div className="w-full   mt-4">
          {items.map((item, index) => (
            <div key={index} className="border-b w-full  border-gray-300">
              <button className="w-full flex items-center justify-between text-left p-3 text-lg font-semibold hover:bg-primary-light">
                {item.title}
                {openIndex === index ? (
                  <IoMdClose size={25} onClick={() => toggleAccordion(index)} />
                ) : (
                  <IoMdAdd size={25} onClick={() => toggleAccordion(index)} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-3 pb-5 bg-white  border-gray-300">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
