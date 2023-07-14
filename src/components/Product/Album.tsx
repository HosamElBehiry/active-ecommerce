import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

function Album() {
  return (
    <div className="col-span-5 lg:col-span-12">
      <Image
        src="/imgs/product/1.jpg"
        className="h-auto w-full border lg:hidden"
        height={1000}
        width={1000}
        alt="Main Img!"
      />
      <div className="my-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          modules={[Autoplay]}
          loop={true}
          dir="ltr"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1201: {
              slidesPerView: 3,
            },
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/imgs/product/${i}.jpg`}
                className="h-36 lg:h-auto w-full object-cover border p-1 rounded-sm"
                height={1000}
                width={1000}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Album;
