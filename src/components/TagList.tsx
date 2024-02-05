import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../styles/BaseStyles";
import { postTags } from "../types";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1.6rem;
`;

const StyledTagList = styled(BaseFlex)`
  gap: 1rem;
`;

const StyledSelectTag = styled.h4`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledTagButton = styled.div<{ $isSelected: boolean }>`
  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.primary : props.theme.colors.white};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.primary};
  padding: 1.2rem 1.6rem;
  border-radius: 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.primary};

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

interface TagListProps {
  tags: string[];
  handleSelectTag: (tag: string) => void;
}

function TagList({ tags, handleSelectTag }: TagListProps) {
  return (
    <StyledContainer>
      <StyledSelectTag>选择标签</StyledSelectTag>
      <StyledTagList>
        {postTags.map((tag) => (
          <StyledTagButton
            key={tag.id}
            onClick={() => handleSelectTag(tag.id)}
            $isSelected={tags.includes(tag.id)}
          >
            {tag.name}
          </StyledTagButton>
        ))}
      </StyledTagList>
    </StyledContainer>
  );
}

export default TagList;
