import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
// import CommentInteractiveButtons from "../Comment/CommentInteractiveButtons";
import { NotificationResponse } from "../../services/api/notification";
import { convertUTCToBeijingTime } from "../../utils/conversionTime";

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

interface NotificationReplyProps {
  notification: NotificationResponse;
  handleDelete: (id: string) => void;
}

function NotificationReply({
  notification,
  handleDelete,
}: NotificationReplyProps) {
  // function handleReply() {
  //   console.log("repliedUserName");
  // }

  return (
    <StyledNotificationReply>
      <StyledFlexForHeader>
        <StyledTitle>
          <strong>{notification.sendUser.username}</strong>回复了你
        </StyledTitle>
        {/* <CommentInteractiveButtons handleReply={handleReply} /> */}
        <StyledDeleteButton onClick={() => handleDelete(notification.id)}>
          删除
        </StyledDeleteButton>
      </StyledFlexForHeader>

      <StyledContent>{notification.entity.content}</StyledContent>
      <StyledReplyTo>
        {notification.entity.replyTo.author.username +
          ": " +
          notification.entity.replyTo.content}
      </StyledReplyTo>
      <StyledDate>
        {convertUTCToBeijingTime(notification.entity.createdAt)}
      </StyledDate>
    </StyledNotificationReply>
  );
}

export default NotificationReply;
