import Image from "next/image";
import { useState } from "react";
import { Grid, Pagination } from "swiper";
import { BsFillLightningFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlashSaleBreakPoints } from "@/constants/BreakPoints";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import type { Swiper as SwiperProps } from "swiper";
import NumberFormat from "@/constants/Fotmatter";
import Styles from "@/styles/site/home.module.css";
import useTranslation from "next-translate/useTranslation";

function FlashSale() {
  const { t, lang } = useTranslation("home");
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <h1 className="flex items-center mb-4">
        <span className="text-2xl xs:text-xl font-bold">{t("FlashSale")}</span>{" "}
        <BsFillLightningFill size="1.6rem" className="mx-3 text-yellow-400" />{" "}
      </h1>
      <div className="grid grid-cols-8 gap-2">
        <div
          className={`border relative col-span-3 sm:col-span-4 ${Styles.flashTimeContainer}`}
        >
          <Image
            src="/imgs/flash-sale/3_.png"
            className="object-fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            alt=""
          />
        </div>
        <div className="col-span-5 sm:col-span-4 relative">
          <button
            type="button"
            onClick={() => my_swiper.slidePrev()}
            className="absolute rounded-full z-10 shadow-lg top-1/2 right-0 bg-white -translate-y-1/2 border"
          >
            <MdKeyboardArrowRight size="2rem" />
          </button>
          <Swiper
            breakpoints={FlashSaleBreakPoints}
            onInit={(ev) => set_my_swiper(ev)}
            grid={{
              rows: 2,
              fill: "row",
            }}
            dir="ltr"
            spaceBetween={0}
            loop
            modules={[Grid, Pagination]}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <SwiperSlide className="border" key={i}>
                <div className={Styles.flashImgContainer}>
                  <Image
                    src={`/imgs/flash-sale/products/${i}.png`}
                    height={1000}
                    width={1000}
                    alt=""
                  />
                </div>
                <h6 className="text-center text-red-700 font-bold">
                  {NumberFormat[lang].format(1200)} {t("EGP")}
                </h6>
                <h6 className="text-center text-zinc-500 line-through font-bold">
                  {NumberFormat[lang].format(1600)} {t("EGP")}
                </h6>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => my_swiper.slideNext()}
            type="button"
            className="absolute rounded-full z-10 shadow-lg top-1/2 left-0 bg-white -translate-y-1/2 border"
          >
            <MdKeyboardArrowLeft size="2rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
