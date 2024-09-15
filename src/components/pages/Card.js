import React from "react";

const Card = () => {
  return (
    <div className="w-full py-8 bg-gray-100 hidden lg:block">
      <div className="container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-500 hover:scale-105">
          <img
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://media.istockphoto.com/id/1201531449/vector/cleaning-service-linear-icons-vector-seamless-pattern-household-background-housekeeping-line.jpg?s=612x612&w=0&k=20&c=7SqtU_alZjklL-e_vGlFk20w58V4KeYz85kxoBMda4I="
            alt="Pharmacy Image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 text-white z-10 space-y-2">
            <h2 className="text-2xl font-bold">Pharmacy at</h2>
            <p className="text-lg">Your Store</p>
            <p className="text-sm">Fever, cold, etc.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-500 hover:scale-105">
          <img
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://media.istockphoto.com/id/1201531449/vector/cleaning-service-linear-icons-vector-seamless-pattern-household-background-housekeeping-line.jpg?s=612x612&w=0&k=20&c=7SqtU_alZjklL-e_vGlFk20w58V4KeYz85kxoBMda4I="
            alt="Pharmacy Image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 text-white z-10 space-y-2">
            <h2 className="text-2xl font-bold">Pharmacy at</h2>
            <p className="text-lg">Your Store</p>
            <p className="text-sm">Fever, cold, etc.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-500 hover:scale-105">
          <img
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://media.istockphoto.com/id/1201531449/vector/cleaning-service-linear-icons-vector-seamless-pattern-household-background-housekeeping-line.jpg?s=612x612&w=0&k=20&c=7SqtU_alZjklL-e_vGlFk20w58V4KeYz85kxoBMda4I="
            alt="Pharmacy Image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 text-white z-10 space-y-2">
            <h2 className="text-2xl font-bold">Pharmacy at</h2>
            <p className="text-lg">Your Store</p>
            <p className="text-sm">Fever, cold, etc.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
