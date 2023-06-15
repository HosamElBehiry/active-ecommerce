import { Links } from "@/constants/Header";
import { IoIosArrowDown } from "react-icons/io";
import Cart from "./Cart";
import Link from "next/link";
import Styles from "@/styles/site/layout.module.css";
import useTranslation from "next-translate/useTranslation";

function Menu() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-red-600 text-white cursor-pointer md:hidden">
      <div className="w-5/6 mx-auto flex items-center justify-between">
        <div className="w-[270px] bg-red-700 flex items-center justify-between p-3 lg:hidden">
          <Link href="#">{t("CategoriesSeeAll")}</Link>
          <IoIosArrowDown size="1.5rem" />
        </div>
        <ul
          className={`mx-3 lg:mx-0 flex items-center justify-between w-[600px] lg:w-full overflow-x-auto ${Styles.menuOptions}`}
        >
          {Links.map(({ link, title }, i) => (
            <li
              key={i}
              className="px-3 py-2 whitespace-nowrap hover:bg-red-700"
            >
              <Link href={link}>{t(title)}</Link>
            </li>
          ))}
        </ul>
        <Cart />
      </div>
    </div>
  );
}

export default Menu;
