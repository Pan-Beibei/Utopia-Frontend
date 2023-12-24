import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "./PostDetailNavigationButtons";
import PostCommentInputBox from "./PostCommentInputBox";
import PostCommentList from "../comment/CommentList";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledPostContainer = styled(BaseColumnFlex)`
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const StyledCommentContainer = styled(BaseColumnFlex)`
  gap: 2rem;
  padding: 1.6rem 1rem;
  width: 100%;
`;

function PostDetail() {
  const { postId } = useParams();

  console.log(postId);

  return (
    <StyledContainer>
      <PostDetailNavigationButtons
        lastTitle="锥心追月"
        nextTitle="初级扑街仔"
      />
      <StyledPostContainer>
        <StyledCommentContainer>
          <PostCommentInputBox />
          <PostCommentList />
        </StyledCommentContainer>
      </StyledPostContainer>
    </StyledContainer>
  );
}

export default PostDetail;
