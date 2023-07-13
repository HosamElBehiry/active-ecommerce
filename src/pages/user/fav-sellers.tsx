import Vendor from "@/components/Helpers/Vendor";
import Aside from "@/components/User/Aside";
import Data from "@/json/vendors.json";

function Index() {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-5">
      <div className="grid grid-cols-12 gap-4">
        <Aside />
        <div className="col-span-8 lg:col-span-12">
          <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            {Data.Vendors.slice(0, 8).map((vendor) => (
              <Vendor key={vendor.img} data={vendor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
