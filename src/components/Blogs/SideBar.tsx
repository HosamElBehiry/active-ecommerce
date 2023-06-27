import { AiOutlineSearch } from "react-icons/ai";
import Categories from "@/json/category.json";
import RecentPosts from "./RecentPosts";
import useTranslation from "next-translate/useTranslation";

function SideBar() {
  const { t, lang } = useTranslation("blogs");
  return (
    <aside className="my-4 w-[270px] lg:hidden">
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
              <input type="checkbox" id={String(i + 1)} />{" "}
              <label className="mx-2 cursor-pointer" htmlFor={String(i + 1)}>
                {lang === "en" ? blog.en : blog.ar}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <RecentPosts responsive={false} />
    </aside>
  );
}

export default SideBar;
