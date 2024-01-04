import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledProfileViewControls = styled(BaseFlex)`
  gap: 2.5rem;
  justify-content: flex-start;
  font-size: 2.4rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 0.7rem;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

function ProfileViewControls() {
  return (
    <StyledProfileViewControls>
      <StyledButton>个人信息</StyledButton>
      <StyledButton>我的预约</StyledButton>
    </StyledProfileViewControls>
  );
}

export default ProfileViewControls;
