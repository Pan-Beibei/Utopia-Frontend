import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.large};
  font-wieght: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 0.7rem;
`;

const StyledRoomImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  object-fit: cover;
`;

const StyledRoomName = styled.h4``;

const StyledRoomType = styled.p`
  font-wieght: ${(props) => props.theme.fontWeight.normal};
`;
const StyledRoomPrice = styled.p`
  font-wieght: ${(props) => props.theme.fontWeight.normal};
`;

function RoomCard() {
  return (
    <StyledContainer>
      <StyledRoomImg src="./hotel/five/pic-1.jpg" />
      <StyledRoomName>圣地亚哥</StyledRoomName>
      <StyledRoomType>大床房</StyledRoomType>
      <StyledRoomPrice>￥736/晚</StyledRoomPrice>
    </StyledContainer>
  );
}

export default RoomCard;
