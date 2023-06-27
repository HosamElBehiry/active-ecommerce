import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import BreadCrumb from "@/components/Helpers/BreadCrumb";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import NumberFormat from "@/constants/Fotmatter";
import Data from "@/json/vendors.json";
import Link from "next/link";

function Vendors() {
  const { t, lang } = useTranslation("vendors");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <BreadCrumb title={t("AllSellers")} current={t("Vendors")} />
      <div className="grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 my-6">
        {Data.Vendors.map((vendor, i) => (
          <div
            className="border p-5 cursor-pointer hover:shadow-xl transition-all duration-500"
            key={i}
          >
            <div className="overflow-hidden h-[100px] w-[100px] mx-auto p-1 relative ">
              <Image
                height={1000}
                width={1000}
                src={`/imgs/vendor/${vendor.img}`}
                className="h-full w-full object-fill rounded-full border shadow-md transition-all duration-500 hover:scale-105"
                alt={vendor.name}
              />
              <div className="absolute top-0 right-3 rounded-full p-0.5 border border-blue-500 bg-white">
                <div className="bg-blue-500 text-white rounded-full">
                  <AiOutlineCheck size="1rem" />
                </div>
              </div>
            </div>

            <h3 className="my-3 font-semibold text-lg text-center hover:text-red-600 transition-all duration-500">
              {vendor.name}
            </h3>
            <div className="flex items-center justify-center">
              {[...Array(vendor.review)].map((i) => (
                <AiFillStar className="text-yellow-400" size="1.3rem" key={i} />
              ))}
              {[...Array(5 - vendor.review)].map((i) => (
                <AiFillStar className="text-zinc-500" size="1.3rem" key={i} />
              ))}
            </div>
            <p className="text-center text-zinc-500 my-3">
              ({NumberFormat[lang].format(vendor.review)} {t("Review")})
            </p>
            <div className="relative my-3">
              <Link
                href={vendor.link}
                className="w-full flex items-center justify-center hover:bg-red-200 hover:rounded-full transition-all duration-500"
              >
                <div className="bg-red-200 p-1 rounded-full">
                  <RiArrowRightSLine
                    className={`text-red-600 ${
                      lang === "en" ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
                <span className="mx-4">{t("VisitStore")}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vendors;
