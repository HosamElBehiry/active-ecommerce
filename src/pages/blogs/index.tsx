import { BsArrowRight } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import RecentPosts from "@/components/Blogs/RecentPosts";
import SideBar from "@/components/Blogs/SideBar";
import BreadCrumb from "@/components/Helpers/BreadCrumb";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import Blogs from "@/json/blogs.json";
import Offcanvas from "@/components/Blogs/Offcanvas";
import { useState } from "react";

function Index() {
  const { t, lang } = useTranslation("blogs");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto flex justify-between lg:block">
      <SideBar />
      <div className="flex-1 mx-2 lg:mx-0">
        <BreadCrumb title={t("Blogs")} current={t("Blogs")} />
        <div className="hidden lg:flex justify-center my-6">
          <FiFilter
            size="1.8rem"
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {Blogs.All.map((blog, i) => (
            <div className="border rounded-sm p-3" key={i}>
              <div className="overflow-hidden">
                <Image
                  src={`/imgs/blogs/aside/${blog.img}`}
                  className="h-[200px] w-full object-fill rounded-sm transition-all duration-500 hover:scale-105 cursor-pointer"
                  height={1000}
                  width={1000}
                  alt=""
                />
              </div>
              <h2 className="my-2 font-semibold line-clamp-2">{blog.title}</h2>
              <h5 className="text-zinc-500 line-clamp-3 text-sm">
                {blog.description}
              </h5>
              <div className="my-1.5 flex items-center justify-between">
                <h6 className="text-zinc-400 text-[14px]">
                  {new Date(blog.created_at).toDateString()}
                </h6>
                <h6 className="text-blue-500 text-[14px]">
                  {blog.category[lang === "en" ? "en" : "ar"]}
                </h6>
              </div>
              <button className="text-red-600 font-semibold text-lg flex items-center">
                <Link href="#" className="text-[15px]">
                  {t("ReadFullBlog")}
                </Link>
                <BsArrowRight
                  className={`mx-2 ${
                    lang === "en" ? "rotate-0" : "rotate-180"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <RecentPosts responsive={true} />
      <Offcanvas toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Index;
