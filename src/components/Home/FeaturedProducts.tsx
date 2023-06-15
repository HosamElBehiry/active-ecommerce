import {
  MdCompareArrows,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import type { Swiper as SwiperProps } from "swiper";
import Image from "next/image";
import NumberFormat from "@/constants/Fotmatter";
import useTranslation from "next-translate/useTranslation";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FeaturedBreakPoints } from "@/constants/BreakPoints";
import Styles from "@/styles/site/home.module.css";
import * as Interafce from "@/interfaces/Home.interface";

function FeaturedProducts(props: Interafce.Title) {
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);
  const { t, lang } = useTranslation("home");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <h2 className="flex items-center justify-between mb-4">
        <span className="font-semibold text-2xl xs:text-xl">
          {t(props.title)}
        </span>
        <span
          className="flex items-center text-zmy-1"
          style={{ direction: "ltr" }}
        >
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
          <SwiperSlide key={i} className={` h-full ${Styles.featuredProduct}`}>
            <div className="border p-4 hover:border-red-600">
              <div className="absolute top-5 -right-5 invisible">
                <div className="mb-2 bg-white shadow-md p-2 hover:bg-red-600 hover:text-white text-zinc-400">
                  <AiFillHeart size="1.2rem" />
                </div>
                <div className="bg-white shadow-md p-2 hover:bg-red-600 hover:text-white text-zinc-400">
                  <MdCompareArrows size="1.2rem" />
                </div>
              </div>
              <span className="bg-red-600 rounded-sm text-sm text-white px-2">
                {lang === "ar" && <span>%</span>}
                <span>{NumberFormat[lang].format(20)}</span>
                {lang === "en" && <span>%</span>}
              </span>
              <div className="h-[200px] w-full">
                <Image
                  src={`/imgs/featured-products/${i}.${
                    i === 6 ||
                    i === 14 ||
                    i === 20 ||
                    i === 22 ||
                    i === 25 ||
                    i === 26
                      ? "jpg"
                      : "png"
                  }`}
                  className="object-fill h-full"
                  height={1000}
                  width={1000}
                  alt=""
                />
              </div>
              <div className="bg-white rounded-sm text-white p-2 invisible flex items-center justify-center">
                <AiOutlineShoppingCart size="1.4rem" />
                <span className="mx-2">{t("AddToCart")}</span>
              </div>
              <p className="line-clamp-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                labore placeat dolor! Asperiores nobis odit officia rerum at
                accusantium ipsam.
              </p>
              <h6 className="text-red-600 text-center font-semibold my-2">
                {NumberFormat[lang].format(6000)} {t("EGP")}
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedProducts;
