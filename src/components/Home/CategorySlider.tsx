import Image from "next/image";
import Styles from "@/styles/site/home.module.css";
import Category from "@/json/category.json";
import Slider from "@/json/slider.json";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";

function CategorySlider() {
  const { lang } = useTranslation();
  return (
    <div className="w-5/6 md:w-full mx-auto flex justify-between">
      <ul className="lg:hidden w-[270px] overflow-auto text-zinc-700 h-[490px] shadow">
        {Category.Home.map((cat, i) => (
          <li
            key={i}
            className="hover:bg-rose-50 border-b p-3 flex items-center"
          >
            <Image
              src={cat.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-[15px]"
              height={15}
              width={15}
              alt=""
            />
            <span className="mx-2 ease-in-out duration-300 hover:px-2 whitespace-nowrap">
              {lang === "en" ? cat.name.en : cat.name.ar}
            </span>
          </li>
        ))}
      </ul>
      <Swiper loop className={`flex-1 ${Styles.mySwiper}`}>
        {Slider.Home.map((s, i) => (
          <SwiperSlide key={i}>
            <div className={Styles.imgContainer}>
              <Image
                src={s}
                priority
                className="object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
