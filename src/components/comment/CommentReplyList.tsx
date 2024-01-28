import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ExpandMoreButton from "../ui/ExpandButton";
import {
  fetchComments,
  getReplies,
  collapseReplies,
} from "../../services/state/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useCommentContext } from "./Common";
import CommentReply from "./CommentReply";
import { CommentResponse } from "../../services/api/comment";

const StyledReplyList = styled(BaseColumnFlex)`
  gap: 1rem;
  padding-left: 2rem;
  width: 100%;
`;

const CommentReplyListComponent = ({
  comments,
  commentParentId,
}: {
  comments: CommentResponse[];
  commentParentId: string;
}) => (
  <>
    {comments.map((comment: CommentResponse) => (
      <CommentReply
        commentParentId={commentParentId}
        author={comment.author}
        content={comment.content}
        repliedUser={comment.replyTo}
        date={comment.createdAt}
        key={comment.id}
      />
    ))}
  </>
);

function CommentReplyList() {
  const dispatch = useDispatch<AppDispatch>();
  const { commentParentId } = useCommentContext();
  const commentState = useSelector((state: RootState) =>
    getReplies(state, commentParentId)
  );

  if (!commentState) {
    throw new Error("commentState is undefined");
  }
  if (commentState.repliesCount === 0) {
    return null;
  }

  function handleExpandMore() {
    const fetchParams = {
      parentId: commentParentId,
      cursor: "",
      pageSize: 3,
    };

    if (commentState) {
      fetchParams.cursor = commentState.cursor;
    }
    console.log("expandMore", fetchParams);
    dispatch(fetchComments(fetchParams));
  }

  function handleCollapseAll() {
    dispatch(collapseReplies(commentParentId));
  }

  console.log("commentState:", commentParentId, commentState);
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
