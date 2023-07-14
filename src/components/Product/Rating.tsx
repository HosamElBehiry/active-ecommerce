import useTranslation from "next-translate/useTranslation";
import { AiFillStar } from "react-icons/ai";

function Rating() {
  const { t } = useTranslation("product");
  return (
    <div className="border rounded-sm p-5">
      <h3 className="font-semibold mb-3 text-xl">{t("ReviewRatings")}</h3>
      <div className="border border-yellow-500 p-5 bg-yellow-50 flex items-center justify-between sm:block">
        <p className="flex 2xs:block 2xs:text-center">
          <span className="font-semibold text-3xl">0</span>
          <span className="mx-3 flex flex-wrap 2xs:justify-center self-end">
            {t("OutOf")} 5.0
            <span className="mx-1 flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <AiFillStar
                  key={i}
                  className="text-zinc-200 mr-0.5"
                  size="1.3rem"
                />
              ))}
            </span>
            (0 {t("Reviews")})
          </span>
        </p>
        <button className="bg-amber-400 text-white p-2 rounded-sm sm:w-full sm:my-2">
          {t("RateThisProduct")}
        </button>
      </div>
      <p className="pt-3 text-center text-zinc-500 text-lg">{t("NoReviews")}</p>
    </div>
  );
}

export default Rating;
