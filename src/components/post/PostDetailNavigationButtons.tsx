import styled, { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowSvg from "../ui/ArrowSvg";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseFlex)`
  justify-content: flex-start;
  width: 100%;
  padding: 0 2rem;
`;

const StyledReturnIcon = styled.div``;

const StyledReturnButton = styled(BaseFlex)`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

function PostDetailNavigationButtons() {
  const navigate = useNavigate();
  const theme = useTheme();

  function handleReturnToForumPage() {
    navigate("/forum-page");
  }

  return (
    <StyledContainer>
      <StyledReturnButton onClick={handleReturnToForumPage}>
        <StyledReturnIcon>
          <ArrowSvg leftOrRight="right" bgColor={theme.colors.white} />
        </StyledReturnIcon>
        返回论坛主页
      </StyledReturnButton>
    </StyledContainer>
  );
}

export default PostDetailNavigationButtons;
