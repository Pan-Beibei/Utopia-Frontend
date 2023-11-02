import styled from "styled-components";

import SlideShow from "../features/slide/SlideShow";

const StyledHotel = styled.section`
  padding-top: 10rem;
  // height: 10rem;
  // display: flex;
`;

function HotelPage() {
  return (
    <StyledHotel>
      <SlideShow slideName={"one"} />
      <SlideShow slideName={"two"} />
      <SlideShow slideName={"three"} />
      <SlideShow slideName={"five"} />
    </StyledHotel>
  );
}

export default HotelPage;
