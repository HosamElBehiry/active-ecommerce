import UserLayout from "@/components/User/UserLayout";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function Index() {
  const { t } = useTranslation("user");
  return (
    <UserLayout>
      <h1 className="font-semibold mb-3 text-xl">
        {t("ConversationWith")}{" "}
        <span className="text-red-600 mx-1">Fillon Asset Store</span>
      </h1>
      <div className="border rounded-md max-h-screen overflow-y-auto">
        <ul className="p-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <li key={i} className="p-4 mb-2 border-b last:border-0">
              <div className="flex items-center mb-3">
                <Image
                  src={!!(i % 2) ? "/imgs/user/1.png" : "/imgs/vendor/1.png"}
                  className="h-12 w-12 rounded-full"
                  height={1000}
                  width={1000}
                  alt="Your Img !"
                />
                <div className="mx-3">
                  <h4 className="text-lg font-semibold">
                    {!!(i % 2) ? "Paul K. Jensen" : "Fillon Asset Store"}
                  </h4>
                  <h6 className="text-zinc-400 text-sm">14.02.2021 02:15:02</h6>
                </div>
              </div>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sint itaque illo doloremque et quas magnam sed rerum corporis
                nulla fugiat possimus nisi, temporibus voluptates consequatur
                accusamus ipsam nostrum quo?
              </p>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-3 sticky bottom-0 bg-white">
          <form onSubmit={(e) => e.preventDefault()}>
            <textarea
              className="border w-full h-20 outline-0 p-2 rounded-sm"
              placeholder={t("WriteMessage")}
            ></textarea>
            <div className="flex items-center justify-end">
              <button className="py-2 px-6 rounded-md bg-red-600 text-white font-semibold 2xs:w-full">
                {t("SendMessage")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </UserLayout>
  );
}

export default Index;
