import Link from "next/link";
import { AuthProps } from "@/interfaces/Auth.interface";
import { useState } from "react";
import ThirdParty from "./ThirdParty";

function Login({ t, lang }: AuthProps) {
  const [email, setEmail] = useState(false);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-3/4 xs:w-10/12 mx-auto"
    >
      <div className="my-2">
        <label
          htmlFor={email ? "email" : "phone"}
          className="font-semibold block mb-2 cursor-pointer"
        >
          {t(email ? "Email" : "Phone")}
        </label>
        <input
          id={email ? "email" : "phone"}
          placeholder={t(email ? "Email" : "Phone")}
          className="w-full border p-2 outline-none rounded-sm"
        />
        <button
          type="button"
          onClick={() => setEmail(!email)}
          className={`w-full text-red-600 ${
            lang === "en" ? "text-right" : "text-left"
          } font-semibold my-1`}
        >
          {t(email ? "UsePhoneInstead" : "UseEmailInstead")}
        </button>
      </div>
      <div className="mb-3">
        <label
          htmlFor="password"
          className="font-semibold block mb-2 cursor-pointer"
        >
          {t("Password")}
        </label>
        <input
          id="password"
          type="password"
          placeholder={t("Password")}
          className="w-full border p-2 outline-none rounded-sm"
        />
      </div>
      <div className="flex items-center justify-between text-zinc-500">
        <div className="flex items-center">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" className="mx-3 cursor-pointer">
            {t("RememberMe")}
          </label>
        </div>
        <Link href="/auth/forgot" className="underline">
          {t("ForgotPassword")}
        </Link>
      </div>
      <button
        type="submit"
        className="bg-red-600 py-2 px-5 rounded-full text-white w-full my-3"
      >
        {t("Login")}
      </button>
      <div className="my-3 flex items-center justify-center">
        <div className="flex items-center border">
          <div className="py-3 px-7">{t("CustomerAccount")}</div>
          <button type="button" className="py-3 px-7 bg-blue-400 text-white">
            {t("CopyCredentials")}
          </button>
        </div>
      </div>
      <h6 className="text-center text-zinc-500 text-sm">{t("LoginWith")}</h6>
      <ThirdParty />
      <h6 className="text-center text-zinc-500 text-sm">
        {t("DontHaveAccount")}
      </h6>
      <h3 className="text-center text-red-600 font-semibold text-lg">
        <Link href="/auth/register">{t("RegisterNow")}</Link>
      </h3>
    </form>
  );
}

export default Login;
