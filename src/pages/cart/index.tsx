import Steps from "@/components/Payment/Steps";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

function Index() {
  return (
    <Steps step={1}>
      <div className="my-6 border p-3 rounded-md">
        <div className="grid grid-cols-12 p-2">
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden">
            Qty
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden col-span-7 lg:col-span-4 text-center">
            Product
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden lg:col-span-2 text-center">
            Price
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden lg:col-span-2 text-center">
            Tax
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden lg:col-span-2 text-center">
            Total
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden text-right">
            Remove
          </div>
          {[1, 2].map((i) => (
            <Fragment key={i}>
              <div className="sm:col-span-6 py-3 font-semibold border-b">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500">
                  Qty
                </div>
                <div className="flex flex-col sm:justify-center sm:items-center">
                  <button className="bg-gray-200 p-2 rounded-full w-fit">
                    <AiOutlinePlus size="1.1rem" />
                  </button>
                  <input
                    type="number"
                    defaultValue={10}
                    className="h-12 w-7 outline-0 my-1 text-center mx-0.5"
                  />
                  <button className="bg-gray-200 p-2 rounded-full w-fit">
                    <AiOutlineMinus size="1.1rem" />
                  </button>
                </div>
              </div>
              <div className="sm:col-span-6 py-3 col-span-7 lg:col-span-4 border-b">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  Product
                </div>
                <div className="flex items-center xs:block">
                  <Image
                    src="/imgs/product/1.jpg"
                    className="h-28 w-28 xs:mx-auto"
                    height={1000}
                    width={1000}
                    alt="Product Img!"
                  />
                  <p className="mx-1 line-clamp-2 xs:line-clamp-1 xs:text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit, fugiat.
                  </p>
                </div>
              </div>
              <div className="sm:col-span-6 py-3 font-semibold flex flex-col border-b lg:col-span-2">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  Price
                </div>
                <div className="flex items-center justify-center flex-1">
                  72000 EGP
                </div>
              </div>
              <div className="sm:col-span-6 py-3 font-semibold flex flex-col border-b lg:col-span-2">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  Tax
                </div>
                <div className="flex items-center justify-center flex-1">
                  0 EGP
                </div>
              </div>
              <div className="sm:col-span-6 py-3 font-semibold border-b flex flex-col text-red-600 lg:col-span-2">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  Total
                </div>
                <div className="flex items-center justify-center flex-1">
                  72000 EGP
                </div>
              </div>
              <div className="sm:col-span-6 py-3 border-b flex flex-col">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  Remove
                </div>
                <div className="flex items-center justify-end sm:justify-center flex-1">
                  <button className="bg-red-100 p-2 rounded-full">
                    <RiDeleteBin5Line className="text-red-600" size="1.1rem" />
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
          <div className="col-span-12 flex items-center justify-between flex-wrap">
            <div className="py-3 font-semibold text-zinc-700">Sub Total</div>
            <div className="py-3 font-semibold text-right text-lg">
              19600 EGP
            </div>
          </div>
          <div className="flex items-center justify-between col-span-12 flex-wrap 2xs:block 2xs:text-center">
            <Link
              href="/"
              className="pt-3 font-semibold text-red-600 col-span-10 flex items-center 2xs:justify-center"
            >
              <AiOutlineArrowLeft size="1.2rem" />
              <span className="mx-1">Return To Shop</span>
            </Link>
            <Link
              href="/checkout"
              className="inline-block py-2 px-5 h-fit font-semibold bg-red-600 text-white rounded-md 2xs:my-2"
            >
              Continue To Shipping
            </Link>
          </div>
        </div>
      </div>
    </Steps>
  );
}

export default Index;
