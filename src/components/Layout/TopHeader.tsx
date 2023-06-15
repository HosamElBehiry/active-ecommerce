import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Styles from "@/styles/site/layout.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";

function TopHeader() {
  const { asPath } = useRouter();
  const { lang, t } = useTranslation("common");
  return (
    <div className="flex items-center justify-between w-5/6 xs:w-11/12 mx-auto py-2 text-[13px] text-zinc-400">
      <div className="flex items-center md:w-full md:justify-between">
        <div
          className={`flex items-center cursor-pointer hover:text-black ease-in-out duration-500 relative ${Styles.dropDownMenu}`}
        >
          <span>{lang === "en" ? "English" : "العربية"}</span>
          <RiArrowDropDownLine size="1.4rem" />
          <ul
            className={`z-10 bg-white absolute top-full ${
              lang === "en" ? "left-0" : "right-0"
            } w-[140px] border shadow-md py-1`}
          >
            <li className="ease-in-out duration-500 hover:bg-red-600 hover:text-white text-zinc-500 p-2">
              <Link href={asPath} className="flex items-center" locale="en">
                <Image
                  className="mx-2 h-auto w-[15px]"
                  src="/imgs/en.png"
                  height={15}
                  width={15}
                  alt=""
                />
                English
              </Link>
            </li>
            <li className="ease-in-out duration-500 hover:bg-red-600 hover:text-white text-zinc-500 p-2 flex items-center">
              <Link href={asPath} className="flex items-center" locale="ar">
                <Image
                  className="mx-2 h-auto w-[15px]"
                  src="/imgs/ar.png"
                  height={15}
                  width={15}
                  alt=""
                />
                العربية
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex items-center cursor-pointer hover:text-black ease-in-out duration-500 relative mx-5 xs:mx-0 ${Styles.dropDownMenu}`}
        >
          <span>U.S.Dollar</span>
          <RiArrowDropDownLine size="1.4rem" />
          <ul
            className={`z-10 bg-white absolute top-full ${
              lang === "en" ? "left-0" : "right-0"
            } w-[140px] ${
              lang === "en" ? "md:-left-full" : "md:-right-full"
            } border shadow-md py-1`}
          >
            <li className="ease-in-out duration-500 hover:bg-red-600 hover:text-white text-zinc-500 p-2">
              U.S.Dollar
            </li>
            <li className="ease-in-out duration-500 hover:bg-red-600 hover:text-white text-zinc-500 p-2">
              Australian Dollar ($)
            </li>
            <li className="ease-in-out duration-500 hover:bg-red-600 hover:text-white text-zinc-500 p-2">
              Brazilian Real (R$)
            </li>
            <li className="ease-in-out duration-500 hover:bg-red-600 hover:text-white text-zinc-500 p-2">
              Canadian Dollar ($)
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center md:hidden">
        <span
          className={`cursor-pointer hover:text-black ease-in-out duration-500 ${
            lang === "ar" ? "border-l-2" : "border-r-2"
          } px-3`}
        >
          {t("BecomeSeller")}
        </span>
        <span className="mx-5 cursor-pointer hover:text-black ease-in-out duration-500">
          {t("LoginToSeller")}
        </span>
        <span className="cursor-pointer hover:text-black ease-in-out duration-500">
          {t("HotLine")} <bdi>+01 112 352 566</bdi>
        </span>
      </div>
    </div>
  );
}

export default TopHeader;
