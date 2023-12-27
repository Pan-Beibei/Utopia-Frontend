import { useState } from "react";
import styled, { useTheme } from "styled-components";
import EmojiTextInput from "./EmojiTextInput";
import EmojiPicker from "./EmojiPicker";
import { BaseFlex } from "../../styles/BaseStyles";

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

interface ReplyInputBoxProps {
  repliedUserName: string;
}

function ReplyInputBox({ repliedUserName }: ReplyInputBoxProps) {
  const [inputContent, setInputContent] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const theme = useTheme();

  const placeholderText = `回复 @${repliedUserName}`;

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
      <StyledPulishButton>发布</StyledPulishButton>
    </StyledContainer>
  );
}

export default ReplyInputBox;
