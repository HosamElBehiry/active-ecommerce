import Link from "next/link";
import { Layout } from "@/interfaces/Layout.interface";
import { AiOutlineUser } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";

function UserAuth(props: Layout) {
  const {t, lang} = useTranslation('common')
  return (
    <div
      className={`flex items-center text-[13px] hover:text-red-600 ${props.media}`}
    >
      <AiOutlineUser
        size={props.size}
        className={`border rounded-full hover:shadow-md ${props.padding}`}
      />
      <Link href="#" className={`text-zinc-500 hover:text-red-600 px-4 ${lang === 'en' ? "border-r" : "border-l"}`}>
        {t('Login')}
      </Link>
      <Link href="#" className="text-zinc-500 hover:text-red-600 px-4">
        {t('Register')}
      </Link>
    </div>
  );
}

export default UserAuth;
