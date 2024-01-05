import { useState } from "react";
import styled from "styled-components";
import ProfileViewControls from "./ProfileViewControls";
import UserBasicInfo from "./UserBasicInfo";
import { UserViewType, UserViewEnum } from "./UserProfileCommon";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledUserProfilePage = styled.div`
  padding: 7.6rem 2rem;
`;

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

function UserProfilePage() {
  const [viewType, setViewType] = useState<UserViewType>(
    UserViewEnum.USER_INFO
  );

  function handleViewTypeChange(viewType: UserViewType) {
    setViewType(viewType);
  }

  return (
    <StyledUserProfilePage>
      <StyledContainer>
        <ProfileViewControls
          viewType={viewType}
          handleViewTypeChange={handleViewTypeChange}
        />
        <UserBasicInfo />
      </StyledContainer>
    </StyledUserProfilePage>
  );
}

export default UserProfilePage;
