import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import Comment from ".";
import { useComments } from "../../hooks/useCommentsHook";
import { initCommentState } from "../../services/state/commentSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (comments === undefined || comments.length === 0)
    return <div>暂无评论</div>;

  dispatch(initCommentState(comments));

  console.log(comments);

  return (
    <StyledContainer>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} postId={postId}>
          <Comment.ReplyList />
        </Comment>
      ))}
    </StyledContainer>
  );
}

export default CommentList;
