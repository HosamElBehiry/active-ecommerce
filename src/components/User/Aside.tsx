import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineMinusCircle,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";

function Aside() {
  const { t } = useTranslation("user");
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
        <li className="bg-rose-50 text-zinc-700 py-2 rounded-full mb-2">
          <Link href="" className="flex items-center justify-center">
            <AiOutlineHome size="1.3rem" />
            <span className="mx-2 font-semibold">{t("Dashboard")}</span>
          </Link>
        </li>
        <li className="hover:bg-rose-50 text-zinc-700 py-2 rounded-full mb-2">
          <Link href="" className="flex items-center justify-center">
            <AiOutlineProfile size="1.3rem" />
            <span className="mx-2 font-semibold">{t("PurchaseHistory")}</span>
          </Link>
        </li>
        <li className="hover:bg-rose-50 text-zinc-700 py-2 rounded-full mb-2">
          <Link href="" className="flex items-center justify-center">
            <AiOutlineUser size="1.3rem" />
            <span className="mx-2 font-semibold">{t("ManageAccount")}</span>
          </Link>
        </li>
        <li className="hover:bg-rose-50 text-zinc-700 py-2 rounded-full mb-2">
          <Link href="" className="flex items-center justify-center">
            <AiOutlineMinusCircle size="1.3rem" />
            <span className="mx-2 font-semibold">{t("DelMyAccount")}</span>
          </Link>
        </li>
      </ul>
      <button className="my-2 bg-red-600 text-white w-full rounded-full p-2 font-semibold">
        {t("LogOut")}
      </button>
    </aside>
  );
}

export default Aside;
