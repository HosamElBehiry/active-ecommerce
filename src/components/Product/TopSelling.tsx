import NumberFormat from "@/constants/Fotmatter";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function TopSelling() {
  const { t, lang } = useTranslation("product");
  return (
    <div className="col-span-4 lg:col-span-12 lg:order-2">
      <aside className="border p-4 rounded-sm">
        <h4 className="font-semibold mb-3 text-lg">{t("TopSelling")}</h4>
        <ul className="flex flex-col">
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              className="flex items-center pb-4 last:pb-0 border-b last:border-0 my-2"
            >
              <Image
                src="/imgs/featured-products/10.png"
                className="h-20 w-20 object-cover border rounded-sm"
                height={1000}
                width={1000}
                alt=""
              />
              <div className="mx-2">
                <h5 className="line-clamp-2 font-semibold mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium velit et sit veritatis, incidunt inventore ea ad
                  accusantium reprehenderit qui.
                </h5>
                <div className="flex items-center flex-wrap">
                  <h4 className="font-semibold text-red-600 mb-0">
                    {NumberFormat[lang].format(6000)} {t("EGP")}
                  </h4>
                  <h5 className="text-zinc-500 font-semibold text-sm line-through mx-1">
                    {NumberFormat[lang].format(8000)} {t("EGP")}
                  </h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default TopSelling;
