import Image from "next/image";
import { SliderBreakPoints } from "@/constants/BreakPoints";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import type { Swiper as SwiperProps } from "swiper";
import { useState } from "react";
import * as Interafce from "@/interfaces/Home.interface";

function Slider(props: Interafce.Slider) {
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5 relative h-[180px]">
      <button
        onClick={() => my_swiper.slidePrev()}
        className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white p-2 rounded-sm"
      >
        <MdKeyboardArrowLeft size="1.3rem" />
      </button>
      <Swiper
        onInit={(ev) => set_my_swiper(ev)}
        loop
        dir="ltr"
        spaceBetween={50}
        breakpoints={SliderBreakPoints}
        className="h-[180px]"
      >
        {props.imgs.map((img) => (
          <SwiperSlide className="overflow-hidden" key={img}>
            <Image
              src={`/imgs/ads/${img}.png`}
              className="h-full object-fill hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              width={1000}
              height={1000}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => my_swiper.slidePrev()}
        className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white p-2 rounded-sm"
      >
        <MdKeyboardArrowRight size="1.3rem" />
      </button>
    </div>
  );
}

export default Slider;
