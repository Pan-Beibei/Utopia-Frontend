import styled, { css } from "styled-components";
import { useState, createContext, useContext } from "react";
import { NavLink } from "react-router-dom";


const StyledNavLinks = styled.ul<{ $direction?: string }>`
  ${(props) => css`
    flex-direction: ${props.$direction ? props.$direction : "column"};
  `}
  display: flex;
  // flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  // font-weight: 400;
`;

const StyledNavBg = styled.div`
  background-color: var(--primary-color);
  color: #000;
  width: 25rem;
  height: 20rem;
  position: absolute;
  top: 4rem;
  right: 0;

  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

const StyledToggle = styled.div`
  position: relative;
`;

const StyledImportantSpan = styled.span`
  background-color: var(--second-color);
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

type ContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const NavLinkContext = createContext<ContextType | null>(null);

interface NavLinksProps {
  children: React.ReactNode;
}

function NavLinks({ children }: NavLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <NavLinkContext.Provider value={{ isOpen, open, close }}>
      {children}
    </NavLinkContext.Provider>
  );
}

interface ToggleProps {
  children: React.ReactNode;
}

function Toggle({ children }: ToggleProps) {
  const context = useContext(NavLinkContext);
  if (!context) {
    return null;
  }
  const { isOpen, open, close } = context;

  //e: React.MouseEvent<HTMLDivElement, MouseEvent>
  function handleClick() {
    // console.log(e);

    if (isOpen) {
      close();
      // console.log("close");
    } else {
      open();
      // console.log("open");
    }
  }

  return (
    <StyledToggle onClick={handleClick}>
      {isOpen ? (
        <img src="./icons/close.svg" alt="menu" />
      ) : (
        <img src="./icons/hamburger.svg" alt="menu" />
      )}

      {children}
    </StyledToggle>
  );
}

interface NavBgProps {
  children: React.ReactNode;
}

function NavBg({ children }: NavBgProps) {
  const context = useContext(NavLinkContext);
  if (!context) {
    return null;
  }
  const { isOpen } = context;
  if (!isOpen) return null;

  return <StyledNavBg>{children}</StyledNavBg>;
}

interface LinksProps {
  direction?: string;
}

function Links({ direction }: LinksProps) {
  return (
    <StyledNavLinks $direction={direction}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {/* <StyledNavLink to="/peripheral-products">咖啡馆周边</StyledNavLink> */}
      {/* <StyledNavLink to="/tourist-attractions">小众景点</StyledNavLink> */}
      <StyledNavLink to="/hotel-info">咖啡馆房间</StyledNavLink>
      <StyledNavLink to="/activity-info">
        <StyledImportantSpan> 活动</StyledImportantSpan>
      </StyledNavLink>

      {/* <StyledNavLink to="/member-login">会员登录</StyledNavLink> */}
    </StyledNavLinks>
  );
}

NavLinks.Toggle = Toggle;
NavLinks.NavBg = NavBg;
NavLinks.Links = Links;

export default NavLinks;
