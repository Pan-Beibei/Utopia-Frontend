import { useState } from "react";
import styled, { useTheme } from "styled-components";
import EmojiTextInput from "../EmojiTextInput";
import EmojiPicker from "../EmojiPicker";
import { BaseFlex } from "../../styles/BaseStyles";
import { createComment } from "../../services/api/comment";
import { useFetchUser } from "../../hooks/useFetchUser";
import toast from "react-hot-toast";

const StyledContainer = styled(BaseFlex)`
  position: relative;
  gap: 1rem;
  width: 100%;
`;

const StyledEmojiContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0rem;
`;

const StyledPulishButton = styled(BaseFlex)`
  padding: 8px 10px;
  background-color: rgba(204, 153, 90, 0.34);

  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.primary};
`;

interface CommentReplyInputBoxProps {
  postId: string;
  parentId: string;
  replyToId: string;
  repliedUserName: string;
}

function CommentReplyInputBox({
  postId,
  parentId,
  replyToId,
  repliedUserName,
}: CommentReplyInputBoxProps) {
  const [inputContent, setInputContent] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { user } = useFetchUser();
  const theme = useTheme();

  const placeholderText = `回复 @${repliedUserName}`;

  function handlePublish() {
    if (!user) {
      toast.error("请先登录");
      return;
    }
    console.log("publish");
    if (!parentId) parentId = replyToId;

    // console.log("parentId:", parentId);
    // console.log("replyToId:", replyToId);

    // return;
    createComment({
      content: inputContent,
      postId,
      parentId,
      replyToId,
    })
      .then((res) => {
        console.log(res);
        if (res.code !== "success") {
          return;
        }
        toast.success("评论已发布");
        setInputContent("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("发布评论失败");
      });
  }

  return (
    <StyledContainer>
      {showPicker && (
        <StyledEmojiContainer>
          <EmojiPicker setInputContent={setInputContent} />
        </StyledEmojiContainer>
      )}
      <EmojiTextInput
        inputContent={inputContent}
        setInputContent={setInputContent}
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        placeholder={placeholderText}
        backgroundColor="transparent"
        fontColor={theme.colors.gray400}
        border="1px solid rgba(142, 142, 142, 0.6)"
      />
      <StyledPulishButton onClick={handlePublish}>发布</StyledPulishButton>
    </StyledContainer>
  );
}

export default CommentReplyInputBox;
