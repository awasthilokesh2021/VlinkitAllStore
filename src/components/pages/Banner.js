import React from 'react';

const Banner = () => {
  return (
    <div className="w-full py-4 hidden lg:block">
      <div className="container w-[90%] mx-auto relative">
        {/* Banner Image */}
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-shopping-carnival-banner-image_182341.jpg"
          alt="Shopping Carnival Banner"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/3 left-10 space-y-3">
          <h1 className="text-5xl text-white font-bold drop-shadow-lg">
            Paan Store
          </h1>
          <p className="text-xl text-white mb-4 drop-shadow-lg">
            Your favorite shop is online
          </p>
          <button className="bg-white text-black py-2 px-4 rounded-md shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
