import React, { ReactNode } from "react";
import { Box } from "@mui/system";
import ReviewLayout from "../../features/review/ReviewLayout";
import { useSelector } from "react-redux";
import { getShowActivity } from "../../pageSlices/activityPageSlice";
import PhotoWall from "../../ui/PhotoWall";

const AspectRatioBox = ({ children }: { children?: ReactNode }) => (
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

const ActivityDetailComponent = (
  props: React.ComponentPropsWithRef<"iframe">
) => (
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

function ActivityDetail() {
  const activity = useSelector(getShowActivity);
  console.log(activity);
  if (activity.id.length === 0) return <div>...load</div>;
  return (
    <div>
      <PhotoWall photos={activity?.pictures} />
      <AspectRatioBox>
        <ActivityDetailComponent
          id="video"
          allowFullScreen={true}
          src={activity?.promotionalVideo}
        ></ActivityDetailComponent>
      </AspectRatioBox>
      <ReviewLayout activityId={activity.id} />
    </div>
  );
}

export default ActivityDetail;
