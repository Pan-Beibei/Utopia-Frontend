import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Rum Raisin", cursive;
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.256rem;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 4.8rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 9.6rem;
  }
`;

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default SectionTitle;
