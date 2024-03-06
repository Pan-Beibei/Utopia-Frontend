import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import NotificationReply from "./NotificationReply";

const StyledNotificationReplyList = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1.5rem;
`;

function NotificationReplyList() {
  console.log("ReplyList");

  return (
    <StyledNotificationReplyList>
      <NotificationReply />
      <NotificationReply />
      <NotificationReply />
    </StyledNotificationReplyList>
  );
}

export default NotificationReplyList;
