import { useState } from "react";
import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";
import EmojiPicker from "../../ui/EmojiPicker";
import EmojiTextInput from "../../ui/EmojiTextInput";

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
      />
      <StyledPulishButton>
        <img src="/icons/fly.svg" alt="fly" />
      </StyledPulishButton>
    </StyledContainer>
  );
}

export default PostCommentInputBox;
