import React, { useState } from "react";
import {
  IoCartOutline,
  IoCloseOutline,
  IoReorderThreeOutline,
} from "react-icons/io5";
import logo from "../../assets/Alphaura-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex flex-col relative bg-white ">
      <div className="bg-black text-center w-full">
        <h2 className="text-white p-1 text-sm ">
          FREE SHIPPING ON WHEN YOU ORDER 2+
        </h2>
      </div>
      <div className="flex w-full justify-between items-center p-4">
        <div className="hidden md:flex md:gap-4">
          <ul className="flex gap-4 text-sm font-semibold">
            <li className="font-bold cursor-pointer hover:scale-110 transform transition-all duration-300">
              Shop
            </li>
            <li className="cursor-pointer hover:scale-110 transform transition-all duration-300">
              FAQ
            </li>
            <li className="cursor-pointer hover:scale-110 transform transition-all duration-300">
              Contact
            </li>
          </ul>
        </div>
        <div className="md:hidden block   ">
          {!isOpen ? (
            <IoReorderThreeOutline size={22} onClick={handleToggle} />
          ) : (
            <IoCloseOutline size={22} onClick={handleToggle} />
          )}
          {isOpen && (
            <div className="absolute top-20 left-0  bg-white shadow-lg rounded-md w-full p-5  z-10">
              <ul className="flex flex-col items-center w-full gap-4 text-sm font-semibold ">
                <li className="font-bold cursor-pointer hover:scale-110 transform transition-all duration-300">
                  Shop
                </li>
                <li className="cursor-pointer hover:scale-110 transform transition-all duration-300">
                  FAQ
                </li>
                <li className="cursor-pointer hover:scale-110 transform transition-all duration-300">
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <img src={logo} alt="" className="h-10" />
        </div>
        <div className="">
          <IoCartOutline
            size={22}
            className="cursor-pointer hover:scale-110 transform transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
