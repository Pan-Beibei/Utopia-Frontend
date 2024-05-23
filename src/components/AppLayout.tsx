import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LanguageSwitcher from "./LanguageSwitcher";

const StyledContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

const StyledFooter = styled.footer`
  padding-top: 5rem;
`;

function AppLayout() {
  return (
    <StyledContainer>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
      <LanguageSwitcher />
    </StyledContainer>
  );
}

export default AppLayout;
