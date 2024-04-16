import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
// import CommentInteractiveButtons from "../Comment/CommentInteractiveButtons";
import { NotificationResponse } from "../../services/api/notification";
import { convertUTCToBeijingTime } from "../../utils/conversionTime";
import { NotificationEnum } from "../../types";
import { useFetchUser } from "../../hooks/useFetchUser";

const StyledNotificationReply = styled(BaseColumnFlex)`
  padding: 1rem 3rem;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
`;

const StyledFlexForHeader = styled(BaseFlex)`
  justify-content: space-between;
  width: 100%;
`;

const StyledTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
`;

const StyledContent = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 400;
`;

const StyledReplyTo = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray400};
`;

const StyledDate = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray400};
`;

const StyledDeleteButton = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

const StyledPostTitle = styled.p`
  display: inline-block;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

interface NotificationReplyProps {
  notification: NotificationResponse;
  handleDelete: (id: string) => void;
}

const getTitle = (
  type: NotificationEnum,
  username: string,
  title: string,
  isReplyMe: boolean
) => {
  switch (type) {
    case NotificationEnum.REPLY:
      return (
        <StyledTitle>
          {isReplyMe ? (
            <>
              <strong>{username}</strong>在
              <StyledPostTitle>{title}</StyledPostTitle>中回复了你
            </>
          ) : (
            <>
              <strong>{username}</strong>在
              <StyledPostTitle>{title}</StyledPostTitle>
              下进行了回复
            </>
          )}
        </StyledTitle>
      );
    case NotificationEnum.COMMENT:
      return (
        <StyledTitle>
          <strong>{username}</strong>在
          <StyledPostTitle>{title}</StyledPostTitle>
          下发表了评论
        </StyledTitle>
      );
    default:
      return "";
  }
};

function NotificationReply({
  notification,
  handleDelete,
}: NotificationReplyProps) {
  const { user } = useFetchUser();

  return (
    // <StyledNotificationReply>
    //   {(notification.type === NotificationEnum.REPLY ||
    //     notification.type === NotificationEnum.COMMENT) && (
    //     <StyledFlexForHeader>
    //       {getTitle(
    //         notification.type,
    //         notification.sendUser.username,
    //         notification.entity.post.title,
    //         notification.entity.replyTo?.author.id === user?.id
    //       )}
    //       <StyledDeleteButton onClick={() => handleDelete(notification.id)}>
    //         删除
    //       </StyledDeleteButton>
    //     </StyledFlexForHeader>
    //   )}

    //   <StyledContent>{notification.entity.content}</StyledContent>

    //   {notification.type === NotificationEnum.REPLY && (
    //     <StyledReplyTo>
    //       {notification.entity.replyTo.author.username +
    //         ": " +
    //         notification.entity.replyTo.content}
    //     </StyledReplyTo>
    //   )}

    //   <StyledDate>
    //     {convertUTCToBeijingTime(notification.entity.createdAt)}
    //   </StyledDate>
    // </StyledNotificationReply>
    <StyledNotificationReply>
      {(notification?.type === NotificationEnum.REPLY ||
        notification?.type === NotificationEnum.COMMENT) && (
        <StyledFlexForHeader>
          {getTitle(
            notification?.type,
            notification?.sendUser?.username ?? "Unknown User",
            notification?.entity?.post?.title ?? "No Title",
            notification?.entity?.replyTo?.author?.id === user?.id
          )}
          <StyledDeleteButton
            onClick={() => handleDelete(notification?.id ?? "")}
          >
            删除
          </StyledDeleteButton>
        </StyledFlexForHeader>
      )}

      <StyledContent>
        {notification?.entity?.content ?? "No Content"}
      </StyledContent>

      {notification?.type === NotificationEnum.REPLY && (
        <StyledReplyTo>
          {(notification?.entity?.replyTo?.author?.username ?? "匿名用户") +
            ": " +
            (notification?.entity?.replyTo?.content ?? "内容已删除")}
        </StyledReplyTo>
      )}

      <StyledDate>
        {convertUTCToBeijingTime(notification?.entity?.createdAt ?? "")}
      </StyledDate>
    </StyledNotificationReply>
  );
}

export default NotificationReply;
