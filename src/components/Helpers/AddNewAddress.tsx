// Used in /user/profile , /checkout pages

import { UserProps } from "@/interfaces/User.interface";
import useTranslation from "next-translate/useTranslation";
import { AiOutlineClose } from "react-icons/ai";

function AddNewAddress(props: UserProps) {
  const { t } = useTranslation("payment");
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
          <h2 className="font-semibold text-xl">{t("AddNewAddress")}</h2>
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
              {t("Address")}
            </label>
            <input
              className="w-3/4 xs:w-full border outline-0 p-2 rounded-md"
              placeholder={t("Address")}
              id="address"
            />
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="country"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              {t("Country")}
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
              {t("State")}
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
              {t("City")}
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
              {t("PostalCode")}
            </label>
            <input
              className="w-3/4 xs:w-full border outline-0 p-2 rounded-md"
              placeholder={t("PostalCode")}
              id="postal-code"
            />
          </div>
          <div className="flex items-center xs:items-start justify-between xs:flex-col p-2">
            <label
              htmlFor="phone"
              className="cursor-pointer font-semibold text-zinc-500 xs:mb-1"
            >
              {t("Phone")}
            </label>
            <input
              className="w-3/4 xs:w-full border outline-0 p-2 rounded-md"
              placeholder={t("Phone")}
              id="phone"
            />
          </div>
          <button className="bg-red-600 text-white font-semibold w-[98%] mx-auto mb-2 block p-2 rounded-md">
            {t("SaveChanges")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewAddress;
