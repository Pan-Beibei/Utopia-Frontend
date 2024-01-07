import styled from "styled-components";

const StyledTagButton = styled.div`
  padding: 1.2rem 1.6rem;
  border-radius: 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return <StyledTagButton>{name}</StyledTagButton>;
}

export default Tag;
