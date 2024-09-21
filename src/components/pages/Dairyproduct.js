import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import items from "./Data";
import dairyItems from "./Dairyproductdata";
import { addtocart } from "../features/Cartslice";

const Dairyproduct = () => {
  const cardAdd = useSelector((state) => state.cartData);
  console.log(cardAdd);
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full py-4">
      <div className="container mx-auto w-[90%] flex ">
        {/* Left Side Menu */}
        <div className=" w-[20%]">
          <div className="flex flex-col list-none border-l-2">
            <li className="p-4  border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Milk"
                className="w-8 h-8 mr-4"
              />
              Milk
            </li>
            <li className="p-4  border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Oats"
                className="w-8 h-8 mr-4"
              />
              Oats
            </li>
            <li className="p-4 border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Eggs"
                className="w-8 h-8 mr-4"
              />
              Eggs
            </li>
            <li className="p-4 border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Flakes & Kids"
                className="w-8 h-8 mr-4"
              />
              Flakes & Kids
            </li>
            <li className="p-4 border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Bread & Pav"
                className="w-8 h-8 mr-4"
              />
              Bread & Pav
            </li>
            <li className="p-4 border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Paneer & Tofu"
                className="w-8 h-8 mr-4"
              />
              Paneer & Tofu
            </li>
            <li className="p-4 border-b flex items-center cursor-pointer hover:bg-green-100">
              <img
                src="https://via.placeholder.com/50" // Placeholder image
                alt="Museli & Granola"
                className="w-8 h-8 mr-4"
              />
              Museli & Granola
            </li>
          </div>
        </div>
        {/* Right Side Content */}
        <div className="w-[80%] h-auto">
          {/* Header Section */}
          <div className="w-full h-10 border-b flex justify-between px-2 ">
            <div>
              <h1 className="font-bold">Buy Bread and Pav Online</h1>
            </div>
            <div className="text-gray-400">Sort By</div>
          </div>

          {/* Card Data Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
            {dairyItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.qunt}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-500">
                      ₹{item.cost}
                    </span>
                    <button
                      onClick={() => dispatch(addtocart(item))}
                      className="bg-green-500 text-white cursor-pointer px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dairyproduct;
