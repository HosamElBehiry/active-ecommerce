import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AiFillHeart,
  AiOutlineHome,
  AiOutlineMinusCircle,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";

function Aside() {
  const { t } = useTranslation("user");
  const { pathname, push } = useRouter();
  return (
    <aside className="border p-3 rounded-md col-span-4 lg:hidden h-fit">
      <div className="py-4 flex flex-col items-center justify-between border-b">
        <Image
          src="/imgs/user/1.png"
          className="h-[55px] w-[55px] object-cover rounded-full mb-2"
          height={1000}
          width={1000}
          alt=""
        />
        <h3 className="font-semibold text-lg">Paul K. Jensen</h3>
        <h6 className="text-zinc-500 text-sm">208-295-8053</h6>
      </div>
      <ul className="py-3 border-b">
        <li
          className={`hover:bg-rose-50 ${
            pathname === "/user/dashboard" && "bg-rose-50"
          } text-zinc-700 py-2 rounded-full mb-2`}
        >
          <button
            onClick={() => push("/user/dashboard")}
            className="whitespace-nowrap flex items-center w-1/2 mx-auto"
          >
            <AiOutlineHome size="1.3rem" />
            <span className="mx-2 font-semibold">{t("Dashboard")}</span>
          </button>
        </li>
        <li
          className={`hover:bg-rose-50 ${
            pathname === "/user/purchased-history" && "bg-rose-50"
          } text-zinc-700 py-2 rounded-full mb-2`}
        >
          <button
            onClick={() => push("/user/purchased-history")}
            className="whitespace-nowrap flex items-center w-1/2 mx-auto"
          >
            <AiOutlineProfile size="1.3rem" />
            <span className="mx-2 font-semibold">{t("PurchaseHistory")}</span>
          </button>
        </li>
        <li
          className={`hover:bg-rose-50 ${
            pathname === "/user/wishlist" && "bg-rose-50"
          } text-zinc-700 py-2 rounded-full mb-2`}
        >
          <button
            onClick={() => push("/user/wishlist")}
            className="whitespace-nowrap flex items-center w-1/2 mx-auto"
          >
            <AiFillHeart size="1.3rem" />
            <span className="mx-2 font-semibold">{t("WishLists")}</span>
          </button>
        </li>
        <li
          className={`hover:bg-rose-50 ${
            pathname === "/user/profile" && "bg-rose-50"
          } text-zinc-700 py-2 rounded-full mb-2`}
        >
          <button
            onClick={() => push("/user/profile")}
            className="whitespace-nowrap flex items-center w-1/2 mx-auto"
          >
            <AiOutlineUser size="1.3rem" />
            <span className="mx-2 font-semibold">{t("ManageAccount")}</span>
          </button>
        </li>
        <li
          className={`hover:bg-rose-50 ${
            pathname === "" && "bg-rose-50"
          } text-zinc-700 py-2 rounded-full mb-2`}
        >
          <button
            onClick={() => push("")}
            className="whitespace-nowrap flex items-center w-1/2 mx-auto"
          >
            <AiOutlineMinusCircle size="1.3rem" />
            <span className="mx-2 font-semibold">{t("DelMyAccount")}</span>
          </button>
        </li>
      </ul>
      <button
        onClick={() => push("")}
        className="my-2 bg-red-600 text-white w-full rounded-full p-2 font-semibold"
      >
        {t("LogOut")}
      </button>
    </aside>
  );
}

export default Aside;
