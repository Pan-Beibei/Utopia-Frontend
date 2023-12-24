import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import Comment from "./Comment";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.5rem;
  letter-spacing: 0.07rem;
`;

function CommentList() {
  return (
    <StyledContainer>
      <Comment />
      <Comment />
    </StyledContainer>
  );
}

export default CommentList;
