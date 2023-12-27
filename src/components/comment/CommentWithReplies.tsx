import { ReactNode, createContext, useContext, useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import ExpandMoreButton from "../ui/ExpandButton";
import ReplyButton from "./CommentReplyButton";
import ReplyInputBox from "./CommentReplyInputBox";

type ContextType = {
  handleExpandMore: () => void;
  handleReply: (repliedUserName: string) => void;
  postId: string;
  replys: Array<ReplyProps>;
};

interface CommentCommonProps {
  children?: ReactNode;
}

interface ReplyProps {
  replyUserName: string;
  replyDate: string;
  replyContent: string;
  repliedUserName: string;
}

const CommentContext = createContext<ContextType | null>(null);

const StyledComment = styled(BaseColumnFlex)`
  gap: 0.07rem;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
  padding-bottom: 0.8rem;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyledFlexForHeader = styled(BaseFlex)`
  gap: 0.5rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  align-items: flex-start;
`;

const StyledUserName = styled.span``;

const StyledDate = styled.span`
  color: ${(props) => props.theme.colors.gray400};
  white-space: nowrap;
`;

const StyledFlexForMainContent = styled(BaseFlex)`
  justify-content: space-between;
  gap: 2rem;
`;

const StyledCommentContent = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledReplyList = styled(BaseColumnFlex)`
  gap: 1rem;
  padding-left: 2rem;
`;

const StyledReply = styled(BaseColumnFlex)`
  gap: 0.3rem;
  align-items: flex-start;
`;

const StyledReplyInputBoxContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-left: 2rem;
`;

function CommentReply({
  replyUserName,
  replyDate,
  replyContent,
  repliedUserName,
}: ReplyProps) {
  const { handleReply } = useCommentContext();

  return (
    <StyledReply>
      <StyledFlexForHeader>
        <StyledUserName>{replyUserName}</StyledUserName>
        <StyledDate>{"回复了"}</StyledDate>
        <StyledUserName>{repliedUserName}</StyledUserName>
        <StyledDate>{replyDate}</StyledDate>
      </StyledFlexForHeader>

      <StyledFlexForMainContent>
        <StyledCommentContent>{replyContent}</StyledCommentContent>
        <ReplyButton handleReply={() => handleReply(repliedUserName)} />
      </StyledFlexForMainContent>
    </StyledReply>
  );
}

function CommentReplyList() {
  const { replys, handleExpandMore } = useCommentContext();

  return (
    <StyledReplyList>
      {replys.map((reply: ReplyProps, index) => (
        <CommentReply {...reply} key={index} />
      ))}
      <ExpandMoreButton num={5} handleExpandMore={handleExpandMore} />
    </StyledReplyList>
  );
}

interface CommentReplyListProps extends CommentCommonProps {
  postId: string;
}

const msReplys = [
  {
    replyUserName: "replyUserName--1",
    replyDate: "8分钟前",
    replyContent:
      "内容地方v快来救命呢在路上看到均可i简直是的女孩子女孩子的是利空打击和你看i速度和",
    repliedUserName: "repliedUserName--1",
  },
  {
    replyUserName: "replyUserName--2",
    replyDate: "8分钟前",
    replyContent:
      "内容地方v快来救命呢在路上看到均可i简直是的女孩子女孩子的是利空打击和你看i速度和",
    repliedUserName: "repliedUserName--2",
  },
  {
    replyUserName: "replyUserName--3",
    replyDate: "8分钟前",
    replyContent:
      "内容地方v快来救命呢在路上看到均可i简直是的女孩子女孩子的是利空打击和你看i速度和",
    repliedUserName: "repliedUserName--3",
  },
];
const { commentUserName, commentDate, commentContent, replys } = {
  commentUserName: "yanyan",
  commentDate: "10分钟前",
  commentContent:
    "内容地方v快来救命呢在路上看到均可i简直是的女孩子女孩子的是利空打击和你看i速度和",
  replys: msReplys,
};

function CommentWithReplies({ children, postId }: CommentReplyListProps) {
  const [showReplyInputBox, setShowReplyInputBox] = useState(false);
  const [repliedUserName, setRepliedUserName] = useState("");

  function handleExpandMore() {
    console.log("expandMore");
  }

  function handleReply(repliedName: string) {
    console.log(repliedName);

    setShowReplyInputBox((isShow) => !isShow);
    setRepliedUserName(repliedName);
  }

  return (
    <CommentContext.Provider
      value={{ handleExpandMore, handleReply, postId, replys }}
    >
      <StyledComment>
        <StyledFlexForHeader>
          <StyledUserName>{commentUserName}</StyledUserName>
          <StyledDate>{commentDate}</StyledDate>
        </StyledFlexForHeader>
        <StyledFlexForMainContent>
          <StyledCommentContent>{commentContent}</StyledCommentContent>
          <ReplyButton handleReply={() => handleReply(commentUserName)} />
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

function useCommentContext() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useCommentContext must be used within CommentContext");
  }
  return context;
}

CommentWithReplies.ReplyList = CommentReplyList;

export default CommentWithReplies;
