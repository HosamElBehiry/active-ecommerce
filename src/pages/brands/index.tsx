import BreadCrumb from "@/helpers/BreadCrumb";
import Data from "@/json/brands.json";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function Brands() {
  const { t } = useTranslation("common");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <BreadCrumb title={t("All Brands")} current={t("All Brands")} />
      <div className="grid grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 2xs:grid-cols-1 mb-6">
        {Data.All.map((brand, i) => (
          <div
            key={i}
            className="border p-3 hover:bg-white hover:shadow-2xl transition-all duration-700 cursor-pointer"
          >
            <Image
              src={`/imgs/brands/${brand.img}`}
              height={1000}
              width={1000}
              className="h-[80px] w-auto mx-auto object-fill"
              alt=""
            />
            <h6 className="text-center text-lg my-3 font-bold">{brand.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
