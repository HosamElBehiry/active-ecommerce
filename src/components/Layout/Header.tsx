import { AiOutlineSearch, AiFillHeart, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { Actions } from "@/interfaces/Layout.interface";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import UserAuth from "./UserAuth";

function Header(props: Actions) {
  const { t, lang } = useTranslation("common");
  return (
    <header className="text-zinc-500 flex items-center justify-between w-5/6 xs:w-11/12 mx-auto py-3 bg-white">
      <div className="flex items-center">
        <AiOutlineMenu
          onClick={() => props.setToggle(true)}
          className="hidden md:block cursor-pointer"
          size="1.5rem"
        />
        <Image
          src="/imgs/active-ecommerce-logo.png"
          className="md:mx-4 h-auto w-[270px] xs:w-[200px]"
          height={100}
          width={270}
          priority
          alt=""
        />
      </div>
      <AiOutlineSearch
        size="1.5rem"
        className="hidden md:block cursor-pointer mx-4 text-end"
      />
      <div className="w-[400px] lg:w-1/2 relative md:hidden">
        <input
          placeholder={t("IamShoppingFor")}
          className="w-full outline-none py-2 px-4 border rounded-3xl"
        />
        <AiOutlineSearch
          size="1.3rem"
          className={`absolute top-1/2 -translate-y-1/2 ${
            lang === "en" ? "right-2" : "left-2"
          }`}
        />
      </div>
      <div className="flex items-center md:hidden">
        <Link href="#">
          <MdOutlineCompareArrows size="1.5rem" />
        </Link>
        <Link href="#" className="mx-5">
          <AiFillHeart size="1.5rem" />
        </Link>
        <Link href="#" className="lg:hidden">
          <IoNotifications size="1.5rem" />
        </Link>
      </div>
      <UserAuth media="lg:hidden" size="3rem" padding="p-2" />
    </header>
  );
}

export default Header;
