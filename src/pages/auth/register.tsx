import Register from "@/components/Auth/Register";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function AuthRegister() {
  const { t } = useTranslation("auth");
  return (
    <div className="w-3/4 md:w-5/6 xs:w-11/12 mx-auto">
      <div className="grid grid-cols-12 my-10">
        <div className="col-span-8 sm:col-span-12 border py-10">
          <div className="text-center">
            <h3 className="text-red-600 font-bold text-4xl xs:text-2xl">
              {t("CreateAnAccount")}
            </h3>
          </div>
          <Register {...{ t }} />
        </div>
        <div className="col-span-4 sm:col-span-12 border overflow-hidden">
          <Image
            src="/imgs/auth/register.png"
            className="object-cover h-full w-full hover:scale-105 transition-all duration-500"
            height={1000}
            width={1000}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;
