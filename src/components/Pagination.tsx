import { ReactNode, createContext, useContext } from "react";
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
  previousPage: () => void;
  nextPage: () => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  pageCount: number;
  buttonsToShow: number;
};

const PaginationContext = createContext<ContextType | null>(null);

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  children: ReactNode;
  postCount: number;
  postsPerPage: number;
  buttonsToShow: number;
}

function PreviousButton() {
  const context = useContext(PaginationContext);
  const theme = useTheme();
  if (!context) {
    return null;
  }
  const { previousPage } = context;

  return (
    <StyledArrowButton onClick={previousPage}>
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
  const { nextPage } = context;
  return (
    <StyledArrowButton onClick={nextPage}>
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

  const { currentPage, buttonsToShow, setCurrentPage } = context;
  const pages = Array.from({ length: buttonsToShow }, (_, i) => i + 1);

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

function Pagination({
  children,
  postCount,
  currentPage,
  setCurrentPage,
  postsPerPage,
  buttonsToShow,
}: PaginationProps) {
  const totalPages = Math.ceil(postCount / postsPerPage);
  const pagesToShow = Math.min(totalPages, buttonsToShow);

  function previousPage() {
    const pageCount = Math.max(currentPage - 1, 1);
    if (pageCount === currentPage) {
      console.log("到达第一页");

      return;
    }
    setCurrentPage(pageCount);
  }

  function nextPage() {
    const pageCount = Math.min(
      currentPage + 1,
      Math.ceil(postCount / postsPerPage)
    );
    if (pageCount === currentPage) {
      console.log("到达最后一页");

      return;
    }
    setCurrentPage(pageCount);
  }

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        previousPage,
        nextPage,
        setCurrentPage,
        pageCount: totalPages,
        buttonsToShow: pagesToShow,
      }}
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
