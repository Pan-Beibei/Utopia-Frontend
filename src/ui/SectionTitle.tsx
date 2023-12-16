import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Rum Raisin", cursive;
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.256rem;
  color: ${(props) => props.theme.colors.text};
`;

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default SectionTitle;
