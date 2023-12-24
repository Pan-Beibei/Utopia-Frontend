import styled from "styled-components";

const StyledExpandButton = styled.span`
  color: rgba(0, 41, 79, 1);
  font-size: ${(props) => props.theme.fontSize.small};

  font-weight: ${(props) => props.theme.fontWeight.bold};
  align-self: flex-start;
`;

function CommentExpandMoreButton({ num }: { num: number }) {
  return <StyledExpandButton>展开{num}条回复</StyledExpandButton>;
}

export default CommentExpandMoreButton;
