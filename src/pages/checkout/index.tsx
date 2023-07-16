import { useState, Fragment } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import Steps from "@/components/Payment/Steps";
import AddNewAddress from "@/components/Helpers/AddNewAddress";

function Index() {
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      <Steps step={1}>
        <div className="my-6 border p-6 rounded-md">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="p-3 border rounded-md grid grid-cols-12 gap-4 mb-3 cursor-pointer"
            >
              <div className="flex col-span-10 lg:col-span-8 sm:col-span-12">
                <div className="h-4 w-5 border rounded-full relative mt-1">
                  {!i && (
                    <div className="h-2 w-2 bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </div>
                <div className="mx-4 flex-1">
                  <h6 className="text-zinc-500 whitespace-nowrap">Address</h6>
                  <h6 className="text-zinc-500 whitespace-nowrap">
                    Postal Code
                  </h6>
                  <h6 className="text-zinc-500 whitespace-nowrap">City</h6>
                  <h6 className="text-zinc-500 whitespace-nowrap">State</h6>
                  <h6 className="text-zinc-500 whitespace-nowrap">Country</h6>
                  <h6 className="text-zinc-500 whitespace-nowrap">Phone</h6>
                </div>
                <div className="mx-4">
                  <h6 className="line-clamp-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Debitis ut nulla itaque molestiae, eos nisi optio animi
                    omnis esse praesentium?
                  </h6>
                  <h6 className="line-clamp-1">11411</h6>
                  <h6 className="line-clamp-1">Cairo</h6>
                  <h6 className="line-clamp-1">Mokattam</h6>
                  <h6 className="line-clamp-1">Egypt</h6>
                  <h6 className="line-clamp-1">+201021620845</h6>
                </div>
              </div>
              <div className="flex justify-end col-span-2 lg:col-span-4 sm:col-span-12">
                <button
                  onClick={() => setActive(!active)}
                  className="bg-yellow-500 font-semibold text-white rounded-md p-2 w-fit sm:w-full h-fit"
                >
                  Change Address
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() => setActive(!active)}
            className="my-3 w-full flex flex-col items-center justify-center bg-neutral-200 hover:bg-neutral-300 cursor-pointer transition-all duration-500 p-3 rounded-md"
          >
            <AiOutlinePlus size="1.5rem" />
            <h3 className="font-semibold text-lg">Add New Address</h3>
          </button>
          <div className="flex items-center justify-between col-span-12 flex-wrap 2xs:block 2xs:text-center">
            <Link
              href="/"
              className="pt-3 font-semibold text-red-600 col-span-10 flex items-center 2xs:justify-center"
            >
              <AiOutlineArrowLeft size="1.2rem" />{" "}
              <span className="mx-1">Return To Shop</span>
            </Link>
            <Link
              href="/checkout/delivery"
              className="inline-block py-2 px-5 h-fit font-semibold bg-red-600 text-white rounded-md 2xs:my-2"
            >
              Continue To Delivery Info
            </Link>
          </div>
        </div>
      </Steps>
      {active && <AddNewAddress {...{ active, setActive }} />}
    </Fragment>
  );
}

export default Index;
