import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

function Description() {
  const [active, setActive] = useState("description");
  const { t } = useTranslation("product");
  return (
    <div className="border rounded-sm p-5 my-4">
      <ul className="flex items-center">
        <li
          onClick={() => setActive("description")}
          className={`cursor-pointer font-semibold text-lg pb-1 ${
            active === "description" && "border-b-[3px] border-red-600"
          }`}
        >
          {t("Description")}
        </li>
        <li
          onClick={() => setActive("video")}
          className={`cursor-pointer font-semibold text-lg pb-1 ${
            active === "video" && "border-b-[3px] border-red-600"
          } mx-10`}
        >
          {t("Video")}
        </li>
      </ul>
      {active === "description" ? (
        <div className="my-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center flex-wrap xs:block">
              <div className="w-1/2 sm:flex-1 xs:w-full border border-neutral-300 p-1.5 bg-gray-200">
                Brand, Seller, or Collection Name{" "}
              </div>
              <div className="w-1/2 sm:w-auto xs:w-full xs:my-0.5 border p-1.5">
                Fossil
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-4">
          <video className="w-full h-64" controls>
            <source src="https://www.youtube.com/watch?v=fIw0914lSoo&ab_channel=CashFlow" />
            This Browser doesnot support This Tag
          </video>
        </div>
      )}
    </div>
  );
}

export default Description;
