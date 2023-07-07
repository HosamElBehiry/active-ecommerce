import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function Index() {
  const { t } = useTranslation("common");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto flex items-center my-6 flex-col">
      <Image
        priority
        src="/svg/500.svg"
        className="h-80 xs:h-auto w-full"
        height={1000}
        width={1000}
        alt="Error 500 Img"
      />
      <h1 className="text-3xl 2xs:text-2xl font-semibold mt-2">
        {t("SomeThingWentWrong")}
      </h1>
      <p className="text-zinc-400 font-semibold my-1 text-center">
        {t("Error")}
      </p>
    </div>
  );
}

export default Index;
