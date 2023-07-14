import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";

function Detail() {
  const { t } = useTranslation("product");
  return (
    <div className="border-b pb-3">
      <h3 className="font-semibold text-lg">
        Mens Machine Stainless Steel Quartz Chronograph Watch
      </h3>
      <div className="flex items-center my-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <AiFillStar key={i} className="text-zinc-300 mr-1" size="1.2rem" />
        ))}
        <span className="mx-3 text-zinc-500">(0 {t("Reviews")})</span>
      </div>
      <div className="flex items-center flex-wrap 2xs:block text-zinc-500">
        <button className="flex items-center">
          <AiOutlineHeart size="1.1rem" className="mt-0.5" />
          <span className="mx-2">{t("AddToWishlist")}</span>
        </button>
        <button className="flex items-center mx-5 2xs:mx-0 2xs:my-2">
          <MdOutlineCompareArrows size="1.1rem" className="mt-0.5" />
          <span className="mx-2">{t("AddToCompare")}</span>
        </button>
      </div>
      <div className="mt-4 flex items-center flex-wrap">
        <span className="text-zinc-500">{t("Brand")}</span>
        <span className="font-semibold mx-3">Rolex</span>
      </div>
      <div className="my-2 flex items-center 2xs:block">
        <h4 className="font-semibold">{t("InhouseProduct")}</h4>
        <button className="mx-5 2xs:mx-0 2xs:my-2 2xs:w-full flex items-center 2xs:justify-center bg-yellow-50 hover:bg-yellow-500 border border-yellow-500 text-yellow-500 hover:text-white duration-500 transition-all py-1.5 px-5 rounded-full 2xs:rounded-md text-sm">
          <BiConversation /> <span className="mx-2">{t("MessageSeller")}</span>
        </button>
      </div>
    </div>
  );
}

export default Detail;
