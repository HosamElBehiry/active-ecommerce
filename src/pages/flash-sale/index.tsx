import BreadCrumb from "@/components/Helpers/BreadCrumb";
import Styles from "@/styles/site/flash-sale.module.css";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function Index() {
  const { t } = useTranslation("common");
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <BreadCrumb title={t("Flash Sale")} current={t("Flash Sale")} />
      <div className="grid grid-cols-12 gap-5 my-6">
        <div className="col-span-12 overflow-hidden">
          <Image
            src="/imgs/flash-sale/banner.png"
            priority
            className="h-auto w-full object-cover transition-all duration-500 hover:scale-105"
            height={1000}
            width={1000}
            alt=""
          />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`${Styles.flashCountContainer} relative col-span-4 md:col-span-6 sm:col-span-12 overflow-hidden`}
          >
            <section className="z-10 absolute top-5 left-1/2 -translate-x-1/2 w-3/4 mx-auto p-4 rounded-md flex items-center justify-between bg-white shadow">
              <div className="flex flex-col items-center justify-center rounded-full text-black">
                <span className="font-semibold">10</span>
                <span>Hrs</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-full text-black">
                <span className="font-semibold">45</span>
                <span>Min</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-full text-black">
                <span className="font-semibold">45</span>
                <span>Sec</span>
              </div>
            </section>
            <Image
              src={`/imgs/flash-sale/${i}_.png`}
              priority
              className="h-auto sm:h-full w-full object-cover transition-all duration-500 hover:scale-105"
              height={1000}
              width={1000}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
