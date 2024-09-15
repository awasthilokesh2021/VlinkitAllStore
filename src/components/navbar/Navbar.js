import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-700 to-gray-500 py-4 shadow-lg">
      <div className="container w-[92%] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
          {/* Logo */}
          <div className="text-white mb-4 md:mb-0 md:mr-4">
            <NavLink to='/'>
              <h1 className="text-3xl font-bold">
                <span className="text-red-500">All</span>store
              </h1>
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <input
              placeholder="Search items"
              type="text"
              className="w-full py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
          </div>
        </div>

        {/* Delivery Information */}
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <h2 className="font-semibold text-lg">Delivery in 20min</h2>
          <p className="flex items-center justify-center md:justify-start cursor-pointer">
            Home-244, Sector-38
            <span className="ml-1">
              <FaAngleDown />
            </span>
          </p>
        </div>

        {/* Account and Store Sections */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          {/* Account Section */}
          <div className="text-white flex items-center space-x-2 cursor-pointer hover:text-red-500 transition duration-300">
            <span className="text-xl">Account</span>
            <FaAngleDown />
          </div>

          {/* Store Section */}
          <div className="text-white flex items-center space-x-2 cursor-pointer bg-red-700 p-3 rounded-md hover:text-red-500 transition duration-300">
            <span>Store</span>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
