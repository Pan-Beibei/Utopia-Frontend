import styled from "styled-components";
import { formatDateTime } from "../utils/conversionTime";
import { BaseColumnFlex } from "../styles/BaseStyles";
// import FoodCard from "./ProductCard";
import SectionTitle from "./ui/SectionTitle";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 0 2rem;
  gap: 2rem;
`;

const StyledFlex = styled(BaseColumnFlex)`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: start;
    align-items: stretch;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.6rem 3.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 0.7px;
  line-height: normal;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    heihgt: 100%;
  }
`;

const StyledCardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledCardContent = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 300;
`;

const StyledCardDate = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledBookingButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.2rem 1.6rem;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    opacity: 0.7;
    border: 1px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledFoodsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.8rem;
  row-gap: 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface ActivityCardProps {
  imgUrl: string;
  title: string;
  content: string;
  date: string;
}

function ActivityCard({ imgUrl, title, content, date }: ActivityCardProps) {
  return (
    <StyledContainer>
      <StyledFlex>
        <StyledImg src={imgUrl} alt="Background image" />
        <StyledCard>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardContent>{content}</StyledCardContent>
          <StyledCardDate>
            {"举办时间：" + formatDateTime(date) + "   六元咖啡馆"}
          </StyledCardDate>
          <StyledBookingButton>点击预约</StyledBookingButton>
        </StyledCard>
      </StyledFlex>

      <SectionTitle>Photo Record</SectionTitle>

      <StyledFoodsListContainer>
        {/* {Array(8)
          .fill(null)
          .map((_, index) => (
            <FoodCard key={index} width="15rem" height="15rem" imgUrl="" />
          ))} */}
      </StyledFoodsListContainer>
    </StyledContainer>
  );
}

export default ActivityCard;
