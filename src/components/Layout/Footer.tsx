import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import useTranslation from "next-translate/useTranslation";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-[#212129] py-10 border-b border-zinc-500">
      <div className="w-5/6 xs:w-11/12 mx-auto">
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-white">
            <Image
              src="/imgs/active-ecommerce-logo.png"
              className="h-10 w-64"
              height={1000}
              width={1000}
              alt="Footer Logo"
            />
            <h6 className="my-4">{t("CompleteSystem")}</h6>
            <h1 className="font-bold my-4">{t("AskSubscribe")}</h1>
            <form
              className="flex items-center justify-between flex-wrap 2xs:block"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="mb-3 flex-1 p-2 outline-none border border-zinc-600 bg-[#212129] 2xs:block 2xs:w-full"
                placeholder={t("EmailAddress")}
                type="email"
              />
              <button
                type="submit"
                className="mb-3 bg-red-600 border border-red-600 text-white rounded-sm py-2 px-6 mx-2 2xs:mx-0 2xs:w-full"
              >
                {t("Subscribe")}
              </button>
            </form>
          </div>
          <div className="text-zinc-500 mt-5">
            <h2 className="uppercase font-semibold">{t("FollowUs")}</h2>
            <div className="flex items-center text-white gap-2 my-3 mx-2">
              <div className="bg-blue-800 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                <FaFacebookF size="1.2rem" />
              </div>
              <div className="bg-fuchsia-700 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                <AiOutlineInstagram size="1.2rem" />
              </div>
              <div className="bg-blue-500 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                <AiOutlineTwitter size="1.2rem" />
              </div>
              <div className="bg-red-700 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                <AiOutlineYoutube size="1.2rem" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                <TiSocialLinkedin size="1.2rem" />
              </div>
            </div>
            <h2 className="uppercase font-semibold my-3">{t("MobileApps")}</h2>
            <div className="flex items-center justify-between">
              <Image
                src="/imgs/footer/google-play.png"
                className="transition-all duration-500 hover:scale-105 cursor-pointer h-auto w-[120px]"
                height={1000}
                width={1000}
                alt="Google Play"
              />
              <Image
                src="/imgs/footer/app-store.png"
                className="transition-all duration-500 hover:scale-105 cursor-pointer h-auto w-[120px] mx-4"
                height={1000}
                width={1000}
                alt="App Store"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
