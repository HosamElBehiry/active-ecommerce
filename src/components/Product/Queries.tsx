import useTranslation from "next-translate/useTranslation";

function Queries() {
  const { t } = useTranslation("product");
  return (
    <div className="border rounded-sm p-5">
      <h3 className="font-semibold mb-3 text-xl">{t("ProductQueries")}</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          className="w-full h-32 p-2 border rounded-sm outline-0"
          placeholder={t("WriteQuestion")}
        ></textarea>
        <button className="w-full bg-red-600 p-2 rounded-md text-white font-semibold">
          {t("SubmitAnswer")}
        </button>
      </form>
    </div>
  );
}

export default Queries;
