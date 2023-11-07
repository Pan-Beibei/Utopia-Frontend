import { Box } from "@mui/material";
import { ReactNode } from "react";

import CommentLayout from "../features/review/ReviewLayout";

const ActivityContainer = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      padding: "1rem",
      paddingTop: "10rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "background.default",
    }}
  >
    {children}
  </Box>
);

const WaterfallContainer = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      columnCount: 2, // 列数
      columnGap: "10px", // 列间距
      "@media (min-width: 768px)": {
        columnCount: 3,
      },
      "@media (min-width: 1024px)": {
        columnCount: 4,
      },
    }}
  >
    {children}
  </Box>
);

const WaterfallItem = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      display: "inline-block",
      width: "100%",
      backgroundColor: "#f0f0f0",
      padding: "5px",
      boxSizing: "border-box",
    }}
  >
    {children}
  </Box>
);

const VideoDiv = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      paddingTop: `calc(100% * ${window.innerHeight} / ${window.innerWidth})`,
    }}
  >
    {children}
  </Box>
);

const StyledIframe = (props: React.ComponentPropsWithRef<"iframe">) => (
  <Box
    component="iframe"
    sx={{
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
    }}
    {...props}
  />
);

function ActivityPage() {
  const imgs = [];
  for (let i = 1; i < 11; i++) {
    imgs.push("pic-" + i);
  }

  // console.log(imgs);

  return (
    <ActivityContainer>
      <WaterfallContainer>
        {imgs.map((el, index) => (
          <WaterfallItem key={index}>
            <img src={"./activity/" + el + ".jpg"} alt="" />
          </WaterfallItem>
        ))}
      </WaterfallContainer>
      <VideoDiv>
        <StyledIframe
          id="video"
          allowFullScreen={true}
          src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&controls=0&showinfo=0"
        ></StyledIframe>
      </VideoDiv>
      <CommentLayout />
    </ActivityContainer>
  );
}

export default ActivityPage;
