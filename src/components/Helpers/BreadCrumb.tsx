import { BreadCrumbProps } from "@/interfaces/BreadCrumb.interface";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

function BreadCrumb(props: BreadCrumbProps) {
  const { t } = useTranslation("common");
  return (
    <div className="flex items-center justify-between md:block md:items-stretch md:text-center my-6">
      <h3 className="font-semibold text-xl">{props.title}</h3>
      <div className="flex items-center md:items-stretch md:block">
        <Link href="/" className="text-zinc-500">
          {t("Home")}
        </Link>
        <span className="mx-2"> / </span>
        <span>
          {`"`}
          {props.current}
          {`"`}
        </span>
      </div>
    </div>
  );
}

export default BreadCrumb;
