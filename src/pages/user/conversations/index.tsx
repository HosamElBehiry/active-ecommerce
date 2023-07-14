import UserLayout from "@/components/User/UserLayout";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

function Index() {
  const { push } = useRouter();
  const { t } = useTranslation("user");
  return (
    <UserLayout>
      <h2 className="text-2xl font-semibold">{t("Conversations")}</h2>
      <p className="text-zinc-500 mb-6">{t("ConversationDescription")}</p>
      <ul className="flex flex-col justify-between">
        {[1, 2, 3, 4].map((i) => (
          <li
            key={i}
            className="p-3 border rounded-md flex justify-between xs:flex-col mb-4 hover:bg-zinc-100 cursor-pointer"
            onClick={() => push(`/user/conversations/${i}`)}
          >
            <div className="flex xs:mb-3">
              <Image
                src="/imgs/vendor/1.png"
                className="h-12 w-12 rounded-full"
                height={1000}
                width={1000}
                alt="Seller Img!"
              />
              <div className="mx-3">
                <h4 className="font-semibold mb-1">Fillon Asset Store</h4>
                <h6 className="text-zinc-500 text-sm">25.07.2022 10:33:07</h6>
              </div>
            </div>
            <div className="w-1/2 xs:w-[97%] xs:mx-auto">
              <h3 className="font-semibold line-clamp-1 hover:text-red-600 cursor-pointer">
                Jacket Blue Plain Washington
              </h3>
              <h6 className="text-zinc-500 line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, odit earum dicta expedita minima nulla modi,
                laboriosam blanditiis voluptas natus voluptatum possimus
                quibusdam unde cumque reiciendis nihil maxime sunt soluta
                facilis at quis quod. Perferendis optio ullam maiores quam rem?
              </h6>
            </div>
          </li>
        ))}
      </ul>
    </UserLayout>
  );
}

export default Index;
