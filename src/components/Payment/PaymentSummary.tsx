import useTranslation from "next-translate/useTranslation";
import { Fragment } from "react";

function PaymentSummary() {
  const { t, lang } = useTranslation("payment");
  return (
    <div className="col-span-4 md:col-span-12 p-3 border rounded-sm h-fit">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg sm:text-base">{t("Summary")}</h4>
        <div className="bg-red-600 text-white rounded-sm px-1 py-0.5 text-sm min-w-[60px] text-center">
          2 {t("Items")}
        </div>
      </div>
      <div className="flex items-center justify-between my-1.5">
        <h4 className="font-semibold text-lg sm:text-base">
          {t("ClubPoints")}
        </h4>
        <div className="bg-orange-500 text-white rounded-sm px-1 py-0.5 text-sm min-w-[60px] text-center">
          0
        </div>
      </div>
      <div className="grid grid-cols-12 mt-6">
        <div className="col-span-8 border-b pb-2 text-zinc-500 text-sm">
          {t("Product")}
        </div>
        <div
          className={`col-span-4 border-b pb-2 text-zinc-500 text-sm ${
            lang === "en" ? "text-right" : "text-left"
          }`}
        >
          {t("Total")}
        </div>
        {[1, 2, 3].map((i) => (
          <Fragment key={i}>
            <h4 className="col-span-8 border-b py-2 text-zinc-500 font-semibold sm:text-sm">
              Gerber Unisex-Baby Onesies Bodysuit Multi Pack × 1
            </h4>
            <div
              className={`col-span-4 border-b py-2 text-red-600 ${
                lang === "en" ? "text-right" : "text-left"
              } font-semibold`}
            >
              25000 {t("EGP")}
            </div>
          </Fragment>
        ))}
        <div className="col-span-8 mt-5 py-1 font-semibold">
          {t("SubTotal")}
        </div>
        <div
          className={`col-span-4 mt-5 py-1 text-red-600 ${
            lang === "en" ? "text-right" : "text-left"
          } font-semibold`}
        >
          75000 {t("EGP")}
        </div>
        <div className="col-span-8 py-1 font-semibold">{t("Tax")}</div>
        <div
          className={`col-span-4 py-1 text-red-600 ${
            lang === "en" ? "text-right" : "text-left"
          } font-semibold`}
        >
          0 {t("EGP")}
        </div>
        <div className="col-span-8 border-b pt-1 pb-2 font-semibold">
          {t("TotalShipping")}
        </div>
        <div
          className={`col-span-4 border-b pt-1 pb-2 text-red-600 ${
            lang === "en" ? "text-right" : "text-left"
          } font-semibold`}
        >
          0 {t("EGP")}
        </div>
        <div className="col-span-8 border-b py-4 font-semibold text-zinc-500">
          {t("Total")}
        </div>
        <div
          className={`col-span-4 border-b py-4 font-semibold text-red-600 ${
            lang === "en" ? "text-right" : "text-left"
          }`}
        >
          75000 {t("EGP")}
        </div>
        <div className="col-span-12 mt-3 flex items-center">
          <input
            className={`p-2 ${
              lang === "en" ? "rounded-l-md" : "rounded-r-md"
            } border outline-0 flex-1 w-3/4`}
            placeholder={t("CouponCode")}
          />
          <button
            className={`p-2 ${
              lang === "en" ? "rounded-r-md" : "rounded-l-md"
            } bg-red-600 border border-red-600 text-white font-semibold`}
          >
            {t("Apply")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
