import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Index() {
  const { t } = useTranslation("user");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <div className="flex items-center justify-between xs:block my-10 xs:my-5">
        <h2 className="text-lg font-semibold xs:text-center">
          {t("CompareProducts")}
        </h2>
        <button className="xs:my-2 xs:w-full bg-rose-200 text-red-600 transition-all duration-500 font-semibold hover:bg-red-600 hover:text-white py-2 px-4 rounded-full text-sm">
          {t("ResetCompareList")}
        </button>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 my-10 xs:my-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="border rounded-md" key={i}>
            <div className="p-3 border-b mb-3">
              <span className="text-zinc-400 text-sm">{t("Name")}</span>
              <h4 className="font-semibold hover:text-red-600 mt-3 cursor-pointer">
                HP Stream 9VK97UA#ABA 14 inches HD(1366x768) Display
              </h4>
            </div>
            <div className="p-3 border-b mb-3">
              <span className="text-zinc-400 text-sm mb-3">{t("Image")}</span>
              <Image
                priority
                src={`/imgs/compared/${i}.png`}
                className="h-auto w-full object-cover"
                height={1000}
                width={1000}
                alt=""
              />
            </div>
            <div className="p-3 border-b mb-3">
              <span className="text-zinc-400 text-sm mb-3">{t("Price")}</span>
              <div className="my-1 flex items-center">
                <h3 className="text-sm line-through text-zinc-400 font-semibold">
                  9000 {t("EGP")}
                </h3>
                <h5 className="text-red-600 font-semibold text-lg mx-3">
                  6000 {t("EGP")}
                </h5>
              </div>
            </div>
            <div className="p-3 border-b mb-3">
              <span className="text-zinc-400 text-sm mb-3">
                {t("Category")}
              </span>
              <h3 className="font-semibold my-1">Computer & Accessories</h3>
            </div>
            <div className="p-3 border-b mb-3">
              <span className="text-zinc-400 text-sm mb-3">{t("Brand")}</span>
              <h3 className="font-semibold my-1">HP</h3>
            </div>
            <div className="p-3">
              <button className="p-2 rounded-md bg-black text-white font-semibold w-full flex items-center justify-center">
                <AiOutlineShoppingCart size="1.2rem" />
                <span className="mx-2">{t("AddToCart")}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
