import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProfileViewControls from "./ProfileViewControls";
import UserBasicInfo from "./UserBasicInfo";
import { UserViewType, UserViewEnum } from "./UserProfileCommon";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { clearUser } from "../../services/state/userSlice";
import { useDispatch } from "react-redux";

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

const StyledLogoutButton = styled.button`
  background-color: #f44336; // Red background
  color: white; // White text
  padding: 10px 24px; // Some padding
  cursor: pointer; // Cursor pointer on hover
  border: none; // Remove border
  border-radius: 5px; // Rounded corners
  font-size: 16px; // Increase font size

  &:hover {
    background-color: #d32f2f; // Darker red on hover
  }
`;

function UserProfilePage() {
  const [viewType, setViewType] = useState<UserViewType>(
    UserViewEnum.USER_INFO
  );
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage("token");
  const dispatch = useDispatch();

  function handleViewTypeChange(viewType: UserViewType) {
    setViewType(viewType);
  }

  function handleLogout() {
    removeItem();
    dispatch(clearUser(null));
    navigate("/");
  }

  return (
    <StyledUserProfilePage>
      <StyledContainer>
        <ProfileViewControls
          viewType={viewType}
          handleViewTypeChange={handleViewTypeChange}
        />
        <UserBasicInfo />
        <StyledLogoutButton onClick={handleLogout}>退出登录</StyledLogoutButton>
      </StyledContainer>
    </StyledUserProfilePage>
  );
}

export default UserProfilePage;
