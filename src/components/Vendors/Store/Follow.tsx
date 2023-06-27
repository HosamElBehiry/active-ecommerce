import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

function Follow() {
  const { t, lang } = useTranslation("vendors");
  const [follow, setFollow] = useState(false);
  return (
    <div className="flex items-center md:my-4 md:justify-center sm:block md:w-full md:text-center">
      <div
        className={`${
          lang === "en" ? "border-r" : "border-l"
        } text-zinc-500 px-6 md:border-0 sm:px-0 2xs:text-center`}
      >
        <span className="my-1 text-sm">{t("MemberSince")}</span>
        <h5 className="font-semibold">
          {new Date("2022-12-04T10:50:44.419Z").toDateString()}
        </h5>
      </div>
      <div className="px-6 sm:my-4 sm:px-0">
        <button
          onClick={() => setFollow(!follow)}
          className={`${
            !follow ? "bg-red-600" : "bg-green-600"
          } text-white py-2 px-7 rounded-full flex items-center md:justify-center sm:w-full`}
        >
          {!follow ? (
            <AiOutlinePlus size="1.2rem" />
          ) : (
            <AiOutlineCheck size="1.2rem" />
          )}
          {!follow ? (
            <span className="mx-2">
              {t("FollowSeller")} {`(`}0{`)`}
            </span>
          ) : (
            <span className="mx-2">{t("UnFollowSeller")}</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Follow;
