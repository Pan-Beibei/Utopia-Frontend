import styled from "styled-components";
import SearchPosts from "./SearchPosts";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 2rem;
  width: 100%;
  height: 100vh;
`;

const StyledButton = styled.button`
  padding: 1.2rem 1.6rem;
  border: none;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

const StyledFlex = styled(BaseFlex)`
  justify-content: space-between;
`;

function ForumLayout() {
  return (
    <StyledContainer>
      <StyledFlex>
        <SearchPosts />
        <StyledButton>发帖</StyledButton>
      </StyledFlex>
    </StyledContainer>
  );
}

export default ForumLayout;
