import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledTopCard = styled(BaseColumnFlex)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.6rem;
  border-radius: 0.8rem;
`;

const StyledTopCardImg = styled.img`
  width: 100%;
  border-radius: 0.8rem;
  min-height: 8.6rem;
`;

const StyledTopCardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  letter-spacing: 0.7px;
  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

const StyledTitleMobile = styled(StyledTopCardTitle)`
  @media (min-width: 834px) {
    display: none;
  }
`;

const StyledTitleTablet = styled(StyledTopCardTitle)`
  display: none;
  @media (min-width: 834px) {
    display: block;
  }
`;

const StyledTopCardText = styled.p`
  padding-top: 1.6rem;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  letter-spacing: 0.7px;
  justify-self: flex-end;
  @media (min-width: 834px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`;

const StyledFlex = styled(BaseColumnFlex)`
  gap: 1rem;
  align-items: flex-start;
`;

function ForumIntroduction() {
  const imgUrl =
    "http://localhost:3000/uploads/2023-12-05/pictures-1701721797209-14644653.jpg";

  return (
    <StyledTopCard>
      <StyledFlex>
        <StyledTitleMobile>68克情报处</StyledTitleMobile>
        <StyledTopCardImg src={imgUrl} alt="Top card image" />
      </StyledFlex>

      <StyledFlex>
        <StyledTitleTablet>68克情报处</StyledTitleTablet>
        <StyledTopCardText>
          简单介绍一下可以发布的内容，以及创办这个论坛的初衷今安徽省东部根据会议王国是不KFC今后工作卡聚会的改编成客户给本文首发的常客计划
        </StyledTopCardText>
      </StyledFlex>
    </StyledTopCard>
  );
}

export default ForumIntroduction;
