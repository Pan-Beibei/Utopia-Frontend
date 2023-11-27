import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material";
import { ActivityProps, setActivity } from "../../pageSlices/activityPageSlice";
import { useSelector } from "react-redux";
import { getActivities } from "../../pageSlices/activityPageSlice";
import store from "../../store/store";

const ActivityListContainer = styled(Box)({
  padding: "2rem",
  display: "flex",
  overflowX: "auto",
});

const ActivityItem = styled(Card)({
  flex: "0 0 auto",
  marginRight: "16px",
});

function ActivityList() {
  const activities = useSelector(getActivities);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const targetNode = e.target as HTMLDivElement;
    const activityNode = targetNode.closest(".activity");
    if (activityNode) {
      activities.forEach((activity) => {
        if (activityNode.classList.contains(activity.id)) {
          console.log(activity.title, activity.id);
          store.dispatch(setActivity(activity));
        }
      });
    }
  }

  return (
    <ActivityListContainer onClick={handleClick}>
      {activities.map((activity: ActivityProps, index) => (
        <ActivityItem key={index} className={`${activity.id} activity`}>
          {activity.pictures && activity.pictures.length > 0 && (
            <CardMedia
              component="img"
              height="140"
              image={activity.pictures[0]}
              alt={""}
            />
          )}

          <CardContent>
            <Typography variant="h5" component="div" textAlign="center">
              {activity.title}
            </Typography>
          </CardContent>
        </ActivityItem>
      ))}
    </ActivityListContainer>
  );
}
export default ActivityList;
