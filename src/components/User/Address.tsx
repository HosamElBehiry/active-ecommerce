import { useState, Fragment } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";
import AddNewAddress from "@/components/Helpers/AddNewAddress";

function Address() {
  const { t } = useTranslation("user");
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      <div className="p-2 border rounded-md my-3">
        <h4 className="font-semibold text-lg mb-3">{t("Address")}</h4>
        <div className="border p-2 rounded-md flex justify-between flex-col">
          <div>
            <div className="flex item-center mb-2 xs:flex-col">
              <label className="text-zinc-400 xs:mb-1">{t("Address")} : </label>
              <p className="mx-1 xs:mx-0 flex-1">
                3947 West Side Avenue Hackensack, NJ 07601
              </p>
            </div>
            <div className="flex item-center mb-2 xs:flex-col">
              <label className="text-zinc-400 xs:mb-1">
                {t("PostalCode")} :{" "}
              </label>
              <p className="mx-1 xs:mx-0 flex-1">12345</p>
            </div>
            <div className="flex item-center mb-2 xs:flex-col">
              <label className="text-zinc-400 xs:mb-1">{t("City")} : </label>
              <p className="mx-1 xs:mx-0 flex-1">College</p>
            </div>
            <div className="flex item-center mb-2 xs:flex-col">
              <label className="text-zinc-400 xs:mb-1">{t("State")} : </label>
              <p className="mx-1 xs:mx-0 flex-1">Alaska</p>
            </div>
            <div className="flex item-center mb-2 xs:flex-col">
              <label className="text-zinc-400 xs:mb-1">{t("Country")} : </label>
              <p className="mx-1 xs:mx-0 flex-1">USA</p>
            </div>
            <div className="flex item-center mb-2 xs:flex-col">
              <label className="text-zinc-400 xs:mb-1">{t("Phone")} : </label>
              <p className="mx-1 xs:mx-0 flex-1">201-287-7714</p>
            </div>
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-1 gap-2">
            <button className="w-full p-2 rounded-md bg-green-700 text-white font-semibold flex items-center justify-center">
              <AiOutlineEdit size="1.1rem" />
              <span className="mx-2">{t("Edit")}</span>
            </button>
            <button className="w-full p-2 rounded-md bg-red-700 text-white font-semibold flex items-center justify-center">
              <AiOutlineDelete size="1.1rem" />
              <span className="mx-2">{t("Delete")}</span>
            </button>
          </div>
        </div>
        <div
          onClick={() => setActive(!active)}
          className="cursor-pointer flex flex-col items-center justify-center my-3 p-2 rounded-md bg-neutral-200"
        >
          <AiOutlinePlus size="1.3rem" />
          <span className="my-0.5 font-semibold">{t("AddNewAddress")}</span>
        </div>
      </div>
      {active && <AddNewAddress {...{ active, setActive }} />}
    </Fragment>
  );
}

export default Address;
