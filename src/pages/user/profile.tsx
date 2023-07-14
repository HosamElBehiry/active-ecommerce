import Address from "@/components/User/Address";
import ProfileInfo from "@/components/User/ProfileInfo";
import UserLayout from "@/components/User/UserLayout";
import useTranslation from "next-translate/useTranslation";

function Index() {
  const { t } = useTranslation("user");
  return (
    <UserLayout>
      <h2 className="font-semibold text-2xl mb-4">{t("ManageAccount")}</h2>
      <ProfileInfo />
      <Address />
    </UserLayout>
  );
}

export default Index;
