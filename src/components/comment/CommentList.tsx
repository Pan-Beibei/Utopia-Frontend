import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import Comment from ".";
import { useComments } from "../../hooks/useCommentsHook";
import { initCommentState } from "../../services/state/commentSlice";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CommentResponse } from "../../services/api/comment";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.5rem;
  letter-spacing: 0.07rem;
  width: 100%;
`;

interface CommentListProps {
  postId: string;
}

function CommentList({ postId }: CommentListProps) {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();

  const {
    isError,
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useComments(postId);
  const comments = data?.pages.flatMap((page) => page);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("inView");
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (comments === undefined || comments.length === 0)
    return <div>暂无评论</div>;

  dispatch(initCommentState(comments));

  console.log("comments: ", comments);

  return (
    <StyledContainer>
      {comments.map((comment: CommentResponse) => (
        <Comment key={comment.id} data={comment} postId={postId}>
          <Comment.ReplyList />
        </Comment>
      ))}
      <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
    </StyledContainer>
  );
}

export default CommentList;
