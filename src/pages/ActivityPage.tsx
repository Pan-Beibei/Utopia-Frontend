import { Box } from "@mui/material";
import { ReactNode } from "react";
import ActivityList from "../components/activity/ActivityList";
import ActivityDetail from "../components/activity/ActivityDetail";

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
  return (
    <ActivityContainer>
      <ActivityList />
      <ActivityDetail />
    </ActivityContainer>
  );
}

export default ActivityPage;
