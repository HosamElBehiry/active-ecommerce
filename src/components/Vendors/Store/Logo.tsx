import { VendorProps } from "@/interfaces/Vendors.interface";
import { AiFillStar } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function Logo(props: VendorProps) {
  const { t } = useTranslation("vendors");
  return (
    <div className="flex items-center 2xs:block">
      <Image
        src={`/imgs/vendor/${props.data.img}`}
        className="h-[70px] w-[70px] rounded-full border p-1 shadow-lg 2xs:mb-3 2xs:mx-auto"
        height={1000}
        width={1000}
        alt=""
      />
      <div className="mx-2 2xs:text-center">
        <h3 className="font-semibold mx-1 text-xl">{props.data.name}</h3>
        <div className="my-1 flex items-center 2xs:justify-center">
          {Array.from(Array(props.data.review).keys()).map((_, i) => (
            <AiFillStar key={i} className="text-orange-500" size="1.3rem" />
          ))}
          <span className="text-zinc-500 mx-2">
            {`(`} 1K {t("Review")} {`)`}
          </span>
        </div>
        <p className="text-zinc-500 text-sm">
          2574 Lincoln Street Pleasantville, NJ 08232
        </p>
      </div>
    </div>
  );
}

export default Logo;
