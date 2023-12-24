import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import CommentReply from "./CommentReply";
import CommentExpandMoreButton from "./CommentExpandMoreButton";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1rem;
  padding-left: 2rem;
`;

function CommentReplyList() {
  return (
    <StyledContainer>
      <CommentReply />
      <CommentExpandMoreButton num={5} />
    </StyledContainer>
  );
}

export default CommentReplyList;
