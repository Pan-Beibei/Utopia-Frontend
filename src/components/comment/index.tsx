import { ReactNode, createContext, useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ReplyButton from "./CommentReplyButton";
import ReplyInputBox from "./CommentReplyInputBox";

import {
  StyledFlexForHeader,
  StyledFlexForMainContent,
  StyledUserName,
  StyledDate,
  StyledCommentContent,
} from "./Common";
import CommentReplyList from "./CommentReplyList";
import { CommentResponse } from "../../services/api/comment";
import { timeAgo } from "../../utils/ConversionTime";

type ContextType = {
  handleReply: (repliedUserName: string) => void;
  commentParentId: string;
};

interface CommentProps {
  children?: ReactNode;
  postId: string;
  data: CommentResponse;
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

const StyledReplyInputBoxContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-left: 2rem;
`;

function Comment({ postId, children, data }: CommentProps) {
  const [showReplyInputBox, setShowReplyInputBox] = useState(false);
  const [repliedUserName, setRepliedUserName] = useState("");
  const [commentParentId] = useState(data.id);

  function handleReply(repliedName: string) {
    console.log(repliedName);

    setShowReplyInputBox((isShow) => !isShow);
    setRepliedUserName(repliedName);
  }

  return (
    <CommentContext.Provider value={{ commentParentId, handleReply }}>
      <StyledComment>
        <StyledFlexForHeader>
          <StyledUserName>{data.author.username}</StyledUserName>
          <StyledDate>{timeAgo(data.createdAt)}</StyledDate>
        </StyledFlexForHeader>
        <StyledFlexForMainContent>
          <StyledCommentContent>{data.content}</StyledCommentContent>
          <ReplyButton handleReply={() => handleReply(data.author.username)} />
        </StyledFlexForMainContent>
        {children}
        {showReplyInputBox && (
          <StyledReplyInputBoxContainer>
            <ReplyInputBox
              postId={postId} //帖子的id
              repliedUserName={repliedUserName} //回复目标的用户名
              parentId={data.parent} //父级评论的id(如果回复的评论的父级为空的话，那么该回复的父级也是回复的目标)
              replyToId={data.id} //回复目标评论的id
            />
          </StyledReplyInputBoxContainer>
        )}
      </StyledComment>
    </CommentContext.Provider>
  );
}

Comment.ReplyList = CommentReplyList;

export default Comment;
