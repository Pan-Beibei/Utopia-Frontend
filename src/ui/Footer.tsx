import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { BsWechat, BsBookFill } from "react-icons/bs";
import { FaBilibili } from "react-icons/fa6";

const StyledFooter = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      padding: "5rem 2rem",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      gap: "2rem",
      backgroundColor: "background.default",
      "@media (min-width: 800px)": {
        flexDirection: "row",
      },
    }}
  >
    {children}
  </Box>
);

const StyledLink = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      gap: "3rem",
    }}
  >
    {children}
  </Box>
);
const StyledSpan = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      gap: "1rem",
      color: "text.secondary",
    }}
  >
    {children}
  </Box>
);

const StyledP = ({ children }: { children?: ReactNode }) => (
  <Typography
    sx={{
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "text.primary",
      "@media (min-width: 800px)": {
        fontSize: "1.5rem",
      },
    }}
  >
    {children}
  </Typography>
);

function Footer() {
  return (
    <StyledFooter>
      <StyledP> 一个几乎24小时营业的灵魂寄居所 六元咖啡馆</StyledP>
      <StyledLink>
        <StyledSpan>
          村长微信
          <BsWechat fontSize="2.5em" />
        </StyledSpan>

        <StyledSpan>
          村长B站
          <FaBilibili fontSize="2.5em" />
        </StyledSpan>

        <StyledSpan>
          村长小红书
          <BsBookFill fontSize="2.5em" />
        </StyledSpan>
      </StyledLink>
    </StyledFooter>
  );
}

export default Footer;
