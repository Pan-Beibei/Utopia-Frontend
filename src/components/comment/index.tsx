import { createContext, memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ReplyButton from "./CommentInteractiveButtons";
import ReplyInputBox from "./CommentReplyInputBox";
import { getUserName } from "../../utils/helper";

import {
  StyledFlexForHeader,
  StyledFlexForMainContent,
  StyledUserName,
  StyledDate,
  StyledCommentContent,
  StyledDeleteButton,
} from "./Common";
import CommentReplyList from "./CommentReplyList";
import { CommentResponse } from "../../services/api/comment";
import { timeAgo } from "../../utils/conversionTime";

type ContextType = {
  handleReply: (id: string, name: string) => void;
  commentParentId: string;
};

interface CommentProps {
  postId: string;
  data: CommentResponse;
  isMe: boolean;
  handleDelete: (id: string) => void;
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

const Comment = memo(({ postId, data, handleDelete, isMe }: CommentProps) => {
  const [showReplyInputBox, setShowReplyInputBox] = useState(false);
  const [replied, setReplied] = useState({ commentId: "", username: "" });
  const replyInputBoxRef = useRef<HTMLDivElement>(null);
  const commentParentId = data.id;

  useEffect(() => {
    if (showReplyInputBox && replyInputBoxRef.current) {
      replyInputBoxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [showReplyInputBox]);

  function handleReply(commentId: string, username: string) {
    setReplied({ commentId, username });
    setShowReplyInputBox((isShow) => !isShow);
  }

  return (
    <CommentContext.Provider value={{ commentParentId, handleReply }}>
      <StyledComment>
        <StyledFlexForHeader>
          <StyledUserName>{getUserName(data.author)}</StyledUserName>
          <StyledDate>{timeAgo(data.createdAt)}</StyledDate>
        </StyledFlexForHeader>
        <StyledFlexForMainContent>
          <StyledCommentContent>
            {data.content}
            {isMe && (
              <StyledDeleteButton onClick={() => handleDelete(data.id)}>
                删除
              </StyledDeleteButton>
            )}
          </StyledCommentContent>
          <ReplyButton
            handleReply={() => handleReply(data.id, getUserName(data.author))}
          />
        </StyledFlexForMainContent>
        <CommentReplyList /> {/* 评论的回复列表 */}
        {showReplyInputBox && (
          <StyledReplyInputBoxContainer>
            <ReplyInputBox
              replyInputBoxRef={replyInputBoxRef}
              postId={postId} //帖子的id
              replied={replied} //回复目标的用户名
              parentId={commentParentId} //父ID
            />
          </StyledReplyInputBoxContainer>
        )}
      </StyledComment>
    </CommentContext.Provider>
  );
});

export default Comment;
