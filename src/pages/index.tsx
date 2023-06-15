import Ads from "@/components/Home/TodayDeal";
import CategorySlider from "@/components/Home/CategorySlider";
import FlashSale from "@/components/Home/FlashSale";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Slider from "@/components/Home/Slider";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import SingleSlider from "@/components/Home/SingleSlider";
import AuctionProducts from "@/components/Home/AuctionProducts";
import SaveCoupon from "@/components/Home/SaveCoupon";
import TopBrands from "@/components/Home/TopBrands";

export default function Home() {
  return (
    <>
      <CategorySlider />
      <FlashSale />
      <Ads />
      <FeaturedProducts
        title="FeaturedCategories"
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      />
      <Slider imgs={[7, 8, 9]} />
      <FeaturedCategories />
      <SingleSlider />
      <FeaturedProducts
        title="NewProducts"
        data={[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]}
      />
      <Slider imgs={[10, 11, 12]} />
      <AuctionProducts />
      <SaveCoupon />
      <TopBrands />
    </>
  );
}
