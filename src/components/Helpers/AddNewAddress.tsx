// Used in /user/profile , /checkout pages

import { UserProps } from "@/interfaces/User.interface";
import { AiOutlineClose } from "react-icons/ai";

function AddNewAddress(props: UserProps) {
  return (
    <div
      className={
        props.active
          ? "z-50 fixed top-0 left-0 w-screen min-h-screen bg-light-black flex items-center justify-center"
          : "hidden"
      }
    >
      <div className="bg-white p-2 rounded-md w-[768px] sm:w-[95%] sm:mx-auto overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between p-3 border-b">
          <h2 className="font-semibold text-xl">Add New Address</h2>
          <AiOutlineClose
            size="1.3rem"
            className="text-red-500 cursor-pointer"
            onClick={() => props.setActive(!props.active)}
          />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="address"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              Your Address
            </label>
            <input
              className="w-3/4 xs:w-full border outline-0 p-2 rounded-md"
              placeholder="Your Address"
              id="address"
            />
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="country"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              Your Country
            </label>
            <select
              className="w-3/4 xs:w-full border outline-0 p-1 rounded-md bg-white"
              id="country"
            >
              <option value="Eg">Egypt</option>
              <option value="KSA">KSA</option>
              <option value="UAE">UAE</option>
            </select>
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="state"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              Your State
            </label>
            <select
              className="w-3/4 xs:w-full border outline-0 p-1 rounded-md bg-white"
              id="state"
            >
              <option value="Eg">Egypt</option>
              <option value="KSA">KSA</option>
              <option value="UAE">UAE</option>
            </select>
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="city"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              Your City
            </label>
            <select
              className="w-3/4 xs:w-full border outline-0 p-1 rounded-md bg-white"
              id="city"
            >
              <option value="Eg">Egypt</option>
              <option value="KSA">KSA</option>
              <option value="UAE">UAE</option>
            </select>
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="postal-code"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              Postal Code
            </label>
            <input
              className="w-3/4 xs:w-full border outline-0 p-2 rounded-md"
              placeholder="Postal Code"
              id="postal-code"
            />
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="phone"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              Your Phone
            </label>
            <input
              className="w-3/4 xs:w-full border outline-0 p-2 rounded-md"
              placeholder="Your Phone"
              id="phone"
            />
          </div>
          <button className="bg-red-600 text-white font-semibold w-[98%] mx-auto mb-2 block p-2 rounded-md">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewAddress;
