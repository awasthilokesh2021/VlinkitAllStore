import React from "react";
import { Link } from "react-router-dom"; // Import Link
import items from "./Data";

const Carddata = () => {
  return (
    <div className="w-full py-8 bg-gray-100">
      <div className="container mx-auto w-[90%] grid lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-6">
        {items.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            {" "}
            {/* Create a link to the product */}
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-20 object-cover"
              />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold mb-2">{item.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carddata;
