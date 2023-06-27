import { Actions } from "@/interfaces/Layout.interface";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";
import Categories from "@/json/category.json";

function Offcanvas(props: Actions) {
  const { t, lang } = useTranslation("blogs");
  return (
    <div
      className={
        props.toggle
          ? "lg:fixed z-20 top-0 left-0 w-screen flex text-sm"
          : "hidden"
      }
    >
      <div className="w-[320px] bg-white">
        <div className="p-2 border-b flex items-center justify-between mb-4">
          <span className="font-semibold text-lg">{t("Filter")}</span>
          <AiOutlineClose
            size="1.2rem"
            onClick={() => props.setToggle(!props.toggle)}
          />
        </div>
        <div className="relative text-zinc-500">
          <div
            className={`absolute top-1/2 ${
              lang === "en" ? "right-2" : "left-2"
            } -translate-y-1/2`}
          >
            <AiOutlineSearch size="1.4rem" />
          </div>
          <input
            placeholder={t("Search")}
            className="outline-none border rounded-sm p-2 w-full"
          />
        </div>
        <div className="my-4 border rounded-sm p-2">
          <h4 className="font-semibold text-lg">{t("Categories")}</h4>
          <ul className="mt-4">
            {Categories.Blogs.map((blog, i) => (
              <li className="flex items-center my-2" key={i + 1}>
                <input type="checkbox" id={blog.ar} />{" "}
                <label className="mx-2 cursor-pointer" htmlFor={blog.ar}>
                  {lang === "en" ? blog.en : blog.ar}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="h-screen w-[calc(100vw-320px)]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>
    </div>
  );
}

export default Offcanvas;
