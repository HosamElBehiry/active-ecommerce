import { BlogProps } from "@/interfaces/Blog.interface";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Blogs from "@/json/blogs.json";

function RecentPosts(props: BlogProps) {
  const { t, lang } = useTranslation("blogs");
  return (
    <div
      className={`my-4 border rounded-sm p-2 ${
        props.responsive ? "hidden lg:block" : "block"
      }`}
    >
      <h4 className="font-semibold text-lg">{t("RecentPosts")}</h4>
      <ul
        className={`mt-4 ${
          props.responsive && "grid grid-cols-2 gap-4 xs:grid-cols-1"
        }`}
      >
        {Blogs.Recents.map((recent, i) => (
          <li className="flex my-2 overflow-hidden" key={i}>
            <Image
              src={`/imgs/blogs/aside/${recent.img}`}
              className="h-[95px] w-[95px] rounded-sm object-cover"
              height={1000}
              width={1000}
              alt=""
            />
            <div className="mx-2">
              <h4 className="line-clamp-2 font-semibold transition-all duration-500 hover:text-red-600 cursor-pointer">
                {recent.title}
              </h4>
              <h6 className="text-zinc-500 text-sm my-1">
                {new Date(recent.date).toDateString()}
              </h6>
              <h5 className="text-blue-500 text-sm">
                {recent.category[lang === "en" ? "en" : "ar"]}
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentPosts;
