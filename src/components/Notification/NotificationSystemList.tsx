import { useTranslation } from "react-i18next";

function NotificationSystemList() {
  const { t } = useTranslation();
  console.log("SystemList");

  return <div>{t("personalCenter.expectFunction")}</div>;
}

export default NotificationSystemList;
