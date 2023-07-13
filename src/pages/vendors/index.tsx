import BreadCrumb from "@/components/Helpers/BreadCrumb";
import useTranslation from "next-translate/useTranslation";
import Data from "@/json/vendors.json";
import Vendor from "@/components/Helpers/Vendor";

function Vendors() {
  const { t } = useTranslation("vendors");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <BreadCrumb title={t("AllSellers")} current={t("Vendors")} />
      <div className="grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 my-6">
        {Data.Vendors.map((vendor, i) => (
          <Vendor key={i} data={vendor} />
        ))}
      </div>
    </div>
  );
}

export default Vendors;
