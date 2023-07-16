import Steps from "@/components/Payment/Steps";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Index() {
  const [delivery, setDelivery] = useState(false);
  return (
    <Steps step={3}>
      <div className="my-6 border p-6 sm:p-3 rounded-md">
        <h3 className="font-semibold text-xl mb-3">Inhouse Products</h3>
        <div className="border p-4 sm:p-2 rounded-md flex items-center sm:block">
          <Image
            src="/imgs/product/2.jpg"
            className="h-20 sm:h-28 w-20 object-cover sm:mx-auto"
            height={1000}
            width={1000}
            alt="Prod Img!"
          />
          <h4 className="mx-3 sm:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
            ipsam minima ab officia itaque quam aliquam veritatis voluptatum
            beatae.
          </h4>
        </div>
        <div className="mt-3 mb-7 flex items-center justify-between sm:block">
          <h5 className="font-semibold">Choose Delivery Type</h5>
          <div className="flex items-center sm:block">
            <button
              onClick={() => setDelivery(!delivery)}
              className="p-3 border rounded-md flex items-center mx-3 sm:mx-0 sm:my-1.5 sm:w-full"
            >
              <div className="h-5 w-5 border rounded-full relative mt-1">
                {!delivery && (
                  <div className="h-2 w-2 bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                )}
              </div>
              <span className="mx-3">Home Delivery</span>
            </button>
            <button
              onClick={() => setDelivery(!delivery)}
              className="p-3 border rounded-md flex items-center sm:w-full"
            >
              <div className="h-5 w-5 border rounded-full relative mt-1">
                {delivery && (
                  <div className="h-2 w-2 bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                )}{" "}
              </div>
              <span className="mx-3">Local Pickup</span>
            </button>
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
            Continue To Payment
          </Link>
        </div>
      </div>
    </Steps>
  );
}

export default Index;
