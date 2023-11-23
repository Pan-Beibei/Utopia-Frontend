import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
// import { useText, InfoProps } from "../contexts/TextContext";
import Pictures from "../ui/Pictures";
import { getPictures, getTextContents } from "../pageSlices/homePageSlice";
import { useSelector } from "react-redux";

const StyledDrinks = ({ children }: { children?: ReactNode }) => (
  <Box
    component="section"
    sx={{
      padding: "0 2rem",
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      justifyContent: "center",
      alignItems: "center",
      "@media (min-width: 768px)": {
        flexDirection: "row",
      },
    }}
  >
    {children}
  </Box>
);

const StyledText = ({
  children,
  $isMain,
}: {
  children?: ReactNode;
  $isMain: boolean;
}) => (
  <Typography
    sx={{
      fontSize: $isMain ? "1.8rem" : "1.5rem",
      color: "text.primary",
      "@media (min-width: 600px)": {
        fontSize: $isMain ? "2.8rem" : "2.5rem",
      },
    }}
  >
    {children}
  </Typography>
);

const StyledFlexRow = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "@media (min-width: 768px)": {
        gap: "3rem",
      },
    }}
  >
    {children}
  </Box>
);

function Drinks() {
  const pictures = useSelector(getPictures);
  const textContents = useSelector(getTextContents);

  // const { getTextByIndex } = useText();

  // const info: InfoProps = getTextByIndex(1);
  if (textContents.length === 0) return null;
  const des = textContents[0] as string;

  console.log(des);

  const desArr = des.split("|");

  return (
    <StyledDrinks>
      <Pictures imgs={[pictures[18], pictures[18]]} altstr="Drinks Info" />
      <StyledFlexRow>
        <StyledText $isMain={true}>{desArr[0]}</StyledText>
        <StyledText $isMain={false}>{"-----" + desArr[1]}</StyledText>
      </StyledFlexRow>
    </StyledDrinks>
  );
}

export default Drinks;
