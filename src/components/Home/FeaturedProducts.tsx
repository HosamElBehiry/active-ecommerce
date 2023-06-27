import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import type { Swiper as SwiperProps } from "swiper";
import useTranslation from "next-translate/useTranslation";
import { FeaturedBreakPoints } from "@/constants/BreakPoints";
import * as Interafce from "@/interfaces/Home.interface";
import ProductCard from "@/components/Helpers/ProductCard";

function FeaturedProducts(props: Interafce.Title) {
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);
  const { t } = useTranslation("home");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <h2 className="flex items-center justify-between mb-4">
        <span className="font-semibold text-2xl xs:text-xl">
          {t(props.title)}
        </span>
        <span className="flex items-center text-zmy-1" dir="ltr">
          <MdKeyboardArrowLeft
            onClick={() => my_swiper.slidePrev()}
            size="1.5rem"
            className="cursor-pointer"
          />
          <MdKeyboardArrowRight
            onClick={() => my_swiper.slideNext()}
            size="1.5rem"
            className="cursor-pointer"
          />
        </span>
      </h2>
      <Swiper
        dir="ltr"
        className="w-[99%] mx-auto"
        loop
        onInit={(ev) => set_my_swiper(ev)}
        breakpoints={FeaturedBreakPoints}
      >
        {props.data.map((i) => (
          <SwiperSlide key={i}>
            <ProductCard i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedProducts;
