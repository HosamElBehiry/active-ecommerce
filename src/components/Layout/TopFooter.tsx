import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function TopFooter() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[#dfdfe6] border-t">
      <div className="w-5/6 xs:w-full mx-auto grid grid-cols-4 md:grid-cols-2">
        <div className="flex items-center flex-col justify-center border-l md:border-b border-zinc-400 py-6">
          <Image
            src="/svg/terms-conditions.svg"
            className="h-auto w-auto object-fill"
            height={1000}
            width={1000}
            alt=""
          />
          <h5 className="my-2 font-semibold">{t("Terms_Conditions")}</h5>
        </div>
        <div className="flex items-center flex-col justify-center border-l md:border-b md:border-r border-zinc-400 py-6">
          <Image
            src="/svg/return-policy.svg"
            className="h-auto w-auto object-fill"
            height={1000}
            width={1000}
            alt=""
          />
          <h5 className="my-2 font-semibold">{t("Return_Policy")}</h5>
        </div>
        <div className="flex items-center flex-col justify-center border-l border-zinc-400 py-6">
          <Image
            src="/svg/support-policy.svg"
            className="h-auto w-auto object-fill"
            height={1000}
            width={1000}
            alt=""
          />
          <h5 className="my-2 font-semibold">{t("Support_Policy")}</h5>
        </div>
        <div className="flex items-center flex-col justify-center border-l border-r border-zinc-400 py-6">
          <Image
            src="/svg/privacy-policy.svg"
            className="h-auto w-auto object-fill"
            height={1000}
            width={1000}
            alt=""
          />
          <h5 className="my-2 font-semibold">{t("Privacy_Policy")}</h5>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
