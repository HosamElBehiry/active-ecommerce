// Used In Category Component in [category].tsx

import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import { AsideCat, Price } from "@/constants/Category";
import { useState } from "react";
import { useRanger } from "react-ranger";

function Aside() {
  const [active, setActive] = useState(AsideCat);
  const [values, setValues] = useState([0, 10000]);
  const { getTrackProps, handles } = useRanger(Price(values, setValues));
  return (
    <aside className="col-span-3 lg:hidden">
      <div className="border rounded-sm mb-4">
        <h2
          className="flex items-center justify-between p-2 cursor-pointer"
          onClick={() => setActive({ ...active, category: !active.category })}
        >
          <span className="font-semibold text-lg">Categories</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              active.category ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <ul className={active.category ? "block" : "hidden"}>
          <li className="cursor-pointer hover:text-red-600 my-2 flex items-center">
            <MdKeyboardArrowLeft size="1.4rem" />
            <span className="mx-2 font-semibold">All Categories</span>
          </li>
          <li className="cursor-pointer hover:text-red-600 my-2 flex items-center">
            <MdKeyboardArrowLeft size="1.4rem" />
            <span className="mx-2 font-semibold">CellPhones & Tabs</span>
          </li>
          <li className="cursor-pointer hover:text-red-600 my-2 flex items-center">
            <MdKeyboardArrowLeft size="1.4rem" />
            <span className="mx-2 font-semibold">Mobile & Phones</span>
          </li>
          <li className="cursor-pointer hover:text-red-600 my-2 px-7">
            Basic Phone
          </li>
          <li className="cursor-pointer hover:text-red-600 my-2 px-7">
            Android Phone
          </li>
          <li className="cursor-pointer hover:text-red-600 my-2 px-7">
            IOS Phone
          </li>
          <li className="cursor-pointer hover:text-red-600 my-2 px-7">
            Windows Phone
          </li>
        </ul>
      </div>
      <div className="border rounded-sm mb-4">
        <h2
          onClick={() => setActive({ ...active, price: !active.price })}
          className="flex items-center justify-between p-2 cursor-pointer"
        >
          <span className="font-semibold text-lg">Filter By Price</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              active.price ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <div className={active.price ? "px-3 mb-8" : "hidden"}>
          <div {...getTrackProps({})} className="h-1 bg-yellow-400 rounded-md">
            {handles.map(({ getHandleProps, value }, i) => (
              <div
                {...getHandleProps({})}
                key={i}
                className="bg-yellow-500 w-4 h-4 rounded-full border border-yellow-500"
              >
                <div className="my-3 -mx-2 cursor-pointer text-zinc-600 text-center">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border rounded-sm mb-4">
        <h2
          onClick={() => setActive({ ...active, size: !active.size })}
          className="flex items-center justify-between p-2 cursor-pointer"
        >
          <span className="font-semibold text-lg">Filter By Size</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              active.size ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <ul className={active.size ? "p-2" : "hidden"}>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="flex items-center mb-2">
              <input type="checkbox" id={String(i + 1)} />{" "}
              <label className="mx-2 cursor-pointer" htmlFor={String(i + 1)}>
                Size {i}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-sm mb-4">
        <h2
          onClick={() => setActive({ ...active, febric: !active.febric })}
          className="flex items-center justify-between p-2 cursor-pointer"
        >
          <span className="font-semibold text-lg">Filter By Febric</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              active.size ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <ul className={active.febric ? "p-2" : "hidden"}>
          {[6, 7, 8, 9, 10].map((i) => (
            <li key={i} className="flex items-center mb-2">
              <input type="checkbox" id={String(i + 1)} />{" "}
              <label className="mx-2 cursor-pointer" htmlFor={String(i + 1)}>
                Febric {i}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-sm mb-4">
        <h2
          onClick={() => setActive({ ...active, sleeve: !active.sleeve })}
          className="flex items-center justify-between p-2 cursor-pointer"
        >
          <span className="font-semibold text-lg">Filter By Sleeve</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              active.sleeve ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <ul className={active.sleeve ? "p-2" : "hidden"}>
          {[11, 12, 13, 14, 15].map((i) => (
            <li key={i} className="flex items-center mb-2">
              <input type="checkbox" id={String(i + 1)} />{" "}
              <label className="mx-2 cursor-pointer" htmlFor={String(i + 1)}>
                Sleeve {i}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-sm mb-4">
        <h2
          onClick={() => setActive({ ...active, color: !active.color })}
          className="flex items-center justify-between p-2 cursor-pointer"
        >
          <span className="font-semibold text-lg">Filter By Colors</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              active.color ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <ul
          className={
            !active.color ? "hidden" : "grid grid-cols-5 gap-3 mb-2 p-2"
          }
        >
          {[16, 17, 18, 19, 20].map((i) => (
            <li key={i} className="border rounded-sm px-1 py-1.5">
              <div className="h-6 w-5/6 mx-auto bg-red-600"></div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
