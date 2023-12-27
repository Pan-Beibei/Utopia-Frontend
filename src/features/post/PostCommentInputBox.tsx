import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";
import EmojiPicker from "../../components/EmojiPicker";
import EmojiTextInput from "../../components/EmojiTextInput";

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

function PostCommentInputBox() {
  const [inputContent, setInputContent] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const theme = useTheme();

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
        fontColor="#A09A9E"
        placeholder="评论..."
      />
      <StyledPulishButton>
        <img src="/icons/fly.svg" alt="fly" />
      </StyledPulishButton>
    </StyledContainer>
  );
}

export default PostCommentInputBox;
