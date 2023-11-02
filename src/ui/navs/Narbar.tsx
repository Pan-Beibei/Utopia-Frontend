import styled from "styled-components";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import SwitchThemeButton from "../../themes/ThemeContext";

const StyledNarbar = styled.nav`
  display: flex;
  background-color: var(--primary-color);
  height: 10rem;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  opacity: 0.7;
`;

const StyledNavMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledNavTable = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Narbar() {
  return (
    <StyledNarbar>
      <Logo />
      <StyledRow>
        <SwitchThemeButton />
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
          <NavLinks.Links direction="row" />
        </StyledNavTable>
      </StyledRow>
    </StyledNarbar>
  );
}

export default Narbar;
