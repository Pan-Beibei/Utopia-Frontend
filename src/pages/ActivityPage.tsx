import { Box } from "@mui/material";
import { ReactNode } from "react";
import useFetchData from "../hooks/useFetchData";
import { HTTPS } from "../utils/APIRoutes";
import { init } from "../pageSlices/activityPageSlice";
import store from "../store/store";
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
  const { isLoading } = useFetchData(HTTPS.ACTIVITY, null, (data) =>
    store.dispatch(init(data))
  );

  if (isLoading) return "Loading...";

  return (
    <ActivityContainer>
      <ActivityList />
      <ActivityDetail />
    </ActivityContainer>
  );
}

export default ActivityPage;
