import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";

function Forgot() {
  const { t, lang } = useTranslation("auth");
  const [email, setEmail] = useState(false);
  return (
    <div className="w-[570px] mx-auto sm:w-full border">
      <div className="p-10 sm:px-2 my-10 mx-3">
        <div className="mb-5">
          <h3 className="font-bold text-3xl xs:text-2xl mb-2">
            {t("ForgotPassword")}
          </h3>
          <h5 className="text-zinc-500 sm:text-sm">{t("ForgotAskEmail")}</h5>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type={email ? "email" : "text"}
            placeholder={t(email ? "Email" : "Phone")}
            className="border outline-none w-full rounded-md p-2"
          />
          <button
            type="button"
            onClick={() => setEmail(!email)}
            className={`text-red-600 w-full ${
              lang === "en" ? "text-right" : "text-left"
            } text-sm font-semibold my-1`}
          >
            {t(email ? "UsePhoneInstead" : "UseEmailInstead")}
          </button>
          <button
            type="submit"
            className="mt-4 mb-2 bg-red-600 text-white p-3 rounded-md w-full"
          >
            {t("SendPasswordResetLink")}
          </button>
          <Link href="/auth/login" className="text-zinc-500">
            {t("BackToLogin")}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
