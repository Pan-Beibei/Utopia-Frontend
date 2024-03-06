import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";
import { UserViewType, UserViewEnum } from "./UserProfileCommon";

const StyledProfileViewControls = styled(BaseFlex)`
  gap: 2.5rem;
  justify-content: flex-start;
  font-size: 2.4rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 0.7rem;
`;

const StyledButton = styled.button<{ $selected: boolean }>`
  border: none;
  background-color: transparent;
  color: ${(props) =>
    props.$selected ? props.theme.colors.primary : "inherit"};
`;

interface ProfileViewControlsProps {
  viewType: UserViewType;
  handleViewTypeChange: (viewType: UserViewType) => void;
}

function ProfileViewControls({
  viewType,
  handleViewTypeChange,
}: ProfileViewControlsProps) {
  return (
    <StyledProfileViewControls>
      <StyledButton
        $selected={viewType === UserViewEnum.USER_INFO}
        onClick={() => handleViewTypeChange(UserViewEnum.USER_INFO)}
      >
        个人信息
      </StyledButton>
      <StyledButton
        $selected={viewType === UserViewEnum.MESSAGE}
        onClick={() => handleViewTypeChange(UserViewEnum.MESSAGE)}
      >
        消息通知
      </StyledButton>
    </StyledProfileViewControls>
  );
}

export default ProfileViewControls;
