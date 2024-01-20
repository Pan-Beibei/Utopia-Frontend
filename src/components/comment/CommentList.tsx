import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
// import Comment from "./Comment";
import Comment from ".";
import { useComments, ServerCommentData } from "../../services/api/comment";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.5rem;
  letter-spacing: 0.07rem;
  width: 100%;
`;

interface CommentListProps {
  postId: string;
}

function CommentList({ postId }: CommentListProps) {
  const { isError, isLoading, data: comments } = useComments(postId, 1, 5);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <StyledContainer>
      {comments.map((comment: ServerCommentData) => (
        <Comment key={comment.id} data={comment}>
          <Comment.ReplyList />
        </Comment>
      ))}
    </StyledContainer>
  );
}

export default CommentList;
