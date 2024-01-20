import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import { useCommentContext } from "./Common";
import {
  StyledFlexForHeader,
  StyledFlexForMainContent,
  StyledUserName,
  StyledDate,
  StyledCommentContent,
} from "./Common";
import ReplyButton from "./CommentReplyButton";

const StyledReply = styled(BaseColumnFlex)`
  gap: 0.3rem;
  align-items: flex-start;
  width: 100%;
`;

const StyledFlexForMainLeft = styled(BaseFlex)`
  gap: 0.3rem;
`;

export interface ReplyProps {
  replyUserName: string;
  replyDate: string;
  replyContent: string;
  repliedUserName: string;
}

function CommentReply({
  replyUserName,
  replyDate,
  replyContent,
  repliedUserName,
}: ReplyProps) {
  const { handleReply } = useCommentContext();

  return (
    <StyledReply>
      <StyledFlexForHeader>
        <StyledUserName>{replyUserName}</StyledUserName>
        <StyledDate>{"回复了"}</StyledDate>
        <StyledUserName>{repliedUserName}</StyledUserName>
        <StyledDate>{replyDate}</StyledDate>
      </StyledFlexForHeader>

      <StyledFlexForMainContent>
        <StyledFlexForMainLeft>
          <StyledCommentContent>{replyContent}</StyledCommentContent>
        </StyledFlexForMainLeft>

        <ReplyButton handleReply={() => handleReply(repliedUserName)} />
      </StyledFlexForMainContent>
    </StyledReply>
  );
}

export default CommentReply;
