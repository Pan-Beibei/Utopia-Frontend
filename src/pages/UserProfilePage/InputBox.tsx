import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledInputBox = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
`;

const StyledTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.gray500};
`;

function InputBox() {
  return (
    <StyledInputBox>
      <StyledTitle>用户名</StyledTitle>
      <StyledInput type="text" placeholder="妍妍" disabled />
    </StyledInputBox>
  );
}

export default InputBox;
