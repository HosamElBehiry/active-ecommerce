import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

function List() {
  const { t, lang } = useTranslation("vendors");
  return (
    <ul className="flex items-center md:justify-center w-5/6 xs:w-11/12 xs:text-sm flex-wrap mx-auto">
      <li className={`my-4 ${lang === "en" ? "mr-6" : "ml-6"} font-semibold `}>
        <Link href="#">{t("StoreHome")}</Link>
      </li>
      <li
        className={`my-4 ${
          lang === "en" ? "mr-6" : "ml-6"
        } font-semibold text-zinc-500`}
      >
        <Link href="#">{t("TopSelling")}</Link>
      </li>
      <li
        className={`my-4 ${
          lang === "en" ? "mr-6" : "ml-6"
        } font-semibold text-zinc-500`}
      >
        <Link href="#">{t("Coupons")}</Link>
      </li>
      <li
        className={`my-4 ${
          lang === "en" ? "mr-6" : "ml-6"
        } font-semibold text-zinc-500`}
      >
        <Link href="#">{t("AllProducts")}</Link>
      </li>
    </ul>
  );
}

export default List;
