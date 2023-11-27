import { Box } from "@mui/material";
import { ReactNode } from "react";
import { HTTPS } from "../utils/APIRoutes";
import { init } from "../pageSlices/activityPageSlice";
import ActivityList from "../components/activity/ActivityList";
import ActivityDetail from "../components/activity/ActivityDetail";
import { useFetchAndInitData } from "../hooks/customHooks";

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

function ActivityPage() {
  useFetchAndInitData(HTTPS.ACTIVITY, init);

  return (
    <ActivityContainer>
      <ActivityList />
      <ActivityDetail />
    </ActivityContainer>
  );
}

export default ActivityPage;
