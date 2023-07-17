import Steps from "@/components/Payment/Steps";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { FcMoneyTransfer } from "react-icons/fc";

function Index() {
  const { t } = useTranslation("payment");
  return (
    <Steps step={5}>
      <div className="my-16 flex flex-col items-center justify-center text-emerald-600">
        <FcMoneyTransfer size="6rem" />
        <h2 className="mt-4 text-2xl font-bold">{t("ThankYou")}</h2>
        <h6 className="my-1 font-semibold">{t("PaymentDone")}</h6>
        <p className="text-zinc-400 mb-3 font-semibold">
          {t("PaymentDoneDescription")}
        </p>
        <Link
          href="/"
          className="flex items-center justify-center bg-emerald-600 text-white font-semibold p-3 rounded-full w-1/6 sm:w-1/3 xs:w-1/2 hover:bg-emerald-500 transition-all duration-500"
        >
          {t("Home")}
        </Link>
      </div>
    </Steps>
  );
}

export default Index;
