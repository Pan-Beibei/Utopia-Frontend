import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../styles/BaseStyles";

const StyledSeries = styled(BaseColumnFlex)`
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: flex-start;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

const StyledSeriesTitle = styled(BaseFlex)`
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledIcon = styled.img`
  width: 2.6rem;
  height: 2.6rem;
`;

const StyledDrinksList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  row-gap: 1.5rem;
  column-gap: 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface DrinkSeriesProps {
  seriesName: string;
  iconUrl: string;
  children: React.ReactNode;
}

function DrinkSeries({ seriesName, iconUrl, children }: DrinkSeriesProps) {
  return (
    <StyledSeries>
      <StyledSeriesTitle>
        <StyledIcon src={iconUrl} alt="icon" />
        <span>{seriesName}</span>
      </StyledSeriesTitle>
      <StyledDrinksList>{children}</StyledDrinksList>
    </StyledSeries>
  );
}

export default DrinkSeries;
