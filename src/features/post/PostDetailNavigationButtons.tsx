import styled, { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowSvg from "../../ui/ArrowSvg";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseFlex)`
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

const StyledReturnButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border: none;
`;

const StyledFlex = styled(BaseFlex)`
  gap: 0.5rem;
`;

const StyledTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`;

interface PostDetailNavigationButtonsProps {
  lastTitle: string;
  nextTitle: string;
}

function PostDetailNavigationButtons({
  lastTitle,
  nextTitle,
}: PostDetailNavigationButtonsProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  const boxShadow = "0px 2px 0px 0px rgba(0, 0, 0, 0.15)";

  function handleReturnToForumPage() {
    navigate("/forum-page");
  }

  return (
    <StyledContainer>
      <StyledFlex>
        <ArrowSvg
          leftOrRight="right"
          bgColor={theme.colors.white}
          boxShadow={boxShadow}
        />
        <StyledTitle>上一篇: {lastTitle}</StyledTitle>
      </StyledFlex>
      <StyledReturnButton onClick={handleReturnToForumPage}>
        返回论坛主页
      </StyledReturnButton>
      <StyledFlex>
        <StyledTitle>下一篇: {nextTitle}</StyledTitle>
        <ArrowSvg
          leftOrRight="left"
          bgColor={theme.colors.white}
          boxShadow={boxShadow}
        />
      </StyledFlex>
    </StyledContainer>
  );
}

export default PostDetailNavigationButtons;
