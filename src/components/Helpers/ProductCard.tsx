import Image from "next/image";
import NumberFormat from "@/constants/Fotmatter";
import Styles from "@/styles/site/product-card.module.css";
import useTranslation from "next-translate/useTranslation";
import { memo } from "react";
import { ProductCardProps } from "@/interfaces/Product.interface";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import Link from "next/link";

const ProductCard = (props: ProductCardProps) => {
  const { t, lang } = useTranslation("common");
  return (
    <section className={Styles.productContainer}>
      <div className="border p-4 hover:border-red-600 relative">
        <div className="absolute top-5 -right-0 invisible">
          {!props.isWishList ? (
            <div className="mb-2 bg-white shadow-md p-2 hover:bg-red-600 hover:text-white text-zinc-400">
              <AiFillHeart size="1.2rem" />
            </div>
          ) : (
            <div className="mb-2 bg-white shadow-md p-2 text-red-600">
              <AiFillHeart size="1.2rem" />
            </div>
          )}
          <div className="bg-white shadow-md p-2 hover:bg-red-600 hover:text-white text-zinc-400">
            <MdCompareArrows size="1.2rem" />
          </div>
        </div>
        <div
          className={`flex ${lang === "ar" ? "justify-end" : "justify-start"}`}
        >
          <span className="bg-red-600 rounded-sm text-sm text-white px-2">
            {lang === "ar" && <span>%</span>}
            <span>{NumberFormat[lang].format(20)}</span>
            {lang === "en" && <span>%</span>}
          </span>
        </div>
        <div className="h-[200px] w-full max-w-[300px] mx-auto">
          <Link href={`/product/${props.i}`}>
            <Image
              src={`/imgs/featured-products/${props.i}.${
                props.i === 6 ||
                props.i === 14 ||
                props.i === 20 ||
                props.i === 22 ||
                props.i === 25 ||
                props.i === 26
                  ? "jpg"
                  : "png"
              }`}
              className="object-fill h-full"
              height={1000}
              width={1000}
              alt=""
            />
          </Link>
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

export default memo(ProductCard);
