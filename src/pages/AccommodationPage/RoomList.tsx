import styled from "styled-components";
import RoomCard from "./RoomCard";

const StyledRoomList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function RoomList() {
  return (
    <StyledRoomList>
      {Array.from({ length: 10 }).map((_, index) => (
        <RoomCard key={index} />
      ))}
    </StyledRoomList>
  );
}

export default RoomList;
