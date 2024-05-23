import i18n from "i18next";
import styled from "styled-components";
import { useState } from "react";
import BritishFlag from "./Flags/BritishFlag";
import ChinaFlag from "./Flags/ChinaFlag";

const StyledLangContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 999;
  font-size: 2rem;
  background-color: #fff;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
`;

const StyledInlineContainer = styled.div`
  padding: 0.5rem 1rem;
`;

const StyledUl = styled.ul<{ $isActive: boolean }>`
  position: relative;
  max-height: 24rem;
  display: ${(props) => (props.$isActive ? "block" : "none")};
`;

const StyledFlag = styled.li`
  padding: 0.5rem 0;
  display: flex;
  gap: 1.2rem;
`;

const StyledCurrentLang = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-weight: bold;
  gap: 1.2rem;
`;

function LanguageSwitcher() {
  const [isActive, setIsActive] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <StyledLangContainer onClick={handleClick}>
      <StyledInlineContainer>
        <StyledUl $isActive={isActive}>
          <StyledFlag onClick={() => changeLanguage("en")}>
            <BritishFlag />
            <span>EN</span>
          </StyledFlag>
          <StyledFlag onClick={() => changeLanguage("zh")}>
            <ChinaFlag />
            <span>ZH-CN</span>
          </StyledFlag>
        </StyledUl>
        <StyledCurrentLang>
          {i18n.language === "en" ? (
            <>
              <BritishFlag />
              <span>EN</span>
            </>
          ) : (
            <>
              <ChinaFlag />
              <span>ZH-CN</span>
            </>
          )}
        </StyledCurrentLang>
      </StyledInlineContainer>
    </StyledLangContainer>
  );
}

export default LanguageSwitcher;
