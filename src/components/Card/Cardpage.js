import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GiRoyalLove } from "react-icons/gi";
import { CgTrashEmpty } from "react-icons/cg";
import Sidepage from "../Card/Sidepage";
import { removeItem, getCartTotal } from "../features/Cartslice";

const Cardpage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartData
  );
  console.log(totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Page Title */}
      <h1 className="text-center text-2xl font-bold py-6 text-gray-700">
        Your Cart Items
      </h1>

      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Left Side - Cart Items */}
          <div className="w-full lg:w-[60%] bg-white border rounded-lg shadow-lg px-6 py-8">
            {/* If Cart is Empty */}
            {cart.length === 0 ? (
              <div className="text-center text-xl font-medium text-gray-600 flex items-center justify-center gap-2">
                <p>Your Cart Is Empty</p>
                <CgTrashEmpty className="text-red-500 text-2xl" />
              </div>
            ) : (
              cart.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-b">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        className="w-[140px] h-[140px] sm:w-[160px] rounded-lg shadow-md"
                        src={data.image}
                        alt={data.name}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col flex-grow gap-2 text-center sm:text-left">
                      <h1 className="font-bold text-lg text-gray-800">
                        {data.name}
                      </h1>
                      <p className="text-gray-600">Cost: ₹{data.cost}</p>
                      <div className="flex justify-center sm:justify-start gap-4">
                        <span
                          onClick={() => dispatch(removeItem(data.id))}
                          className="bg-blue-600 text-white rounded px-3 py-2 cursor-pointer hover:bg-blue-700 transition"
                        >
                          <MdOutlineDeleteForever />
                        </span>
                        <span className="bg-red-700 text-white rounded px-3 py-2 cursor-pointer hover:bg-red-800 transition">
                          <GiRoyalLove />
                        </span>
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex flex-col items-center sm:items-end">
                      <div className="flex items-center gap-4">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                          -
                        </button>
                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value={data.quantity}
                          type="number"
                          className="w-12 text-center border rounded py-1"
                          onChange={() => null}
                        />
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                          +
                        </button>
                      </div>
                      <p className="text-gray-800 text-lg mt-3 font-semibold">
                        Price: ₹{data.cost * data.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Side - Summary or Additional Content */}
          <div className="w-full lg:w-[30%]">
            <Sidepage
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
