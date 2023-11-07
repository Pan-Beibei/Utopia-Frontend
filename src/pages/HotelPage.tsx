import { Box } from "@mui/material";
import { ReactNode } from "react";

import SlideShow from "../features/slide/SlideShow";

const StyledHotel = ({ children }: { children?: ReactNode }) => (
  <Box
    component="section"
    sx={{
      paddingTop: "10rem",
      backgroundColor: "background.default", // replace with your desired color
    }}
  >
    {children}
  </Box>
);

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
