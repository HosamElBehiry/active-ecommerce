import Address from "@/components/User/Address";
import Aside from "@/components/User/Aside";
import ProfileInfo from "@/components/User/ProfileInfo";
import useTranslation from "next-translate/useTranslation";

function Index() {
  const { t } = useTranslation("user");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-5">
      <div className="grid grid-cols-12 gap-4">
        <Aside />
        <div className="col-span-8 lg:col-span-12">
          <h2 className="font-semibold text-2xl mb-4">{t("ManageAccount")}</h2>
          <ProfileInfo />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default Index;
