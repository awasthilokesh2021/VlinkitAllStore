import React, { useState } from "react";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cartData);

  const [dropaccount, setdropaccount] = useState(false);

  const HandleBtn = () => {
    setdropaccount(!dropaccount);
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-700 to-gray-500 py-4 shadow-lg">
      <div className="container w-[92%] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Search Bar */}
        <div className="flex flex-col md:flex-row lg:flex-row md:items-center w-full md:w-auto">
          {/* Logo */}
          <div className="text-white mb-4 md:mb-0 md:mr-4">
            <NavLink to="/">
              <h1 className="text-2xl sm:text-3xl font-bold">
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
          <h2 className="font-semibold text-base sm:text-lg">
            Delivery in 20min
          </h2>
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
          <div
            onClick={HandleBtn}
            className="text-white flex items-center space-x-2 cursor-pointer hover:text-red-500 transition duration-300 relative z-10"
          >
            <span className="text-lg sm:text-xl">Account</span>
            <FaAngleDown className="text-sm sm:text-base" />
            <div className="flex items-center">
              {dropaccount && (
                <ul className="absolute  px-4 sm:px-6 mt-2 lg:mt-7 md:mt-7 top-full left-0 bg-white shadow-md rounded-md z-20">
                  <li className="py-2 px-4 sm:px-10 mb-1 text-black hover:bg-gray-100">
                    <h2 className="text-sm sm:text-base">My Account</h2>
                    <p className="text-xs sm:text-sm">84420972874</p>
                  </li>
                  <li className="py-2 px-4 sm:px-10 mb-1 text-black hover:bg-gray-100 text-sm sm:text-base">
                    My Orders
                  </li>
                  <li className="py-2 px-4 sm:px-10 mb-1 text-black hover:bg-gray-100 text-sm sm:text-base">
                    Account Privacy
                  </li>
                  <li className="py-2 px-4 sm:px-10 mb-1 text-black hover:bg-gray-100 text-sm sm:text-base">
                    Saved Address
                  </li>
                  <li className="py-2 px-4 sm:px-10 mb-1 text-black hover:bg-gray-100 text-sm sm:text-base">
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Store Section */}
          <div className="relative flex items-center space-x-2 cursor-pointer bg-red-700 p-3 rounded-md hover:bg-red-600 transition duration-300">
            <NavLink to="cart" className="flex items-center space-x-2">
              {/* Cart Text */}
              <span className="text-white text-sm sm:text-base font-semibold">
                Store
              </span>

              {/* Cart Badge */}
              <div className="relative">
                <FaShoppingCart className="text-white text-lg sm:text-xl" />
                {/* Cart Length Badge */}
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-white text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
