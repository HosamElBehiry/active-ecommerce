import Aside from "@/components/Helpers/Aside";
import ProductCard from "@/components/Helpers/ProductCard";

function Index() {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <div className="my-6 grid grid-cols-12 gap-5">
        <Aside />
        <div className="col-span-9 lg:col-span-12">
          <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
            {[21, 22, 23, 24, 25, 26].map((i) => (
              <ProductCard key={i} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
