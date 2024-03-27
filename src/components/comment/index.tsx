import { createContext, memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import CommentInteractive from "./CommentInteractive";
import ReplyInputBox from "./CommentReplyInputBox";
import { getUserName } from "../../utils/helper";

import { StyledUserName, StyledCommentContent } from "./Common";
import CommentReplyList from "./CommentReplyList";
import { CommentResponse } from "../../services/api/comment";

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

const StyledContainer = styled(BaseColumnFlex)`
  gap: 1.2rem;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
  padding-bottom: 0.8rem;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.black};
  width: 100%;
`;

const StyledReplyInputBoxContainer = styled.div`
  width: 100%;
  padding-left: 2rem;
`;

const StyledTopComment = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 0.3rem;
  width: 100%;
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
        block: "center",
      });
    }
  }, [showReplyInputBox]);

  function handleReply(commentId: string, username: string) {
    setReplied({ commentId, username });
    setShowReplyInputBox((isShow) => !isShow);
  }

  return (
    <CommentContext.Provider value={{ commentParentId, handleReply }}>
      <StyledContainer>
        <StyledTopComment>
          <StyledUserName>{getUserName(data.author)}</StyledUserName>
          <StyledCommentContent>{data.content}</StyledCommentContent>
          <CommentInteractive
            isMe={isMe}
            createdAt={data.createdAt}
            handleReply={() => handleReply(data.id, getUserName(data.author))}
            handleDelete={() => handleDelete(data.id)}
          />
        </StyledTopComment>
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
      </StyledContainer>
    </CommentContext.Provider>
  );
});

export default Comment;
