import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import { AuctionBreakPoints } from "@/constants/BreakPoints";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import type { Swiper as SwiperProps } from "swiper";
import NumberFormat from "@/constants/Fotmatter";

function AuctionProducts() {
  const { t, lang } = useTranslation("home");
  const [my_swiper, set_my_swiper] = useState({} as SwiperProps);

  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5">
      <h2 className="flex items-center justify-between mb-4">
        <span className="font-semibold text-2xl xs:text-xl">
          {t("AuctionProducts")}
        </span>
        <Link
          href="#"
          className="flex items-center text-blue-500 font-semibold text-xs my-1"
        >
          {t("ViewAll")}
        </Link>
      </h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="border col-span-4 lg:col-span-6 md:col-span-12 overflow-hidden">
          <Image
            src="/imgs/auction-products/auction-product-img.png"
            className="h-full object-fill w-full md:h-[500px] transition-all hover:scale-105 duration-500"
            alt=""
            height={1000}
            width={1000}
          />
        </div>
        <div className="border col-span-8 lg:col-span-6 md:col-span-12 relative">
          <button
            type="button"
            onClick={() => my_swiper.slidePrev()}
            className="hidden lg:block absolute rounded-full z-10 shadow-lg top-1/2 -right-4 bg-white -translate-y-1/2 border"
          >
            <MdKeyboardArrowRight size="2rem" />
          </button>
          <Swiper
            grid={{
              rows: 3,
              fill: "row",
            }}
            dir="ltr"
            className="h-full"
            spaceBetween={0}
            breakpoints={AuctionBreakPoints}
            loop
            onInit={(ev) => set_my_swiper(ev)}
            modules={[Grid, Pagination]}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SwiperSlide key={i} className="h-auto border">
                <div className="flex items-center h-full p-2">
                  <Image
                    src={`/imgs/auction-products/${i}.jpg`}
                    className="h-[130px] w-[130px] lg:h-[200px] lg:w-[200px] md:h-[130px] object-fill mx-3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    height={1000}
                    width={1000}
                    alt=""
                  />
                  <div className="flex flex-col justify-between h-auto md:w-[250px] md:mx-auto">
                    <h6>Lorem ipsum dolor sit.</h6>
                    <div className="flex flex-col my-2">
                      <span className="text-zinc-500">{t("StartingBid")}</span>
                      <h5 className="font-bold text-red-600">
                        {NumberFormat[lang].format(400)} {t("EGP")}
                      </h5>
                    </div>
                    <button className="bg-red-600 text-white rounded-md w-fit px-2 py-1">
                      {t("PlaceBid")}
                    </button>
                  </div>
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
    </div>
  );
}

export default AuctionProducts;
