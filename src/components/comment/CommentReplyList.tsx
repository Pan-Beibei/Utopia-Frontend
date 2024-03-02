import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import toast from "react-hot-toast";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ExpandMoreButton from "../ui/ExpandButton";
import {
  fetchComments,
  getReplies,
  collapseReplies,
} from "../../services/state/commentSlice";

import { AppDispatch, RootState } from "../../store";
import { useCommentContext } from "./Common";
import CommentReply from "./CommentReply";
import { CommentResponse, deleteComment } from "../../services/api/comment";
import { useFetchUser } from "../../hooks/useFetchUser";
import { deleteReplay } from "../../services/state/commentSlice";

const StyledReplyList = styled(BaseColumnFlex)`
  gap: 1rem;
  padding-left: 2rem;
  width: 100%;
`;

const CommentReplyListComponent = ({
  comments,
  commentParentId,
  userId,
  handleDelete,
}: {
  comments: CommentResponse[];
  commentParentId: string;
  userId: string | undefined;
  handleDelete: (parentId: string, id: string) => void;
}) => (
  <>
    {comments.map((comment: CommentResponse) => (
      <CommentReply
        commentParentId={commentParentId}
        data={comment}
        key={comment.id}
        isMe={userId === comment.author.id}
        handleDelete={handleDelete}
      />
    ))}
  </>
);

function CommentReplyList() {
  const dispatch = useDispatch<AppDispatch>();
  const { commentParentId } = useCommentContext();
  const commentState = useSelector(
    (state: RootState) => getReplies(state, commentParentId),
    shallowEqual
  );
  const { user } = useFetchUser();
  const commentStateCursor = commentState ? commentState.cursor : "";

  console.log("commentState: ", commentState);

  const handleDelete = useCallback(
    (parentId: string, id: string) => {
      deleteComment({ id })
        .then((res) => {
          if (res.code === "success") {
            dispatch(deleteReplay({ parentId, id }));

            toast.success("删除成功");
          }
        })
        .catch((err) => {
          console.log(err);

          toast.error(`删除失败${err}`);
        });
    },
    [dispatch]
  );

  const handleCollapseAll = useCallback(() => {
    dispatch(collapseReplies(commentParentId));
  }, [commentParentId, dispatch]);

  const handleExpandMore = useCallback(() => {
    const fetchParams = {
      parentId: commentParentId,
      cursor: commentStateCursor,
      pageSize: 3,
    };

    // console.log("expandMore", fetchParams);
    dispatch(fetchComments(fetchParams));
  }, [commentParentId, dispatch, commentStateCursor]);

  if (!commentState) {
    return <>{"commentState is undefined"}</>;
  }
  if (commentState.repliesCount === 0) {
    //没有子评论就不需要渲染更多组件
    return null;
  }

  if (!commentState.isRepliesVisible)
    return (
      <StyledReplyList>
        <ExpandMoreButton
          num={commentState.repliesCount}
          handleExpandMore={handleExpandMore}
        />
      </StyledReplyList>
    );

  return (
    <StyledReplyList>
      <CommentReplyListComponent
        comments={commentState.comments}
        commentParentId={commentParentId}
        userId={user?.id}
        handleDelete={handleDelete}
      />
      {commentState.hasFetchedAllReplies ? (
        // 收起全部
        <ExpandMoreButton
          isAllExpanded={true}
          handleCollapseAll={handleCollapseAll}
        />
      ) : commentState.isRepliesVisible ? (
        // 展开更多回复
        <ExpandMoreButton
          isExpanded={true}
          handleExpandMore={handleExpandMore}
        />
      ) : (
        // 展开{}回复
        <ExpandMoreButton
          num={commentState.repliesCount}
          handleExpandMore={handleExpandMore}
        />
      )}
    </StyledReplyList>
  );
}

export default CommentReplyList;
