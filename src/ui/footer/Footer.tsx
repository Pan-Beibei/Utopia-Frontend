import { ReactNode, forwardRef, useState, useCallback, memo } from "react";
import { Box, Typography } from "@mui/material";
import { BsWechat, BsBookFill } from "react-icons/bs";
import { FaBilibili } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import SocialMediaTooltip from "./SocialMediaTooltip";
import { getTextContents } from "../../pageSlices/homePageSlice";

const footerContainerStyles = {
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
};

const FooterContainer = ({ children }: { children?: ReactNode }) => (
  <Box sx={footerContainerStyles}>{children}</Box>
);

const InteractiveButtonGroup = ({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      gap: "3rem",
    }}
  >
    {children}
  </Box>
);

const EmphasizedTypography = ({ children }: { children?: ReactNode }) => (
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

const Alert = memo(
  forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} variant="filled" ref={ref} {...props} />
  ))
);

function Footer() {
  const textContents = useSelector(getTextContents);
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = event.target as Element;
      const spanElement = target.closest(".social");
      if (spanElement) {
        navigator.clipboard
          .writeText(spanElement.getAttribute("data-value") || "")
          .then(() => {
            console.log("Text copied to clipboard");
            setOpen(true); // 显示 Snackbar
          })
          .catch((err) => {
            console.log("Something went wrong", err);
          });
      }
    },
    []
  );

  const handleClose = useCallback(
    (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    },
    []
  );

  return (
    <FooterContainer>
      <EmphasizedTypography> {textContents[1]}</EmphasizedTypography>
      <InteractiveButtonGroup onClick={handleClick}>
        <SocialMediaTooltip
          className="social wechat"
          title="村长微信"
          dataValue="123456258"
          icon={<BsWechat fontSize="2.5em" />}
        >
          村长微信
        </SocialMediaTooltip>

        <SocialMediaTooltip
          className="social bilibili"
          title="村长B站"
          dataValue="1234qweqwe56258"
          icon={<FaBilibili fontSize="2.5em" />}
        >
          村长B站
        </SocialMediaTooltip>

        <SocialMediaTooltip
          className="social xiaohongshu"
          title="村长小红书"
          dataValue="ssadada"
          icon={<BsBookFill fontSize="2.5em" />}
        >
          村长小红书
        </SocialMediaTooltip>
      </InteractiveButtonGroup>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          已复制到剪贴板
        </Alert>
      </Snackbar>
    </FooterContainer>
  );
}

export default Footer;
