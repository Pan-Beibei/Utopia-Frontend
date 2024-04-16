import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import InputBox from "./InputBox";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { clearUser } from "../../services/state/userSlice";
import { useDispatch } from "react-redux";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
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

function UserBasicInfo() {
  const { user } = useFetchUser();
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage("token");
  const dispatch = useDispatch();

  if (!user) {
    return (
      <StyledLogoutButton onClick={handleLogout}>退出登录</StyledLogoutButton>
    );
  }

  function handleLogout() {
    removeItem();
    dispatch(clearUser(null));
    navigate("/");
  }

  return (
    <StyledContainer>
      <StyledTitle>基本信息</StyledTitle>
      <InputBox title="用户名" placeholder={user.username} disabled={true} />
      <InputBox title="生日" placeholder={user.birthday} disabled={true} />
      <InputBox
        title="性别"
        placeholder={user.gender === "0" ? "女" : "男"}
        disabled={true}
      />
      <InputBox title="电话" placeholder={user.phone} disabled={true} />

      <StyledLogoutButton onClick={handleLogout}>退出登录</StyledLogoutButton>
    </StyledContainer>
  );
}

export default UserBasicInfo;
