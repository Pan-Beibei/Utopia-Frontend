import styled from "styled-components";
import Tag from "./Tag";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";

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

function TagList() {
  return (
    <StyledContainer>
      <StyledSelectTag>选择标签</StyledSelectTag>
      <StyledTagList>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Tag key={index} name="划水吐槽" />
          ))}
      </StyledTagList>
    </StyledContainer>
  );
}

export default TagList;
