import Steps from "@/components/Payment/Steps";
import useTranslation from "next-translate/useTranslation";
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
  const { t, lang } = useTranslation("payment");
  return (
    <Steps step={1}>
      <div className="my-6 border p-3 rounded-md">
        <div className="grid grid-cols-12 p-2">
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden">
            {t("Qty")}
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden col-span-7 lg:col-span-4 text-center">
            {t("Product")}
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden lg:col-span-2 text-center">
            {t("Price")}
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden lg:col-span-2 text-center">
            {t("Tax")}
          </div>
          <div className="pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden lg:col-span-2 text-center">
            {t("Total")}
          </div>
          <div
            className={`pb-3 font-semibold text-sm text-zinc-400 border-b sm:hidden ${
              lang === "en" ? "text-right" : "text-left"
            }`}
          >
            {t("Remove")}
          </div>
          {[1, 2].map((i) => (
            <Fragment key={i}>
              <div className="sm:col-span-6 py-3 font-semibold border-b">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500">
                  {t("Qty")}
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
                  {t("Product")}
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
                  {t("Price")}
                </div>
                <div className="flex items-center justify-center flex-1">
                  72000 {t("EGP")}
                </div>
              </div>
              <div className="sm:col-span-6 py-3 font-semibold flex flex-col border-b lg:col-span-2">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  {t("Tax")}
                </div>
                <div className="flex items-center justify-center flex-1">
                  0 {t("EGP")}
                </div>
              </div>
              <div className="sm:col-span-6 py-3 font-semibold border-b flex flex-col text-red-600 lg:col-span-2">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  {t("Total")}
                </div>
                <div className="flex items-center justify-center flex-1">
                  72000 {t("EGP")}
                </div>
              </div>
              <div className="sm:col-span-6 py-3 border-b flex flex-col">
                <div className="hidden sm:block mb-2 text-center text-sm text-zinc-500 font-semibold">
                  {t("Remove")}
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
            <div className="py-3 font-semibold text-zinc-700">
              {t("SubTotal")}
            </div>
            <div
              className={`py-3 font-semibold ${
                lang === "en" ? "text-right" : "text-left"
              } text-lg`}
            >
              19600 {t("EGP")}
            </div>
          </div>
          <div className="flex items-center justify-between col-span-12 flex-wrap 2xs:block 2xs:text-center">
            <Link
              href="/"
              className="pt-3 font-semibold text-red-600 col-span-10 flex items-center 2xs:justify-center"
            >
              <AiOutlineArrowLeft size="1.2rem" />
              <span className="mx-1">{t("ReturnShop")}</span>
            </Link>
            <Link
              href="/checkout"
              className="inline-block py-2 px-5 h-fit font-semibold bg-red-600 text-white rounded-md 2xs:my-2"
            >
              {t("ContinueShipping")}
            </Link>
          </div>
        </div>
      </div>
    </Steps>
  );
}

export default Index;
