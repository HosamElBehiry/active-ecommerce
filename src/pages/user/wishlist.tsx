import ProductCard from "@/components/Helpers/ProductCard";
import UserLayout from "@/components/User/UserLayout";
import useTranslation from "next-translate/useTranslation";

function Index() {
  const { t } = useTranslation("user");
  return (
    <UserLayout>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 mb-4">
          <h2 className="font-semibold text-xl">{t("WishLists")}</h2>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div className="col-span-4 sm:col-span-6 xs:col-span-12" key={i}>
            <ProductCard i={i} isWishList />
          </div>
        ))}
      </div>
    </UserLayout>
  );
}

export default Index;
