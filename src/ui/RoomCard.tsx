import styled from "styled-components";

const StyledContainer = styled.div`
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

// const StyledRoomName = styled.h4``;

function RoomCard() {
  return (
    <StyledContainer>
      <StyledRoomImg src="./hotel/five/pic-1.jpg" />
    </StyledContainer>
  );
}

export default RoomCard;
