import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledInputBox = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 0.2rem;
  width: 100%;
`;

const StyledTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.gray300};
  // flex: 1;
`;

interface InputBoxProps {
  title: string;
  placeholder: string;
  disabled?: boolean;
}

function InputBox({ title, placeholder, disabled }: InputBoxProps) {
  return (
    <StyledInputBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledInput type="text" placeholder={placeholder} disabled={disabled} />
    </StyledInputBox>
  );
}

export default InputBox;
