// Related To Product Card Component
// After Clicking Add To Cart This Modal Will be Shown

import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "@/pages/_app";
import {
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function CartModal() {
  const Context = useContext(ModalContext);
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 flex items-center justify-end">
        <AiOutlineClose
          size="1.7rem"
          className="text-red-600 cursor-pointer"
          onClick={() => Context?.dispatch({ type: "cartModal" })}
        />
      </div>
      <div className="col-span-2 sm:col-span-3 xs:hidden flex flex-col justify-between">
        {[2, 3, 4].map((i) => (
          <Image
            key={i}
            src={`/imgs/product/${i}.jpg`}
            className={`h-24 sm:h-28 w-full p-2 border rounded-sm`}
            height={1000}
            width={1000}
            alt="Prod Img1"
          />
        ))}
      </div>
      <div className="col-span-5 sm:col-span-9 xs:col-span-12">
        <Image
          src="/imgs/product/1.jpg"
          className="h-full sm:h-[350px] w-full border rounded-sm p-2"
          height={1000}
          width={1000}
          alt="Main Img!"
        />
      </div>
      <div className="col-span-5 sm:col-span-12 sm:flex sm:flex-col sm:items-center">
        <h3 className="font-semibold text-lg text-center">
          Rb3030 Outdoorsman I Aviator Sunglasses
        </h3>
        <div className="flex items-center my-2">
          <span className="w-24 text-zinc-500">Price</span>
          <h5 className="font-semibold text-red-600 text-lg">
            6900 EGP <span className="mx-0.5 text-zinc-500 text-sm">/pc</span>
          </h5>
        </div>
        <div className="flex items-center my-2">
          <span className="w-24 text-zinc-500">Quantity</span>
          <div className="flex items-center">
            <button className="bg-gray-100 p-2 rounded-sm">
              <AiOutlinePlus size="1.1rem" />
            </button>
            <input
              type="number"
              className="outline-0 p-2 w-[70px] text-center"
              defaultValue={10}
            />
            <button className="bg-gray-100 p-2 rounded-sm">
              <AiOutlineMinus size="1.1rem" />
            </button>
          </div>
        </div>
        <div className="flex items-center my-2">
          <span className="w-24 text-zinc-500">Total Price</span>
          <h5 className="font-semibold text-red-600 text-lg">6900 EGP</h5>
        </div>
        <button className="bg-red-600 text-white font-semibold w-full rounded-md p-2 flex items-center justify-center">
          <AiOutlineShoppingCart />
          <span className="mx-1">Add To Cart</span>
        </button>
      </div>
    </div>
  );
}

export default CartModal;
