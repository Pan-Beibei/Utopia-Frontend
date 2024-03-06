import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import CommentInteractiveButtons from "../Comment/CommentInteractiveButtons";

const StyledNotificationReply = styled(BaseColumnFlex)`
  padding: 1rem 0;
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

const StyledDate = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray400};
`;

function NotificationReply() {
  function handleReply() {
    console.log("repliedUserName");
  }

  return (
    <StyledNotificationReply>
      <StyledFlexForHeader>
        <StyledTitle>
          <strong>星光</strong>回复了我的评论
        </StyledTitle>
        <CommentInteractiveButtons handleReply={handleReply} />
      </StyledFlexForHeader>

      <StyledContent>你说的是真的吗？那简直太好了！！！</StyledContent>
      <StyledDate>2022年11月14日 10:34</StyledDate>
    </StyledNotificationReply>
  );
}

export default NotificationReply;
