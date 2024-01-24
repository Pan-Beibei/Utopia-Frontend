import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ExpandMoreButton from "../ui/ExpandButton";
import { fetchComments, getReplies } from "../../services/state/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useCommentContext } from "./Common";
import CommentReply from "./CommentReply";

const StyledReplyList = styled(BaseColumnFlex)`
  gap: 1rem;
  padding-left: 2rem;
  width: 100%;
`;

interface ReplyListProps {
  repliesCount: number;
}

function CommentReplyList({ repliesCount }: ReplyListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { commentParentId } = useCommentContext(); //replys
  const commentState = useSelector((state: RootState) =>
    getReplies(state, commentParentId)
  );

  function handleExpandMore() {
    console.log("expandMore");
    dispatch(fetchComments(commentParentId));
  }

  console.log("commentState:", commentState);

  return (
    <StyledReplyList>
      {commentState === undefined || !commentState.isRepliesVisible ? (
        <ExpandMoreButton
          num={repliesCount}
          handleExpandMore={handleExpandMore}
        />
      ) : (
        commentState.comments.map((comment) => (
          <CommentReply
            commentParentId={commentParentId}
            athor={comment.author}
            content={comment.content}
            repliedUser={comment.replyTo}
            date={comment.createdAt}
            key={comment.id}
          />
        ))
      )}
    </StyledReplyList>
  );
}

export default CommentReplyList;
