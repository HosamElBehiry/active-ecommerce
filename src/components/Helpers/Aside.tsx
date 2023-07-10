// Used In Category Component in [category].tsx

import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

function Aside() {
  const [catActive, setCatActive] = useState(true);
  const [colorActive, setColorActive] = useState(true);
  return (
    <aside className="col-span-3">
      <div className="border rounded-sm mb-4">
        <h2
          className="flex items-center justify-between p-2 cursor-pointer"
          onClick={() => setCatActive(!catActive)}
        >
          <span className="font-semibold text-lg">Categories</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${catActive ? "rotate-180" : "rotate-0"}`}
          />
        </h2>
        <ul className={catActive ? "block" : "hidden"}>
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
          onClick={() => setColorActive(!colorActive)}
          className="flex items-center justify-between p-2 cursor-pointer"
        >
          <span className="font-semibold text-lg">Filter By Colors</span>
          <MdKeyboardArrowDown
            size="1.3rem"
            className={`text-zinc-500 ${
              colorActive ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <ul
          className={
            !colorActive ? "hidden" : "grid grid-cols-5 gap-3 mb-2 p-2"
          }
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
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
