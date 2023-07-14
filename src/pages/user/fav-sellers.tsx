import Vendor from "@/components/Helpers/Vendor";
import UserLayout from "@/components/User/UserLayout";
import Data from "@/json/vendors.json";

function Index() {
  return (
    <UserLayout>
      <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {Data.Vendors.slice(0, 8).map((vendor) => (
          <Vendor key={vendor.img} data={vendor} />
        ))}
      </div>
    </UserLayout>
  );
}

export default Index;
