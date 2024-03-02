import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import { useCommentContext } from "./Common";
import {
  StyledFlexForHeader,
  StyledFlexForMainContent,
  StyledUserName,
  StyledDate,
  StyledCommentContent,
  StyledDeleteButton,
} from "./Common";
import CommentInteractiveButtons from "./CommentInteractiveButtons";
import { timeAgo } from "../../utils/conversionTime";
import { CommentResponse } from "../../services/api/comment";

const StyledReply = styled(BaseColumnFlex)`
  gap: 0.3rem;
  align-items: flex-start;
  width: 100%;
`;

const StyledFlexForMainLeft = styled(BaseFlex)`
  gap: 0.3rem;
`;

export interface ReplyProps {
  // author: { id: string; username: string };
  // date: string;
  // content: string;
  // repliedUser: { id: string; author: { id: string; username: string } };
  commentParentId: string;
  data: CommentResponse;
  isMe: boolean;
  handleDelete: (parentId: string, id: string) => void;
}

function CommentReply({
  commentParentId,
  data,
  isMe,
  handleDelete,
}: ReplyProps) {
  const { handleReply } = useCommentContext();

  return (
    <StyledReply>
      <StyledFlexForHeader>
        <StyledUserName>{data.author.username}</StyledUserName>
        {data.replyTo.id === commentParentId ? null : (
          <>
            <StyledDate>{"回复了"}</StyledDate>
            <StyledUserName>{data.replyTo.author.username}</StyledUserName>
          </>
        )}

        <StyledDate>{timeAgo(data.createdAt)}</StyledDate>
      </StyledFlexForHeader>

      <StyledFlexForMainContent>
        <StyledFlexForMainLeft>
          <StyledCommentContent>
            {data.content}
            {isMe && (
              <StyledDeleteButton
                onClick={() => handleDelete(commentParentId, data.id)}
              >
                删除
              </StyledDeleteButton>
            )}
          </StyledCommentContent>
        </StyledFlexForMainLeft>

        <CommentInteractiveButtons
          handleReply={() => handleReply(data.replyTo.author.username)}
        />
      </StyledFlexForMainContent>
    </StyledReply>
  );
}

export default CommentReply;
