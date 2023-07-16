import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSad } from "react-icons/bi";
import Styles from "@/styles/site/layout.module.css";
import useTranslation from "next-translate/useTranslation";
import NumberFormat from "@/constants/Fotmatter";
import Link from "next/link";

function Cart() {
  const { t, lang } = useTranslation("common");
  return (
    <div
      className={`w-[200px] whitespace-nowrap p-3 bg-red-700 relative ${Styles.cartContainer} lg:hidden`}
    >
      <Link href="/cart" className="flex items-center">
        <AiOutlineShoppingCart size="1.7rem" />
        <span className="mx-3">
          {NumberFormat[lang].format(0)} {t("EGP")}
        </span>
        <span className="text-xs mt-2">
          ({NumberFormat[lang].format(0)} {t("Items")})
        </span>
        <div className="h-[100px] text-black shadow-md border absolute z-10 top-full left-0 bg-white w-full hidden flex-col items-center justify-center">
          <BiSad size="2rem" />
          <span>{t("CartEmpty")}</span>
        </div>
      </Link>
    </div>
  );
}

export default Cart;
