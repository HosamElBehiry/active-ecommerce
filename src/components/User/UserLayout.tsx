import { AsideProps } from "@/interfaces/User.interface";
import { useRouter } from "next/router";
import { Links } from "@/constants/User";
import { Fragment, useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import DeleteAccount from "./DeleteAccount";

function UserLayout(props: AsideProps) {
  const { t } = useTranslation("user");
  const [active, setActive] = useState(false);
  const { pathname, push } = useRouter();
  return (
    <Fragment>
      <div className="w-5/6 xs:w-11/12 mx-auto my-5">
        <div className="grid grid-cols-12 gap-4">
          <aside className="border p-3 rounded-md col-span-4 lg:hidden h-fit">
            <div className="py-4 flex flex-col items-center justify-between border-b">
              <Image
                src="/imgs/user/1.png"
                className="h-[55px] w-[55px] object-cover rounded-full mb-2"
                height={1000}
                width={1000}
                alt=""
              />
              <h3 className="font-semibold text-lg">Paul K. Jensen</h3>
              <h6 className="text-zinc-500 text-sm">208-295-8053</h6>
            </div>
            <ul className="py-3 border-b">
              {Links.map((info) => (
                <li
                  key={info.title}
                  className={`hover:bg-rose-50 ${
                    pathname === info.link && "bg-rose-50"
                  } text-zinc-700 py-2 rounded-full mb-2`}
                >
                  <button
                    onClick={() =>
                      info.link ? push(info.link) : setActive(!active)
                    }
                    className="whitespace-nowrap flex items-center w-1/2 mx-auto"
                  >
                    {info.icon}
                    <span className="mx-2 font-semibold">{t(info.title)}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="my-2 bg-red-600 text-white w-full rounded-full p-2 font-semibold">
              {t("LogOut")}
            </button>
          </aside>
          <div className="col-span-8 lg:col-span-12">{props.children}</div>
        </div>
      </div>
      {active && <DeleteAccount {...{ active, setActive }} />}
    </Fragment>
  );
}

export default UserLayout;
