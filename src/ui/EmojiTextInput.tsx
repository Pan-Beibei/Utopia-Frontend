import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray};
  gap: 0.1rem;
  padding: 0.4rem 1.6rem;
  min-height: 4rem;
  border-radius: 6rem;
  flex: 1;
`;

const StyledInputText = styled.input`
  flex: 1;
  max-width: 70%;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.white};
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledEmojiButton = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 2px;
  margin-left: 8px;
`;

interface EmojiTextInputProps {
  inputContent: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
}

function EmojiTextInput({
  inputContent,
  setInputContent,
  showPicker,
  setShowPicker,
}: EmojiTextInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  return (
    <StyledInputContainer>
      <StyledInputText
        type="text"
        value={inputContent}
        onChange={handleInputChange}
        placeholder="请输入弹幕..."
      ></StyledInputText>
      <StyledEmojiButton onClick={() => setShowPicker(!showPicker)}>
        <img src="/icons/emoji.svg" alt="emoji" />
      </StyledEmojiButton>
    </StyledInputContainer>
  );
}

export default EmojiTextInput;
