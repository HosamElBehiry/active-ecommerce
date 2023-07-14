import { FeaturedCategoriesBreakPoints } from "@/constants/BreakPoints";
import Image from "next/image";
import Link from "next/link";
import type { Swiper as SwiperProps } from "swiper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

function FeaturedCategories() {
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <h2 className="flex items-center justify-between mb-4">
        <span className="font-semibold text-2xl xs:text-xl">
          {t("FeaturedCategories")}
        </span>
        <Link
          href="/category"
          className="flex items-center text-blue-500 font-semibold text-xs my-1"
        >
          {t("ViewAll")}
        </Link>
      </h2>
      <div className="relative">
        <button
          type="button"
          onClick={() => my_swiper.slidePrev()}
          className="hidden lg:block absolute rounded-full z-10 shadow-lg top-1/2 -right-4 bg-white -translate-y-1/2 border"
        >
          <MdKeyboardArrowRight size="2rem" />
        </button>
        <Swiper
          loop
          dir={lang === "en" ? "ltr" : "rtl"}
          className="w-[99%] mx-auto"
          onInit={(ev) => set_my_swiper(ev)}
          breakpoints={FeaturedCategoriesBreakPoints}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SwiperSlide key={i}>
              <div className="border">
                <Image
                  src={`/imgs/featured-categories/${i}.${
                    i === 3 ? "jpg" : "png"
                  }`}
                  className="h-[120px] w-[150px] mx-auto object-fill"
                  priority
                  height={1000}
                  width={1000}
                  alt=""
                />
                <p className="text-center font-bold my-2">
                  {lang === "en" ? "Category" : "القسم"} {i}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => my_swiper.slideNext()}
          type="button"
          className="hidden lg:block absolute rounded-full z-10 shadow-lg top-1/2 -left-4 bg-white -translate-y-1/2 border"
        >
          <MdKeyboardArrowLeft size="2rem" />
        </button>
      </div>
    </div>
  );
}

export default FeaturedCategories;
