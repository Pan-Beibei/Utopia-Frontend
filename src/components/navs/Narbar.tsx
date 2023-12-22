import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";
import NavLinks from "./NavLinks";
import { BaseFlex } from "../../styles/BaseStyles";
// import SwitchThemeButton from "../../themes/ThemeContext";

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
  padding: 0.4rem 0.6rem;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

function Narbar() {
  const navigate = useNavigate();
  function handleNavigateToLoginPage() {
    navigate("/login-page");
  }

  return (
    <StyledNarbar>
      <Logo />
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
        <StyledLoginButton onClick={handleNavigateToLoginPage}>
          登录
        </StyledLoginButton>
      </StyledContainer>
    </StyledNarbar>
  );
}

export default Narbar;
