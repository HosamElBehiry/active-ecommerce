import Image from "next/image";
import {
  AiOutlineMail,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import NumberFormat from "@/constants/Fotmatter";

function UserActions() {
  const { t, lang } = useTranslation("product");
  return (
    <section>
      <div className="my-3">
        <div className="flex items-center xs:block mb-3">
          <h4 className="text-zinc-500 min-w-[100px]">{t("Price")}</h4>
          <h5 className="mx-6 xs:mx-0 xs:my-1 font-semibold text-red-600">
            {NumberFormat[lang].format(1900)}{" "}
            <span className="text-zinc-400">/{t("PC")}</span>{" "}
            <span className="mx-1">{t("EGP")}</span>
          </h5>
        </div>
        <div className="flex items-center xs:block mb-3">
          <h4 className="text-zinc-500 min-w-[100px] xs:w-full">
            {t("Colors")}
          </h4>
          <div className="mx-5 xs:mx-0 xs:my-1 flex items-center">
            <button className="h-8 w-8 border rounded-sm p-1 mr-1">
              <div className="h-full w-full rounded-sm bg-black"></div>
            </button>
            <button className="h-8 w-8 border rounded-sm p-1 mr-1">
              <div className="h-full w-full rounded-sm bg-red-600"></div>
            </button>
            <button className="h-8 w-8 border rounded-sm p-1 mr-1">
              <div className="h-full w-full rounded-sm bg-sky-600"></div>
            </button>
            <button className="h-8 w-8 border rounded-sm p-1">
              <div className="h-full w-full rounded-sm bg-yellow-300"></div>
            </button>
          </div>
        </div>
        <div className="flex items-center xs:block mb-3">
          <h4 className="text-zinc-500 min-w-[100px] xs:w-full">
            {t("Quantity")}
          </h4>
          <div className="mx-5 xs:mx-0 xs:my-1 flex items-center">
            <div className="flex items-center">
              <button className="bg-gray-100 p-2.5 rounded-sm">
                <AiOutlineMinus />
              </button>
              <input
                type="number"
                defaultValue={10}
                min={1}
                className="w-16 text-center py-1 mx-1 outline-0"
              />
              <button className="bg-gray-100 p-2.5 rounded-sm">
                <AiOutlinePlus />
              </button>
            </div>
            <div className="mx-2 text-zinc-500">
              ({NumberFormat[lang].format(497)} {t("Available")})
            </div>
          </div>
        </div>
        <div className="flex items-center xs:block mb-3">
          <h4 className="text-zinc-500 min-w-[100px] xs:w-full">
            {t("TotalPrice")}
          </h4>
          <h5 className="mx-6 xs:mx-0 xs:my-1 font-semibold text-red-600">
            {NumberFormat[lang].format(19000)} {t("EGP")}
          </h5>
        </div>
      </div>
      <div className="my-3 xs:my-0">
        <div className="flex items-center xs:block">
          <button className="flex items-center justify-center bg-yellow-500 py-3 w-1/4 sm:w-5/12 xs:w-full rounded-md text-white">
            <AiOutlineShoppingCart />
            <span className="mx-2">{t("AddToCart")}</span>
          </button>
          <button className="flex items-center justify-center bg-red-600 py-3 w-1/4 sm:w-5/12 xs:w-full xs:my-3 rounded-md text-white mx-5 xs:mx-0">
            <BiShoppingBag />
            <span className="mx-2">{t("BuyNow")}</span>
          </button>
        </div>
      </div>
      <button className="my-1 xs:mt-0 bg-neutral-500 text-white py-3 px-5 w-[53%] rounded-md xs:w-full">
        {t("CopyThePromoteLink")}
      </button>
      <div className="mt-4 flex items-center 2xs:block">
        <span className="text-zinc-500 min-w-[100px] 2xs:block 2xs:w-full">
          {t("Refund")}
        </span>
        <Image
          src="/imgs/product/refund.jpg"
          className="h-9 w-auto"
          height={1000}
          width={1000}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-center 2xs:block">
        <span className="text-zinc-500 min-w-[100px] 2xs:w-full">
          {t("Share")}
        </span>
        <div className="flex items-center mx-1 2xs:mx-0">
          <button className="p-2 rounded-md text-white bg-sky-600 mx-1 border">
            <AiOutlineMail />
          </button>
          <button className="p-2 rounded-md text-white bg-blue-800 mx-1 border">
            <FaFacebookF />
          </button>
          <button className="p-2 rounded-md text-white bg-sky-400 mx-1 border">
            <AiOutlineTwitter />
          </button>
          <button className="p-2 rounded-md text-white bg-sky-700 mx-1 border">
            <FaLinkedinIn />
          </button>
          <button className="p-2 rounded-md text-white bg-emerald-500 mx-1 border">
            <AiOutlineWhatsApp />
          </button>
        </div>
      </div>
    </section>
  );
}

export default UserActions;
