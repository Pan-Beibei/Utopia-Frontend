import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import InputBox from "./InputBox";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 2rem;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

function UserBasicInfo() {
  return (
    <StyledContainer>
      <StyledTitle>基本信息</StyledTitle>
      <InputBox />
      <InputBox />
    </StyledContainer>
  );
}

export default UserBasicInfo;
