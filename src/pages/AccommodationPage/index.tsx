import styled from "styled-components";
import RoomList from "./RoomList";

const StyledHotel = styled.div`
  padding: 7.6rem 2rem 0 2rem;
`;

function HotelPage() {
  return (
    <StyledHotel>
      <RoomList />
    </StyledHotel>
  );
}

export default HotelPage;
