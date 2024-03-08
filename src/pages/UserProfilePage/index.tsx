import { useState } from "react";
import styled from "styled-components";

import ProfileViewControls from "./ProfileViewControls";
import { UserViewType, UserViewEnum } from "./UserProfileCommon";
import { BaseColumnFlex } from "../../styles/BaseStyles";

import UserBasicInfoView from "./UserBasicInfoView";
import NotificationView from "./NotificationView";

const StyledUserProfilePage = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 7.6rem 2rem;
  }
`;

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.8rem;
  padding: 7.6rem 0rem 2rem 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 2rem;
  }
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
        {UserViewEnum.USER_INFO === viewType && <UserBasicInfoView />}
        {UserViewEnum.MESSAGE === viewType && <NotificationView />}
      </StyledContainer>
    </StyledUserProfilePage>
  );
}

export default UserProfilePage;
