import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperProps } from "swiper";
import Styles from "@/styles/site/home.module.css";
import NumberFormat from "@/constants/Fotmatter";
import useTranslation from "next-translate/useTranslation";
import { TodaysDeal } from "@/constants/BreakPoints";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function TodayDeal() {
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <Image
        src="/imgs/ads/1.png"
        className="h-[150px] w-full object-fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        width={1000}
        height={1000}
        alt=""
      />
      <div className={Styles.firstAd}>
        <Link
          href="#"
          className="block text-end mb-10 hover:text-yellow-600 ease-in-out duration-700"
        >
          {t("ViewAll")}
        </Link>
        <button
          onClick={() => my_swiper.slidePrev()}
          className="hidden lg:block absolute top-1/2 sm:left-1 left-7 -translate-y-1/2 rounded-full"
        >
          <MdKeyboardArrowLeft size="1.5rem" />
        </button>
        <Swiper
          className="w-10/12 sm:w-11/12 mx-auto h-full"
          dir="ltr"
          loop
          spaceBetween={50}
          breakpoints={TodaysDeal}
          onInit={(ev) => set_my_swiper(ev)}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <SwiperSlide key={i}>
              <div className="h-1/2">
                <Image
                  src={`/imgs/ads/${i + 1}.${!i ? "jpg" : "png"}`}
                  className="h-full w-full xs:h-[80px] xs:w-[80px] xs:mx-auto rounded-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
              <h6 className="text-center font-bold my-2">
                {NumberFormat[lang].format(1200)} {t("EGP")}
              </h6>
              <h6 className="text-center font-bold my-2 line-through text-zinc-500">
                {NumberFormat[lang].format(1600)} {t("EGP")}
              </h6>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => my_swiper.slideNext()}
          className="hidden lg:block absolute top-1/2 sm:right-1 right-7 -translate-y-1/2 rounded-full"
        >
          <MdKeyboardArrowRight size="1.5rem" />
        </button>
      </div>
    </div>
  );
}

export default TodayDeal;
