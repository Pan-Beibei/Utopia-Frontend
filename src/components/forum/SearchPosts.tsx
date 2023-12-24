import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseFlex)`
  flex-grow: 1;
  gap: 1rem;

  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 3.6rem;
  padding: 0.5rem 1rem;

  letter-spacing: 0.7px;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: transparent;
  border: none;
`;

const StyledSearchButton = styled.button`
  padding: 0.6rem 0.8rem;
  min-width: 4.5rem;
  border: none;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.15);
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.primary};
`;

const StyledImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

function SearchPosts() {
  return (
    <StyledContainer>
      <StyledImg src="/icons/search.svg" alt="Search posts" />
      <StyledInput placeholder="请输入关键词搜索..." />
      <StyledSearchButton>搜索</StyledSearchButton>
    </StyledContainer>
  );
}

export default SearchPosts;
