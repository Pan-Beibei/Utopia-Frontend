import { Box, styled } from "@mui/system";
import {
  useState,
  memo,
  DetailedHTMLProps,
  VideoHTMLAttributes,
  ImgHTMLAttributes,
} from "react";

interface PlaceholderImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  isvideoLoaded: boolean;
}
interface VideoElementProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

const VideoContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const PlaceholderImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isvideoLoaded",
})<PlaceholderImageProps>(({ isvideoLoaded }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  display: isvideoLoaded ? "none" : "block",
}));

const VideoElement = styled(Box)<VideoElementProps>(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
}));

const Video = memo(function Video() {
  const [isvideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <VideoContainer>
      <PlaceholderImage
        component="img"
        src="/video/hero-placehoder.webp"
        alt="video placeholder"
        isvideoLoaded={isvideoLoaded}
      />
      <VideoElement
        component="video"
        onLoadedData={handleLoadedData}
        muted
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        // preload="metadata"
      >
        <source src="/video/hero.webm" type="video/webm" />
      </VideoElement>
    </VideoContainer>
  );
});

export default Video;
