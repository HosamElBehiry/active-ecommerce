import Image from "next/image";
import NumberFormat from "@/constants/Fotmatter";
import Styles from "@/styles/site/product-card.module.css";
import useTranslation from "next-translate/useTranslation";
import { ProductCardProps } from "@/interfaces/Product.interface";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";

const ProductCard = ({ i }: ProductCardProps) => {
  const { t, lang } = useTranslation("common");
  return (
    <section className={Styles.productContainer}>
      <div className="border p-4 hover:border-red-600 relative">
        <div className="absolute top-5 -right-7 invisible">
          <div className="mb-2 bg-white shadow-md p-2 hover:bg-red-600 hover:text-white text-zinc-400">
            <AiFillHeart size="1.2rem" />
          </div>
          <div className="bg-white shadow-md p-2 hover:bg-red-600 hover:text-white text-zinc-400">
            <MdCompareArrows size="1.2rem" />
          </div>
        </div>
        <span className="bg-red-600 rounded-sm text-sm text-white px-2">
          {lang === "ar" && <span>%</span>}
          <span>{NumberFormat[lang].format(20)}</span>
          {lang === "en" && <span>%</span>}
        </span>
        <div className="h-[200px] w-full">
          <Image
            src={`/imgs/featured-products/${i}.${
              i === 6 ||
              i === 14 ||
              i === 20 ||
              i === 22 ||
              i === 25 ||
              i === 26
                ? "jpg"
                : "png"
            }`}
            className="object-fill h-full"
            height={1000}
            width={1000}
            alt=""
          />
        </div>
        <div className="bg-white rounded-sm text-white p-2 invisible flex items-center justify-center">
          <AiOutlineShoppingCart size="1.4rem" />
          <span className="mx-2">{t("AddToCart")}</span>
        </div>
        <p className="line-clamp-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          labore placeat dolor! Asperiores nobis odit officia rerum at
          accusantium ipsam.
        </p>
        <h6 className="text-red-600 text-center font-semibold my-2">
          {NumberFormat[lang].format(6000)} {t("EGP")}
        </h6>
      </div>
    </section>
  );
};

export default ProductCard;
