import ProductCard from "@/components/Helpers/ProductCard";
import Aside from "@/components/User/Aside";
import useTranslation from "next-translate/useTranslation";

function Index() {
  const { t } = useTranslation("user");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-5">
      <div className="grid grid-cols-12 gap-4">
        <Aside />
        <div className="col-span-8 lg:col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 mb-4">
            <h2 className="font-semibold text-xl">{t("WishLists")}</h2>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div className="col-span-4 sm:col-span-6 xs:col-span-12" key={i}>
              <ProductCard i={i} isWishList />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
