import UserLayout from "@/components/User/UserLayout";
import { Fragment, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

function Index() {
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <UserLayout>
      <h1 className="text-xl font-semibold mb-4">Purchase History</h1>
      <div className="grid grid-cols-6 border-b py-3">
        <h6 className="text-zinc-400 font-semibold text-sm sm:col-span-2">
          Code
        </h6>
        <h6 className="text-zinc-400 font-semibold text-sm sm:hidden">Date</h6>
        <h6 className="text-zinc-400 font-semibold text-sm sm:col-span-2 sm:text-center">
          Amount
        </h6>
        <h6 className="text-zinc-400 font-semibold text-sm sm:hidden">
          Delivery
        </h6>
        <h6 className="text-zinc-400 font-semibold text-sm sm:hidden">
          Payment
        </h6>
        <h6 className="text-zinc-400 font-semibold text-sm text-right sm:col-span-2">
          Options
        </h6>
      </div>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Fragment key={i}>
          <div className="grid grid-cols-6 border-b last:border-none py-3">
            <h6 className="text-red-600 flex items-center sm:col-span-2">
              <button
                onClick={() => {
                  setActive((prev) => [
                    ...prev.slice(0, i),
                    !active[i],
                    ...prev.slice(i + 1, prev.length),
                  ]);
                }}
                className="bg-rose-100 p-1 rounded-md text-red-600 hidden sm:block"
              >
                {!active[i] ? (
                  <AiOutlinePlus size="0.9rem" />
                ) : (
                  <AiOutlineMinus size="0.9rem" />
                )}
              </button>
              <span className="line-clamp-1 mx-1">20220912-10085522</span>{" "}
            </h6>
            <h6 className="text-zinc-400 sm:hidden">12-09-2022</h6>
            <h6 className="font-semibold sm:col-span-2 sm:text-center">
              $48.450
            </h6>
            <h6 className="font-semibold sm:hidden">
              {i % 2 === 0 ? "Pending" : "Deliverd"}
            </h6>
            <h6
              className={`${
                i % 2 === 0 ? "bg-rose-400" : "bg-emerald-500"
              } p-1.5 text-center rounded-full text-white text-sm sm:hidden`}
            >
              {i % 2 === 0 ? "Unpaid" : "paid"}
            </h6>
            <h6 className="flex justify-end sm:col-span-2">
              <button className="bg-yellow-100 text-yellow-400 h-fit p-1.5 rounded-full">
                <HiDownload size="1.2rem" />
              </button>
              <button className="bg-red-100 text-red-400 h-fit p-1.5 rounded-full mx-1">
                <RiDeleteBin5Line size="1.2rem" />
              </button>
            </h6>
          </div>
          {active[i] && (
            <Fragment>
              <div className="grid grid-cols-4 py-3 border-b">
                <h6 className="font-semibold">Date</h6>
                <h6 className="text-zinc-400 xs:col-span-3 xs:text-center">
                  12-09-2022
                </h6>
              </div>
              <div className="grid grid-cols-4 py-3 border-b">
                <h6 className="font-semibold">Delivery</h6>
                <h6 className="font-semibold xs:col-span-3 xs:text-center">
                  Deliverd
                </h6>
              </div>
              <div className="grid grid-cols-4 py-3 border-b">
                <h6 className="font-semibold">Payment</h6>
                <h6
                  className={`${
                    i % 2 === 0 ? "bg-rose-400" : "bg-emerald-500"
                  } p-1.5 text-center rounded-full text-white text-sm xs:col-span-3 xs:px-6 xs:mx-auto`}
                >
                  {i % 2 === 0 ? "Unpaid" : "paid"}
                </h6>
              </div>
            </Fragment>
          )}
        </Fragment>
      ))}
    </UserLayout>
  );
}

export default Index;
