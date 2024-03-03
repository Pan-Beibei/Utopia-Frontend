import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import Comment from ".";
import { useComments } from "../../hooks/useCommentsHook";
import { initCommentState } from "../../services/state/commentSlice";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import { CommentResponse, deleteComment } from "../../services/api/comment";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useFetchUser } from "../../hooks/useFetchUser";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.5rem;
  letter-spacing: 0.07rem;
  width: 100%;
  justify-content: flex-start;

  overflow: hidden;
  overflow-y: auto;
  max-height: 55rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Webkit browsers in WeChat */
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
`;

interface CommentListProps {
  postId: string;
}

function CommentList({ postId }: CommentListProps) {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  const { user } = useFetchUser();

  const {
    isError,
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useComments(postId);
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) {
      console.log("newComments", data);

      const newComments = data.pages.flatMap((page) => page.comments);
      setComments(newComments);
      dispatch(initCommentState(newComments));
    }
  }, [data, dispatch]);

  console.log("hasNextPage", hasNextPage);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("inView");
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleDelete = useCallback(
    (id: string) => {
      deleteComment({ id })
        .then((res) => {
          if (res.code === "success") {
            toast.success("删除成功");
            const newComments = comments?.filter(
              (comment) => comment.id !== id
            );
            setComments(newComments);
            queryClient.invalidateQueries(["comments", postId]);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.success("删除失败");
        });
    },
    [comments, postId, queryClient]
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (comments === undefined || comments.length === 0)
    return <div>暂无评论</div>;

  return (
    <StyledContainer>
      {comments.map((comment: CommentResponse) => (
        <Comment
          key={comment.id}
          data={comment}
          postId={postId}
          handleDelete={handleDelete}
          isMe={user?.id === comment.author.id}
        ></Comment>
      ))}
      <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
    </StyledContainer>
  );
}

export default CommentList;
