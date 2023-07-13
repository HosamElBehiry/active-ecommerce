import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function SaveCoupon() {
  const { t } = useTranslation("home");
  return (
    <div className="bg-slate-800 py-14 lg:py-8">
      <div className="text-white w-5/6 md:w-full mx-auto">
        <div className="flex items-center justify-between lg:block">
          <div className="flex items-center lg:mb-5 md:block md:text-center">
            <Image
              height={1000}
              width={1000}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src="/svg/coupon.svg"
              className="object-fill h-auto w-auto md:mx-auto"
              alt=""
            />
            <div className="mx-3 flex-1">
              <h3 className="font-semibold text-[2.5rem] leading-none mb-3 lg:mx-20 md:mx-0 md:text-3xl sm:text-2xl whitespace-nowrap xs:whitespace-normal">
                {t("SaveCoupon")}
              </h3>
              <p className="text-zinc-400 text-xl sm:text-base lg:mx-5 md:mx-0">
                {t("HugeDiscount")}
              </p>
            </div>
          </div>
          <button className="lg:block lg:mx-auto rounded-full py-3 px-5 bg-zinc-600 border-2 hover:bg-white hover:text-zinc-600 transition-all duration-500">
            {t("ViewAllCoupons")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaveCoupon;
