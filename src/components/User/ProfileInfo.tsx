import useTranslation from "next-translate/useTranslation";

function ProfileInfo() {
  const { t } = useTranslation("user");
  return (
    <div className="p-2 border rounded-md">
      <h4 className="font-semibold text-lg mb-3">{t("BasicInfo")}</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center justify-between mb-3 xs:flex-col xs:items-start">
          <label className="xs:mb-1 xs:font-semibold" htmlFor="user-name">
            {t("YourName")}
          </label>
          <input
            className="outline-0 border w-3/4 p-2 rounded-md xs:w-full"
            placeholder={t("YourName")}
          />
        </div>
        <div className="flex items-center justify-between mb-3 xs:flex-col xs:items-start">
          <label className="xs:mb-1 xs:font-semibold" htmlFor="user-email">
            {t("YourEmail")}
          </label>
          <input
            className="outline-0 border w-3/4 p-2 rounded-md xs:w-full"
            placeholder={t("YourEmail")}
            type="email"
          />
        </div>
        <div className="flex items-center justify-between mb-3 xs:flex-col xs:items-start">
          <label className="xs:mb-1 xs:font-semibold" htmlFor="user-phone">
            {t("YourPhone")}
          </label>
          <input
            className="outline-0 border w-3/4 p-2 rounded-md xs:w-full"
            placeholder={t("YourPhone")}
          />
        </div>
        <div className="flex items-center justify-between mb-3 xs:flex-col xs:items-start">
          <label className="xs:mb-1 xs:font-semibold" htmlFor="user-name">
            {t("YourPhoto")}
          </label>
          <div className="flex items-center w-3/4 border rounded-md xs:w-full">
            <button type="button" className="bg-neutral-200 p-2 min-w-[70px]">
              {t("Browse")}
            </button>
            <div className="flex-1 p-2">{t("ChoosePhoto")}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3 xs:flex-col xs:items-start">
          <label className="xs:mb-1 xs:font-semibold" htmlFor="password">
            {t("YourPassword")}
          </label>
          <input
            className="outline-0 border w-3/4 p-2 rounded-md xs:w-full"
            type="password"
            placeholder={t("YourPassword")}
          />
        </div>
        <div className="flex items-center justify-between mb-3 xs:flex-col xs:items-start">
          <label
            className="xs:mb-1 xs:font-semibold"
            htmlFor="confirm-password"
          >
            {t("ConfirmPassword")}
          </label>
          <input
            className="outline-0 border w-3/4 p-2 rounded-md xs:w-full"
            type="password"
            placeholder={t("ConfirmPassword")}
          />
        </div>
        <button className="p-2 w-full bg-red-600 text-white font-semibold rounded-md">
          {t("UpdateProfile")}
        </button>
      </form>
    </div>
  );
}

export default ProfileInfo;
