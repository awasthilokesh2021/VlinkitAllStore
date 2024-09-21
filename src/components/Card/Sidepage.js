import React from "react";
import { useSelector } from "react-redux";

const Sidepage = ({totalQuantity, totalPrice}) => {
 
  return (
    <div className="bg-white border w-[20vw]">
      <h1 className="text-center text-2xl p-1">summery</h1>
      <hr className="w-full bg-slate-500 mb-2 " />
      <div className="px-2">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-5">
            <div>TotalQuantity</div>
            <div>{totalQuantity}</div>
          </div>

          <hr className="w-full bg-slate-500 mb-2" />

          <div className="flex justify-between gap-3">
            <div>TotalPrice</div>
            <div>{totalPrice}</div>
          </div>
          <div className=" rounded-md bg-green-700 text-center text-white mb-2">
            <button className="p-2">Go to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepage;