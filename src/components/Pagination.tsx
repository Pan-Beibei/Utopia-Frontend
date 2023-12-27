import { ReactNode, createContext, useState, useContext } from "react";
import styled, { useTheme, css } from "styled-components";
import { BaseFlex } from "../styles/BaseStyles";
import ArrowSvg from "./ui/ArrowSvg";

const StyledContainer = styled(BaseFlex)`
  gap: 1.5rem;
  background-color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledArrowButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;

const StyledPageList = styled(BaseFlex)`
  gap: 0.5rem;
`;

const StyledPageButton = styled.button<{ $selected: boolean }>`
  border-radius: 50%;
  border: none;
  width: 2.4rem;
  height: 2.4rem;

  ${(props) => css`
    background-color: ${props.$selected
      ? props.theme.colors.primary
      : props.theme.colors.white};
    color: ${props.$selected
      ? props.theme.colors.white
      : props.theme.colors.black};
  `}
`;

type ContextType = {
  previous: () => void;
  next: () => void;
  setCurrentPage: (index: number) => void;
  currentPage: number;
  pageCount: number;
};

const PaginationContext = createContext<ContextType | null>(null);

interface PaginationProps {
  children: ReactNode;
  pageCount: number;
}

function PreviousButton() {
  const context = useContext(PaginationContext);
  const theme = useTheme();
  if (!context) {
    return null;
  }
  const { previous } = context;

  return (
    <StyledArrowButton onClick={previous}>
      <ArrowSvg
        leftOrRight="right"
        bgColor={theme.colors.primary}
        fillColor={theme.colors.white}
      />
    </StyledArrowButton>
  );
}

function NextButton() {
  const context = useContext(PaginationContext);
  const theme = useTheme();
  if (!context) {
    return null;
  }
  const { next } = context;
  return (
    <StyledArrowButton onClick={next}>
      <ArrowSvg
        leftOrRight="left"
        bgColor={theme.colors.primary}
        fillColor={theme.colors.white}
      />
    </StyledArrowButton>
  );
}

function PageIndicator() {
  const context = useContext(PaginationContext);

  if (!context) {
    return null;
  }
  const { currentPage, pageCount } = context;

  return (
    <div>
      {currentPage}/{pageCount}页
    </div>
  );
}

function PageList() {
  const context = useContext(PaginationContext);

  if (!context) {
    return null;
  }

  const { currentPage, setCurrentPage } = context;

  const pages = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <StyledPageList>
      {pages.map((page) => (
        <StyledPageButton
          key={page}
          onClick={() => setCurrentPage(page)}
          $selected={page === currentPage}
        >
          {page}
        </StyledPageButton>
      ))}
    </StyledPageList>
  );
}

function Pagination({ children, pageCount }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  function previous() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function next() {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, previous, next, pageCount }}
    >
      <StyledContainer>{children}</StyledContainer>
    </PaginationContext.Provider>
  );
}

Pagination.PreviousButton = PreviousButton;
Pagination.NextButton = NextButton;
Pagination.PageList = PageList;
Pagination.PageIndicator = PageIndicator;

export default Pagination;
