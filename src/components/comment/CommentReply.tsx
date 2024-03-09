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

  console.log("data: ", data, commentParentId);

  let header;
  if (
    data.replyTo.id === commentParentId ||
    data.replyTo.author.id === data.author.id
    // data.replyTo.author.id ===
  ) {
    header = null;
  } else {
    header = (
      <>
        <StyledDate>{"回复了"}</StyledDate>
        <StyledUserName>{data.replyTo.author.username}</StyledUserName>
      </>
    );
  }

  return (
    <StyledReply>
      <StyledFlexForHeader>
        <StyledUserName>{data.author.username}</StyledUserName>
        {header}

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
          handleReply={() => handleReply(data.id, data.author.username)}
        />
      </StyledFlexForMainContent>
    </StyledReply>
  );
}

export default CommentReply;
