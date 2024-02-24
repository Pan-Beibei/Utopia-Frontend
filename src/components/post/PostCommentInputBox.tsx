import { useState } from "react";
import styled, { useTheme } from "styled-components";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { BaseFlex } from "../../styles/BaseStyles";
import EmojiPicker from "../EmojiPicker";
import EmojiTextInput from "../EmojiTextInput";
import { createComment } from "../../services/api/comment";
import { useFetchUser } from "../../hooks/useFetchUser";

const StyledContainer = styled(BaseFlex)`
  justify-content: space-between;
  gap: 5rem;
  position: relative;
  width: 100%;
`;

const StyledEmojiContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
`;

const StyledPulishButton = styled(BaseFlex)`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  transform: rotate(45deg);
  min-width: 4rem;
  min-height: 4rem;
`;

interface PostCommentInputBoxProps {
  postId: string;
}

function PostCommentInputBox({ postId }: PostCommentInputBoxProps) {
  const [inputContent, setInputContent] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const theme = useTheme();
  const { user } = useFetchUser();
  const queryClient = useQueryClient();

  const mutation = useMutation(createComment, {
    onSuccess: (data) => {
      console.log(data);
      toast.success("评论已发布");
      queryClient.invalidateQueries(["comments", postId]);
      setInputContent("");
    },
    onError: (error) => {
      console.log(error);
      toast.error("发布评论失败");
    },
  });

  function handlePublish() {
    if (!user) {
      toast.error("请先登录");
      return;
    }
    console.log("publish");
    mutation.mutate({
      content: inputContent,
      postId: postId,
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
        backgroundColor={theme.colors.gray300}
        fontColor={theme.colors.black}
        placeholder="评论..."
      />
      <StyledPulishButton onClick={handlePublish}>
        <img src="/icons/fly.svg" alt="fly icon" />
      </StyledPulishButton>
    </StyledContainer>
  );
}

export default PostCommentInputBox;
