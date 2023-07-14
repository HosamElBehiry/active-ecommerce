import UserLayout from "@/components/User/UserLayout";
import Styles from "@/styles/site/dashboard.module.css";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import {
  AiOutlineDollarCircle,
  AiOutlineHeart,
  AiOutlinePicture,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsSuitClub } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

function Index() {
  const { t } = useTranslation("user");
  return (
    <UserLayout>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div
          className={`row-span-2 col-span-2 sm:col-span-3 flex flex-col justify-between px-6 pt-6 pb-2 ${Styles.dashboardContainer}`}
        >
          <div className="pb-5 border-dashed w-fit border-b">
            <h3 className="text-zinc-200 text-lg font-semibold">
              {t("WalletBalance")}
            </h3>
            <h2 className="mt-2 text-3xl text-white font-extrabold">
              1,703.300 {t("EGP")}
            </h2>
          </div>
          <div className="mt-5">
            <h3 className="text-zinc-200 font-semibold">
              {t("LastRecharge")} 05.06.2022
            </h3>
            <h2 className="mt-2 text-xl text-white font-bold">
              12.150 {t("EGP")}
            </h2>
          </div>
          <button className="border border-zinc-300 hover:bg-zinc-600 transition-all duration-500 p-3 rounded-full text-white flex items-center justify-center my-3">
            <AiOutlinePlus size="1.3rem" />
            <span className="mx-2">{t("RechargeWallet")}</span>
          </button>
        </div>
        <div className="bg-red-600 text-white p-3 sm:col-span-3">
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-rose-200 font-semibold">
                <AiOutlineDollarCircle size="1.3rem" />
              </div>
              <div className="mx-2">
                <h3 className="mb-1 line-clamp-1">{t("TotalExpenditure")}</h3>
                <h5 className="font-semibold text-lg line-clamp-1">
                  12,541.900 {t("EGP")}
                </h5>
              </div>
            </div>
            <Link href="" className="flex items-center mt-6">
              <RiArrowRightSLine size="1.1rem" />
              <span className="mx-2 text-sm">{t("ViewOrderHistory")}</span>
            </Link>
          </div>
        </div>
        <div className="bg-yellow-300 text-white p-3 sm:col-span-3">
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-rose-100 font-semibold">
                <BsSuitClub size="1.3rem" />
              </div>
              <div className="mx-2">
                <h3 className="mb-1">{t("TotalClubPoints")}</h3>
                <h5 className="font-semibold text-lg">10985</h5>
              </div>
            </div>
            <Link href="" className="flex items-center flex-row-reverse mt-6">
              <RiArrowRightSLine size="1.1rem" />
              <span className="mx-2 text-sm">{t("ConvertClubPoints")} </span>
            </Link>
          </div>
        </div>
        <div className="border rounded-md sm:col-span-3">
          <ul className="">
            <li className="flex items-center justify-between border-b p-2 mb-3">
              <div className="bg-red-600 p-2 rounded-full text-white">
                <AiOutlineShoppingCart size="1.6rem" />
              </div>
              <div className="flex flex-col items-center flex-1 line-clamp-1">
                <span className="mb-2 font-semibold text-xl">0</span>
                <span className="text-zinc-500">{t("ProdInCart")}</span>
              </div>
            </li>
            <li className="flex items-center justify-between border-b p-2 mb-3">
              <div className="bg-blue-400 p-2 rounded-full text-white">
                <AiOutlineHeart size="1.6rem" />
              </div>
              <div className="flex flex-col items-center flex-1 line-clamp-1">
                <span className="mb-2 font-semibold text-xl">7</span>
                <span className="text-zinc-500">{t("ProdWishList")}</span>
              </div>
            </li>
            <li className="flex items-center justify-between p-2">
              <div className="bg-green-600 p-2 rounded-full text-white">
                <AiOutlinePicture size="1.6rem" />
              </div>
              <div className="flex flex-col items-center flex-1 line-clamp-1">
                <span className="mb-2 font-semibold text-xl">30</span>
                <span className="text-zinc-500">{t("TotalOrders")}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="border rounded-md p-2 col-span-2 flex flex-col justify-evenly sm:col-span-3 sm:p-6">
          <h3 className="font-semibold text-lg">{t("DefShipping")}</h3>
          <p className="text-zinc-600 sm:my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa
            ut atque, hic eaque recusandae adipisci. Enim nobis eum sed, dolorem
            rerum similique assumenda iure? Molestias perspiciatis accusamus
            reprehenderit porro!
          </p>
          <button className="bg-zinc-800 text-white font-semibold p-3 w-full rounded-full flex items-center justify-center">
            <AiOutlinePlus size="1.2rem" />
            <span className="mx-2">{t("AddNewAddress")}</span>
          </button>
        </div>
      </div>
    </UserLayout>
  );
}

export default Index;
