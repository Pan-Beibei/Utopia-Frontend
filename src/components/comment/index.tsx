import { ReactNode, createContext, useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ReplyButton from "./CommentReplyButton";
import ReplyInputBox from "./CommentReplyInputBox";
import { ReplyProps } from "./CommentReply";
import {
  StyledFlexForHeader,
  StyledFlexForMainContent,
  StyledUserName,
  StyledDate,
  StyledCommentContent,
} from "./Common";
import CommentReplyList from "./CommentReplyList";
import { ServerCommentData } from "../../services/api/comment";

type ContextType = {
  handleExpandMore: () => void;
  handleReply: (repliedUserName: string) => void;
  replys: Array<ReplyProps>;
};

interface CommentProps {
  children?: ReactNode;
  data: ServerCommentData;
}

export const CommentContext = createContext<ContextType | null>(null);

const StyledComment = styled(BaseColumnFlex)`
  gap: 0.07rem;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
  padding-bottom: 0.8rem;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.black};
  width: 100%;
`;

// const StyledColon = styled.span`
//   font-weight: ${(props) => props.theme.fontWeight.bold};
// `;

const StyledReplyInputBoxContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-left: 2rem;
`;

function Comment({ children, data }: CommentProps) {
  const [showReplyInputBox, setShowReplyInputBox] = useState(false);
  const [repliedUserName, setRepliedUserName] = useState("");

  console.log(data);

  function handleExpandMore() {
    console.log("expandMore");
  }

  function handleReply(repliedName: string) {
    console.log(repliedName);

    setShowReplyInputBox((isShow) => !isShow);
    setRepliedUserName(repliedName);
  }
  const replys = [];
  return (
    <CommentContext.Provider value={{ handleExpandMore, handleReply, replys }}>
      <StyledComment>
        <StyledFlexForHeader>
          <StyledUserName>{data.author.username}</StyledUserName>
          <StyledDate>{data.createdAt}</StyledDate>
        </StyledFlexForHeader>
        <StyledFlexForMainContent>
          <StyledCommentContent>{data.content}</StyledCommentContent>
          <ReplyButton handleReply={() => handleReply(data.author.username)} />
        </StyledFlexForMainContent>
        {children}
        {showReplyInputBox && (
          <StyledReplyInputBoxContainer>
            <ReplyInputBox repliedUserName={repliedUserName} />
          </StyledReplyInputBoxContainer>
        )}
      </StyledComment>
    </CommentContext.Provider>
  );
}

Comment.ReplyList = CommentReplyList;

export default Comment;
