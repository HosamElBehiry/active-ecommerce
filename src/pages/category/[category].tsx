import Aside from "@/components/Helpers/Aside";
import ProductCard from "@/components/Helpers/ProductCard";

function Index() {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <div className="my-6 grid grid-cols-12 gap-5">
        <Aside />
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ProductCard key={i} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
