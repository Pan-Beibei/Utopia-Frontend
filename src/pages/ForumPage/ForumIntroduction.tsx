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
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 3.2rem;
  }
`;

const StyledTitleMobile = styled(StyledTopCardTitle)`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StyledTitleTablet = styled(StyledTopCardTitle)`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const StyledTopCardText = styled.p`
  padding-top: 1.6rem;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  letter-spacing: 0.7px;
  justify-self: flex-end;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`;

const StyledFlex = styled(BaseColumnFlex)`
  gap: 1rem;
  align-items: flex-start;
`;

function ForumIntroduction() {
  const imgUrl = "/images/chatbg.jpg";

  return (
    <StyledTopCard>
      <StyledFlex>
        <StyledTitleMobile>68克情报处</StyledTitleMobile>
        <StyledTopCardImg src={imgUrl} alt="Top card image" />
      </StyledFlex>

      <StyledFlex>
        <StyledTitleTablet>68克情报处</StyledTitleTablet>
        <StyledTopCardText>
          年轻就是更容易沉沦自由意志，你说你理性，克制，少说话，不爱留言和辩论，而我说你老了。偶尔的放纵，口无遮拦的在这个情报处写下点什么吧！
        </StyledTopCardText>
      </StyledFlex>
    </StyledTopCard>
  );
}

export default ForumIntroduction;
