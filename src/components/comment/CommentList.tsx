import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
// import Comment from "./Comment";
import CommentWithReplies from "./CommentWithReplies";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.5rem;
  letter-spacing: 0.07rem;
`;

function CommentList() {
  return (
    <StyledContainer>
      <CommentWithReplies postId="32132131123">
        <CommentWithReplies.ReplyList />
      </CommentWithReplies>
    </StyledContainer>
  );
}

export default CommentList;
