import { useTranslation } from "react-i18next";

function NotificationLikeList() {
  const { t } = useTranslation();

  console.log("LikeList");

  return <div>{t("personalCenter.expectFunction")}</div>;
}

export default NotificationLikeList;
