import UserLayout from "@/components/User/UserLayout";
import useTranslation from "next-translate/useTranslation";

function Index() {
  const { t } = useTranslation("user");
  return (
    <UserLayout>
      <div className="border p-3 rounded-md">
        <h2 className="font-semibold text-2xl">{t("AllNotifications")}</h2>
        <ul className="py-2 max-h-[80vh] overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <li key={i} className="border-b last:border-0 py-3 last:pb-0">
              <p className="mb-1">
                Your Order:
                <span className="mx-0.5 text-red-600">
                  20220912-10085522
                </span>{" "}
                has been Delivered
              </p>
              <h6 className="text-sm text-zinc-500">
                September 12 2022, 12:09 am
              </h6>
            </li>
          ))}
        </ul>
        <button className="bg-red-600 text-white p-2 rounded-md w-full">
          Load More
        </button>
      </div>
    </UserLayout>
  );
}

export default Index;
