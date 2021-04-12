import { AiOutlineClose } from "react-icons/ai";
import { Actions } from "@/interfaces/Layout.interface";
import { Links } from "@/constants/Header";
import useTranslation from "next-translate/useTranslation";
import UserAuth from "./UserAuth";
import Link from "next/link";

function Offcanvas(props: Actions) {
  const { t } = useTranslation("common");
  return (
    <div
      className={
        props.toggle
          ? "md:fixed z-20 top-0 left-0 w-screen flex text-sm"
          : "hidden"
      }
    >
      <ul className="bg-white shadow-lg min-h-screen w-[320px]">
        <li className="p-5">
          <AiOutlineClose
            size="1.2rem"
            className="text-red-600"
            onClick={() => props.setToggle(false)}
          />
        </li>
        <li className="px-3 pb-3 border-b">
          <UserAuth size="2rem" padding="p-1" />
        </li>
        {Links.map(({ link, title }, i) => (
          <li key={i} className={`font-semibold ${!i ? "p-5" : "px-5 pb-5"}`}>
            <Link
              href={link}
              onClick={() =>
                setTimeout(() => {
                  props.setToggle(false);
                }, 1000)
              }
            >
              {t(title)}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="h-screen w-[calc(100vw-320px)]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>
    </div>
  );
}

export default Offcanvas;
