import Album from "@/components/Product/Album";
import Description from "@/components/Product/Description";
import Detail from "@/components/Product/Detail";
import Queries from "@/components/Product/Queries";
import Rating from "@/components/Product/Rating";
import TopSelling from "@/components/Product/TopSelling";
import UserActions from "@/components/Product/UserActions";

function Index() {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-6">
      <div className="grid grid-cols-12 gap-5">
        <Album />
        <div className="col-span-7 lg:col-span-12">
          <Detail />
          <UserActions />
        </div>
      </div>
      <div className="my-4 grid grid-cols-12 gap-5">
        <TopSelling />
        <div className="col-span-8 lg:col-span-12 lg:order-1">
          <Rating />
          <Description />
          <Queries />
        </div>
      </div>
    </div>
  );
}

export default Index;
