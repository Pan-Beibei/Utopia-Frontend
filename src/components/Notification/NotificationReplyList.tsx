import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import NotificationReply from "./NotificationReply";
import { useTranslation } from "react-i18next";

import {
  updateNotificationsStatus,
  NotificationResponse,
  deleteNotification,
} from "../../services/api/notification";
import { useNotifications } from "../../hooks/useNotificationsHook";
import {
  getNotificationCount,
  resetNotificationCount,
} from "../../services/state/userSlice";
import { StyledLoading } from "@/components/ui/Loading";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1.5rem;

  justify-content: flex-start;
  overflow: hidden;
  overflow-y: auto;
  max-height: 55rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Webkit browsers in WeChat */
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
`;

function NotificationReplyList() {
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState<NotificationResponse[]>(
    []
  );
  const notificationCount = useSelector(getNotificationCount);
  const { t } = useTranslation();

  const {
    isError,
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useNotifications();

  console.log("hasNextPage: ", hasNextPage);

  useEffect(() => {
    if (data) {
      setNotifications(data.pages.flatMap((page) => page.notifications));
    }
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("inView");
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleDelete = useCallback(
    (id: string) => {
      console.log("handleDelete: ", id);
      deleteNotification(id)
        .then((res) => {
          if (res.code === "success") {
            toast.success("删除成功");
            setNotifications((prev) => prev.filter((item) => item.id !== id));
            queryClient.invalidateQueries("notifications");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(`删除失败${err}`);
        });
    },
    [queryClient]
  );

  //更新服务器所有评论类型的消息通知状态
  useEffect(() => {
    if (notificationCount === 0) return;
    updateNotificationsStatus()
      .then((res) => {
        if (res.code === "success") {
          console.log("消息通知已读");
          dispatch(resetNotificationCount());
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, [notificationCount, dispatch]);

  if (isError) return <div>error</div>;
  if (isLoading) return <div>loading...</div>;

  if (notifications.length === 0) {
    return <h3>{t("personalCenter.replyMeNoMessage")}</h3>;
  }

  return (
    <StyledContainer>
      {notifications.map((notification, index) => {
        return (
          <NotificationReply
            key={index}
            notification={notification}
            handleDelete={handleDelete}
          />
        );
      })}
      <StyledLoading ref={ref}>
        {isFetchingNextPage && "Loading..."}
      </StyledLoading>
    </StyledContainer>
  );
}

export default NotificationReplyList;
