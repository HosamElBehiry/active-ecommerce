// Used With /sellers and /user/fav-sellers pages
import Image from "next/image";
import Link from "next/link";
import NumberFormat from "@/constants/Fotmatter";
import useTranslation from "next-translate/useTranslation";
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { StoreProps } from "@/interfaces/Vendors.interface";

function Vendor({ data }: StoreProps) {
  const { t, lang } = useTranslation("vendors");

  return (
    <div className="border p-5 cursor-pointer hover:shadow-xl transition-all duration-500">
      <div className="overflow-hidden h-[100px] w-[100px] mx-auto p-1 relative ">
        <Image
          height={1000}
          width={1000}
          src={`/imgs/vendor/${data.img}`}
          className="h-full w-full object-fill rounded-full border shadow-md transition-all duration-500 hover:scale-105"
          alt={data.name}
        />
        <div className="absolute top-0 right-3 rounded-full p-0.5 border border-blue-500 bg-white">
          <div className="bg-blue-500 text-white rounded-full">
            <AiOutlineCheck size="1rem" />
          </div>
        </div>
      </div>

      <h3 className="my-3 font-semibold text-lg text-center hover:text-red-600 transition-all duration-500">
        {data.name}
      </h3>
      <div className="flex items-center justify-center">
        {[...Array(data.review)].map((_) => (
          <AiFillStar
            className="text-yellow-400"
            size="1.3rem"
            key={Math.random() * 1500 + new Date().toString()}
          />
        ))}
        {[...Array(5 - data.review)].map((_) => (
          <AiFillStar
            className="text-zinc-500"
            size="1.3rem"
            key={Math.random() * 1500 + new Date().toString()}
          />
        ))}
      </div>
      <p className="text-center text-zinc-500 my-3">
        ({NumberFormat[lang].format(data.review)} {t("Review")})
      </p>
      <div className="relative my-3">
        <Link
          href={data.link}
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
  );
}

export default Vendor;
