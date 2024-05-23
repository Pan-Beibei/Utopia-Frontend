import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import InputBox from "./InputBox";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { clearUser } from "../../services/state/userSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

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
  const { t } = useTranslation();

  if (!user) {
    return (
      <StyledLogoutButton onClick={handleLogout}>
        {t("personalCenter.logout")}
      </StyledLogoutButton>
    );
  }

  function handleLogout() {
    removeItem();
    dispatch(clearUser(null));
    navigate("/");
  }

  return (
    <StyledContainer>
      <StyledTitle> {t("personalCenter.basicInfo")}</StyledTitle>
      <InputBox
        title={t("personalCenter.userName")}
        placeholder={user.username}
        disabled={true}
      />
      <InputBox
        title={t("personalCenter.birthday")}
        placeholder={user.birthday}
        disabled={true}
      />
      {i18n.language === "zh" ? (
        <InputBox
          title="性别"
          placeholder={user.gender === "0" ? "女" : "男"}
          disabled={true}
        />
      ) : null}

      <InputBox
        title={t("personalCenter.phone")}
        placeholder={user.phone}
        disabled={true}
      />

      <StyledLogoutButton onClick={handleLogout}>
        {t("personalCenter.logout")}
      </StyledLogoutButton>
    </StyledContainer>
  );
}

export default UserBasicInfo;
