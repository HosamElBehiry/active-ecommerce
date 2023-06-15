import Image from "next/image";

function SingleSlider() {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-14 md:my-5 overflow-hidden">
      <Image
        src="/imgs/single-slider/1.png"
        className="h-[300px] w-full object-fill hover:scale-105 transition-all duration-700"
        height={1000}
        width={1000}
        alt=""
      />
    </div>
  );
}

export default SingleSlider;
