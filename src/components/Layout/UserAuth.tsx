import Link from "next/link";
import { Layout } from "@/interfaces/Layout.interface";
import { AiOutlineUser } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";

function UserAuth({ media, padding, size }: Layout) {
  const { t, lang } = useTranslation("common");
  return (
    <div
      className={`flex items-center text-[13px] hover:text-red-600 ${media}`}
    >
      <AiOutlineUser
        size={size}
        className={`border rounded-full hover:shadow-md ${padding}`}
      />
      <Link
        href="/auth/login"
        className={`text-zinc-500 hover:text-red-600 px-4 ${
          lang === "en" ? "border-r" : "border-l"
        }`}
      >
        {t("Login")}
      </Link>
      <Link
        href="/auth/register"
        className="text-zinc-500 hover:text-red-600 px-4"
      >
        {t("Register")}
      </Link>
    </div>
  );
}

export default UserAuth;
