import styled from "styled-components";
import Logo from "../../ui/Logo";
import NavLinks from "./NavLinks";
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
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: cneter;
  gap: 2rem;
`;

const StyledNavMobile = styled.div`
  @media (min-width: 834px) {
    display: none;
  }
`;

const StyledNavTable = styled.div`
  display: none;
  @media (min-width: 834px) {
    display: block;
  }
`;

function Narbar() {
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
        <img src="./icons/login.svg" alt="Login button" />
      </StyledContainer>
    </StyledNarbar>
  );
}

export default Narbar;
