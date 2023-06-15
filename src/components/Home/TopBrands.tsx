import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";

function TopBrands() {
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <h2 className="flex items-center justify-between mb-4">
        <span className="font-semibold text-2xl xs:text-xl">
          {t("TopBrands")}
        </span>
        <Link
          href="#"
          className="flex items-center text-blue-500 font-semibold text-xs my-1"
        >
          {t("ViewAll")}
        </Link>
      </h2>
      <div className="grid grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 2xs:grid-cols-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className="border p-3 hover:bg-white hover:shadow-2xl transition-all duration-700 cursor-pointer"
          >
            <Image
              src={`/imgs/brands/${i}.jpg`}
              height={1000}
              width={1000}
              className="h-auto w-auto mx-auto object-fill"
              alt=""
            />
            <h6 className="text-center text-lg my-3 font-bold">
              {lang === "en" ? "Brand" : "براند"} {i}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBrands;
