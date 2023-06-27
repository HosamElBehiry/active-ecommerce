import ProductCard from "@/helpers/ProductCard";
import Image from "next/image";

const Index = () => {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <div className="overflow-hidden my-6">
        <Image
          src="/imgs/ads/1.png"
          className="h-auto w-full object-cover transition-all cursor-pointer hover:scale-105 duration-500"
          height={1000}
          width={1000}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 my-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <ProductCard key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Index;
