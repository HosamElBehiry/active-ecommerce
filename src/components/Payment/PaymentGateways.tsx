import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai";

function PaymentGateways() {
  const [active, setActive] = useState(1);
  const [agree, setAgree] = useState(false);
  const { t } = useTranslation("payment");
  return (
    <div className="col-span-8 md:col-span-12 p-3 border rounded-sm">
      <h3 className="font-semibold text-lg mb-3">{t("AdditionalInfo")}</h3>
      <textarea
        className="w-full h-36 border rounded-md p-3 focus:border-red-600 outline-0 mb-5"
        placeholder={t("AdditionalInfo")}
      ></textarea>
      <h3 className="font-semibold text-lg mb-3">{t("SelectPaymentOption")}</h3>
      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 2xs:grid-cols-1 gap-4 mb-4">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22,
        ].map((i) => (
          <div
            className={`border rounded-md p-3 cursor-pointer ${
              active === i && "border-red-600"
            }`}
            key={i}
            onClick={() => setActive(i)}
          >
            <Image
              src={`/imgs/payment/${i}.png`}
              className="h-20 w-full max-w-[150px] object-cover mx-auto rounded-sm"
              height={1000}
              width={1000}
              alt="Payment Img !"
            />
            <h4 className="font-semibold text-center mt-2">Payment {i}</h4>
          </div>
        ))}
      </div>
      <div className="py-6 flex flex-col items-center justify-center bg-red-100 rounded-md">
        <h5 className="text-zinc-500 mb-3">
          {t("OrWhiteBalance")} :{" "}
          <span className="font-semibold text-black">1,703.300 {t("EGP")}</span>
        </h5>
        <button className="bg-red-600 py-3 px-5 sm:p-3 rounded-sm text-white font-semibold">
          {t("PayWallet")}
        </button>
      </div>
      <div className="my-4 flex">
        <div
          className="h-4 w-4 border rounded-sm relative mt-1"
          id="agree-terms-condition"
          onClick={() => setAgree(!agree)}
        >
          {agree && <AiOutlineCheck size="0.9rem" className="text-red-600" />}
        </div>
        <label
          htmlFor="agree-terms-condition"
          className="mx-2 cursor-pointer"
          onClick={() => setAgree(!agree)}
        >
          {t("Agree")}{" "}
          <span className="text-red-600 font-semibold text-lg sm:text-base">
            {t("TermsPrivacy")}
          </span>
        </label>
      </div>
      <div className="flex items-center justify-between col-span-12 flex-wrap 2xs:block 2xs:text-center">
        <Link
          href="/"
          className="pt-3 font-semibold text-red-600 col-span-10 flex items-center 2xs:justify-center"
        >
          <AiOutlineArrowLeft size="1.2rem" />
          <span className="mx-1">{t("ReturnShop")}</span>
        </Link>
        <Link
          href="/payment/success"
          className="inline-block py-2 px-5 h-fit font-semibold bg-red-600 text-white rounded-md 2xs:my-2"
        >
          {t("CompleteOrder")}
        </Link>
      </div>
    </div>
  );
}

export default PaymentGateways;
