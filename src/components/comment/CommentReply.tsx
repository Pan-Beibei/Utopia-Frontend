import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import { useCommentContext } from "./Common";
import {
  StyledFlexForHeader,
  StyledFlexForMainContent,
  StyledUserName,
  StyledCommentContent,
} from "./Common";
import CommentInteractive from "./CommentInteractive";

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

  // console.log("data: ", data, commentParentId);

  let header;
  if (
    data.replyTo.id === commentParentId ||
    data.replyTo.author.id === data.author.id
  ) {
    header = null;
  } else {
    header = (
      <>
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.03033 13.5303C9.32322 13.2374 9.32322 12.7626 9.03033 12.4697L4.25736 7.6967C3.96447 7.40381 3.48959 7.40381 3.1967 7.6967C2.90381 7.98959 2.90381 8.46447 3.1967 8.75736L7.43934 13L3.1967 17.2426C2.90381 17.5355 2.90381 18.0104 3.1967 18.3033C3.48959 18.5962 3.96447 18.5962 4.25736 18.3033L9.03033 13.5303ZM8 13.75H8.5V12.25H8V13.75Z"
            fill="black"
          />
        </svg>
        <StyledUserName>{data.replyTo.author.username}</StyledUserName>
      </>
    );
  }

  return (
    <StyledReply>
      <StyledFlexForHeader>
        <StyledUserName>{data.author.username}</StyledUserName>
        {header}
      </StyledFlexForHeader>

      <StyledFlexForMainContent>
        <StyledFlexForMainLeft>
          <StyledCommentContent>{data.content}</StyledCommentContent>
        </StyledFlexForMainLeft>
      </StyledFlexForMainContent>
      <CommentInteractive
        isMe={isMe}
        createdAt={data.createdAt}
        handleReply={() => handleReply(data.id, data.author.username)}
        handleDelete={() => handleDelete(commentParentId, data.id)}
      />
    </StyledReply>
  );
}

export default CommentReply;
