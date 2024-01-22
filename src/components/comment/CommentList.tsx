import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import Comment from ".";
import { useComments } from "../../hooks/useCommentsHook";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.5rem;
  letter-spacing: 0.07rem;
  width: 100%;
`;

interface CommentListProps {
  postId: string;
}

function CommentList({ postId }: CommentListProps) {
  const { isError, isLoading, data: comments } = useComments(postId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (comments === undefined || comments.length === 0)
    return <div>暂无评论</div>;

  console.log(comments);

  return (
    <StyledContainer>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} postId={postId}>
          {comment.repliesCount > 0 && (
            <Comment.ReplyList repliesCount={comment.repliesCount} />
          )}
        </Comment>
      ))}
    </StyledContainer>
  );
}

export default CommentList;
