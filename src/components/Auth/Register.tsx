import { AuthProps } from "@/interfaces/Auth.interface";
import ThirdParty from "./ThirdParty";
import Link from "next/link";

function Register({ t }: AuthProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-3/4 xs:w-11/12 mx-auto"
    >
      <div className="my-2">
        <label
          htmlFor="fullname"
          className="font-semibold block mb-2 cursor-pointer"
        >
          {t("FullName")}
        </label>
        <input
          id="fullname"
          placeholder={t("FullName")}
          className="w-full border p-2 outline-none rounded-sm"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="phone"
          className="font-semibold block mb-2 cursor-pointer"
        >
          {t("Phone")}
        </label>
        <input
          id="phone"
          placeholder={t("Phone")}
          className="w-full border p-2 outline-none rounded-sm"
        />
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
      <div className="mb-3">
        <label
          htmlFor="confirm-password"
          className="font-semibold block mb-2 cursor-pointer"
        >
          {t("ConfirmPassword")}
        </label>
        <input
          id="confirm-password"
          type="password"
          placeholder={t("ConfirmPassword")}
          className="w-full border p-2 outline-none rounded-sm"
        />
      </div>
      <div className="flex mb-3">
        <input
          type="checkbox"
          className="self-start mt-1.5"
          id="agree-terms-condition"
        />
        <label htmlFor="agree-terms-condition" className="mx-2 cursor-pointer">
          {t("Agree")}{" "}
          <Link href="#" className="font-semibold text-sm text-red-600">
            {t("TermsConditions")}
          </Link>
        </label>
      </div>
      <button
        type="submit"
        className="bg-red-600 py-2 px-5 rounded-full text-white w-full my-3"
      >
        {t("Register")}
      </button>
      <h6 className="text-center text-zinc-500 text-sm">{t("LoginWith")}</h6>
      <ThirdParty />
      <h6 className="text-center text-zinc-500 text-sm">
        {t("DoHaveAccount")}
      </h6>
      <h3 className="text-center text-red-600 font-semibold text-lg">
        <Link href="/auth/login">{t("Login")}</Link>
      </h3>
    </form>
  );
}

export default Register;
