import styled from "styled-components";
import ProfileViewControls from "./ProfileViewControls";
import UserBasicInfo from "./UserBasicInfo";

const StyledUserProfilePage = styled.div`
  padding: 7.6rem 2rem;
`;

const StyledContainer = styled.div`
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

function UserProfilePage() {
  return (
    <StyledUserProfilePage>
      <StyledContainer>
        <ProfileViewControls />
        <UserBasicInfo />
      </StyledContainer>
    </StyledUserProfilePage>
  );
}

export default UserProfilePage;
