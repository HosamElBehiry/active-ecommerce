import FeaturedProducts from "@/components/Home/FeaturedProducts";
import { StoreProps } from "@/interfaces/Vendors.interface";
import { GetServerSideProps } from "next";
import Data from "@/json/vendors.json";
import List from "@/components/Vendors/Store/List";
import Logo from "@/components/Vendors/Store/Logo";
import Follow from "@/components/Vendors/Store/Follow";

function Store(props: StoreProps) {
  return (
    <section>
      <List />
      <div className="border-t border-b">
        <div className="w-5/6 xs:w-11/12 mx-auto py-5">
          <div className="flex items-center justify-between md:flex-col">
            <Logo data={props.data} />
            <Follow />
          </div>
        </div>
      </div>
      <div className="my-10">
        <FeaturedProducts
          title="NewProducts"
          data={[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]}
        />
      </div>
    </section>
  );
}

export default Store;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = Data.Vendors.find((_, i) => params?.store === String(i + 1));
  return {
    props: {
      data,
    },
  };
};
