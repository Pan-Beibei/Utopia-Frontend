import styled from "styled-components";
import Logo from "../Logo";
import NavLinks from "./NavLinks";

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

function Narbar() {
  return (
    <StyledNarbar>
      <Logo />
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
    </StyledNarbar>
  );
}

export default Narbar;
