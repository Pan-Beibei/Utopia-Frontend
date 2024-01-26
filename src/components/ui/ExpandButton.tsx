import styled from "styled-components";

const StyledExpandButton = styled.span`
  color: rgba(0, 41, 79, 1);
  font-size: ${(props) => props.theme.fontSize.small};

  font-weight: ${(props) => props.theme.fontWeight.bold};
  align-self: flex-start;
`;

function ExpandCollapseButton({
  num,
  isExpanded = false,
  isAllExpanded = false,
  handleExpandMore,
  handleCollapseAll,
}: {
  num?: number;
  isExpanded?: boolean;
  isAllExpanded?: boolean;
  handleExpandMore?: () => void;
  handleCollapseAll?: () => void;
}) {
  return (
    <StyledExpandButton
      onClick={isAllExpanded ? handleCollapseAll : handleExpandMore}
    >
      {isAllExpanded
        ? "收起全部"
        : isExpanded
        ? "展开更多"
        : `展开${num}条回复`}
    </StyledExpandButton>
  );
}

export default ExpandCollapseButton;
