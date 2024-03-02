import styled, { css } from "styled-components";

const StyledInputContainer = styled.div<{
  $bgColor?: string;
  $border?: string;
}>`
  ${(props) => css`
    background-color: ${props.$bgColor
      ? props.$bgColor
      : props.theme.colors.gray500};
    border: ${props.$border ? props.$border : "none"};
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 0.1rem;
  padding: 0.4rem 1.6rem;
  min-height: 4rem;
  border-radius: 6rem;
  flex: 1;
`;

const StyledInputText = styled.input<{ $fontColor?: string }>`
  ${(props) => css`
    color: ${props.$fontColor ? props.$fontColor : props.theme.colors.white};
    &::placeholder {
      color: ${props.$fontColor ? props.$fontColor : props.theme.colors.white};
    }
  `}
  flex: 1;
  max-width: 70%;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 100%;
  &:focus {
    outline: none;
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
  placeholder: string;
  backgroundColor?: string;
  fontColor?: string;
  border?: string;
}

function EmojiTextInput({
  inputContent,
  setInputContent,
  showPicker,
  setShowPicker,
  backgroundColor,
  fontColor,
  placeholder,
  border,
}: EmojiTextInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  // console.log(fontColor);

  return (
    <StyledInputContainer $bgColor={backgroundColor} $border={border}>
      <StyledInputText
        type="text"
        value={inputContent}
        onChange={handleInputChange}
        placeholder={placeholder}
        $fontColor={fontColor}
      ></StyledInputText>
      <StyledEmojiButton onClick={() => setShowPicker(!showPicker)}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.375 8.625C6.67337 8.625 6.95952 8.50647 7.1705 8.2955C7.38147 8.08452 7.5 7.79837 7.5 7.5C7.5 7.20163 7.38147 6.91548 7.1705 6.7045C6.95952 6.49353 6.67337 6.375 6.375 6.375C6.07663 6.375 5.79048 6.49353 5.5795 6.7045C5.36853 6.91548 5.25 7.20163 5.25 7.5C5.25 7.79837 5.36853 8.08452 5.5795 8.2955C5.79048 8.50647 6.07663 8.625 6.375 8.625ZM6.204 11.5005C6.1386 11.4261 6.0591 11.3653 5.9701 11.3218C5.88109 11.2783 5.78435 11.2528 5.68545 11.2469C5.58655 11.241 5.48746 11.2547 5.3939 11.2873C5.30033 11.3199 5.21415 11.3707 5.14034 11.4368C5.06652 11.5029 5.00653 11.5829 4.96384 11.6723C4.92114 11.7617 4.89657 11.8587 4.89157 11.9577C4.88656 12.0566 4.90121 12.1556 4.93467 12.2488C4.96813 12.3421 5.01973 12.4278 5.0865 12.501C5.57865 13.0519 6.18174 13.4926 6.85621 13.794C7.53067 14.0954 8.26125 14.2508 9 14.25C9.73875 14.2508 10.4693 14.0954 11.1438 13.794C11.8183 13.4926 12.4214 13.0519 12.9135 12.501C13.044 12.3525 13.1106 12.1584 13.0988 11.9611C13.0869 11.7637 12.9977 11.579 12.8504 11.4472C12.7031 11.3153 12.5097 11.2469 12.3122 11.2569C12.1148 11.2669 11.9292 11.3544 11.796 11.5005C11.4446 11.8944 11.0138 12.2094 10.5318 12.4247C10.0499 12.6401 9.52785 12.7509 9 12.75C7.89 12.75 6.8925 12.2685 6.204 11.5005ZM12.75 7.5C12.75 7.79837 12.6315 8.08452 12.4205 8.2955C12.2095 8.50647 11.9234 8.625 11.625 8.625C11.3266 8.625 11.0405 8.50647 10.8295 8.2955C10.6185 8.08452 10.5 7.79837 10.5 7.5C10.5 7.20163 10.6185 6.91548 10.8295 6.7045C11.0405 6.49353 11.3266 6.375 11.625 6.375C11.9234 6.375 12.2095 6.49353 12.4205 6.7045C12.6315 6.91548 12.75 7.20163 12.75 7.5ZM18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 0 9 0C7.8181 0 6.64778 0.232792 5.55585 0.685084C4.46392 1.13738 3.47177 1.80031 2.63604 2.63604C1.80031 3.47177 1.13738 4.46392 0.685084 5.55585C0.232792 6.64778 -1.76116e-08 7.8181 0 9C3.55683e-08 11.3869 0.948211 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9ZM1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C10.9891 1.5 12.8968 2.29018 14.3033 3.6967C15.7098 5.10322 16.5 7.01088 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5C7.01088 16.5 5.10322 15.7098 3.6967 14.3033C2.29018 12.8968 1.5 10.9891 1.5 9Z"
            fill={fontColor ? fontColor : "white"}
          />
        </svg>
      </StyledEmojiButton>
    </StyledInputContainer>
  );
}

export default EmojiTextInput;
