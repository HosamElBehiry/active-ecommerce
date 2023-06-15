import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";

function BottomMenu() {
  const { t } = useTranslation("common");
  return (
    <div className="hidden lg:block text-zinc-700 fixed z-10 bottom-4 xs:bottom-0 left-1/2 xs:left-0 xs:w-full -translate-x-1/2 xs:translate-x-0 bg-white shadow-xl rounded-full xs:rounded-none p-2 border">
      <ul className="flex items-center justify-between xs:m-0 xs:p-0 xs:text-xs">
        <li className="px-4 xs:px-0 flex flex-col items-center whitespace-nowrap">
          <AiOutlineHome size="1.3rem" />
          <span className="mt-1">{t("Home")}</span>
        </li>
        <li className="px-4 xs:px-0 flex flex-col items-center whitespace-nowrap">
          <BiCategory size="1.3rem" />
          <span className="mt-1">{t("Categories")}</span>
        </li>
        <li className="px-4 xs:px-0 flex flex-col items-center whitespace-nowrap">
          <AiOutlineShoppingCart size="1.3rem" />
          <span className="mt-1">{t("Cart")}</span>
        </li>
        <li className="px-4 xs:px-0 flex flex-col items-center whitespace-nowrap">
          <IoNotificationsOutline size="1.3rem" />
          <span className="mt-1">{t("Notifications")}</span>
        </li>
        <li className="px-4 xs:px-0 flex flex-col items-center whitespace-nowrap">
          <AiOutlineUser size="1.3rem" />
          <span className="mt-1">{t("MyAccount")}</span>
        </li>
      </ul>
    </div>
  );
}

export default BottomMenu;
