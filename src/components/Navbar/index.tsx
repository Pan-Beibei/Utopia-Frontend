import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import NavLinks from "./NavLinks";
import { BaseFlex } from "../../styles/BaseStyles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getUnreadNotificationsCount } from "../../services/api/notification";
import {
  getNotificationCount,
  setNotificationCount,
} from "../../services/state/userSlice";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const StyledNarbar = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  height: 5.6rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.25) inset;
`;

const StyledContainer = styled(BaseFlex)`
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 4.8rem;
  }
`;

const StyledNavMobile = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StyledNavTable = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const StyledLoginButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.6rem 0.8rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.2rem 1.6rem;
  }
`;

const StyledHeader = styled.div<{ $count: number }>`
  position: relative;

  &::after {
    content: "${(props) => props.$count}";
    display: ${(props) => (props.$count > 0 ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -0.5rem;
    bottom: 0rem;
    background-color: red;
    color: white;
    padding: 1px 1px;
    width: 1.5rem;
    height: 1.5rem;
    white-space: nowrap;
    border-radius: 50%;
    font-size: 0.8rem;
  }
`;

function LangComponent() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("zh")}>中文</button>
    </div>
  );
}

function Narbar() {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage("token");
  const dispatch = useDispatch();
  const notificationCount = useSelector(getNotificationCount);
  const { t } = useTranslation();

  const token: string = getItem();
  const { data, error } = useQuery(
    "unreadNotificationsCount",
    () => getUnreadNotificationsCount(),
    {
      enabled: !!token,
      refetchInterval: 60000, // 每60秒重新获取数据
    }
  );
  useEffect(() => {
    if (data?.code === "success") {
      console.log("新消息： ", data.data);
      dispatch(setNotificationCount(data.data));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, data, error]);

  function handleNavigateToUserProfilePage() {
    navigate("/user-profile-page");
  }

  function handleNavigateToLoginPage() {
    navigate("/login-page");
  }

  return (
    <StyledNarbar>
      <Logo />
      <LangComponent />
      <StyledContainer>
        <StyledNavMobile>
          <NavLinks>
            <NavLinks.Toggle>
              <NavLinks.NavBg>
                <NavLinks.Links />
              </NavLinks.NavBg>
            </NavLinks.Toggle>
          </NavLinks>
        </StyledNavMobile>
        <StyledNavTable>
          <NavLinks.Links />
        </StyledNavTable>
        {token ? (
          <StyledHeader $count={notificationCount}>
            <img
              src="/icons/head.svg"
              alt="Head"
              onClick={handleNavigateToUserProfilePage}
            />
          </StyledHeader>
        ) : (
          <StyledLoginButton onClick={handleNavigateToLoginPage}>
            {t("navbar.login")}
          </StyledLoginButton>
        )}
      </StyledContainer>
    </StyledNarbar>
  );
}

export default Narbar;
