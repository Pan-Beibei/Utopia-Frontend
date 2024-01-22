import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import { useCommentContext } from "./Common";
import ExpandMoreButton from "../ui/ExpandButton";

const StyledReplyList = styled(BaseColumnFlex)`
  gap: 1rem;
  padding-left: 2rem;
  width: 100%;
`;

interface ReplyListProps {
  repliesCount: number;
}

function CommentReplyList({ repliesCount }: ReplyListProps) {
  const { handleExpandMore } = useCommentContext(); //replys

  return (
    <StyledReplyList>
      {/* {replys.map((reply: ReplyProps, index) => (
        <CommentReply {...reply} key={index} />
      ))} */}
      <ExpandMoreButton
        num={repliesCount}
        handleExpandMore={handleExpandMore}
      />
    </StyledReplyList>
  );
}

export default CommentReplyList;
