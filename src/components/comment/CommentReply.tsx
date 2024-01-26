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
import { timeAgo } from "../../utils/ConversionTime";

const StyledReply = styled(BaseColumnFlex)`
  gap: 0.3rem;
  align-items: flex-start;
  width: 100%;
`;

const StyledFlexForMainLeft = styled(BaseFlex)`
  gap: 0.3rem;
`;

export interface ReplyProps {
  author: { id: string; username: string };
  date: string;
  content: string;
  repliedUser: { id: string; author: { id: string; username: string } };
  commentParentId: string;
}

function CommentReply({
  author,
  date,
  content,
  repliedUser,
  commentParentId,
}: ReplyProps) {
  const { handleReply } = useCommentContext();

  return (
    <StyledReply>
      <StyledFlexForHeader>
        <StyledUserName>{author.username}</StyledUserName>
        {repliedUser.id === commentParentId ? null : (
          <>
            <StyledDate>{"回复了"}</StyledDate>
            <StyledUserName>{repliedUser.author.username}</StyledUserName>
          </>
        )}

        <StyledDate>{timeAgo(date)}</StyledDate>
      </StyledFlexForHeader>

      <StyledFlexForMainContent>
        <StyledFlexForMainLeft>
          <StyledCommentContent>{content}</StyledCommentContent>
        </StyledFlexForMainLeft>

        <ReplyButton
          handleReply={() => handleReply(repliedUser.author.username)}
        />
      </StyledFlexForMainContent>
    </StyledReply>
  );
}

export default CommentReply;
