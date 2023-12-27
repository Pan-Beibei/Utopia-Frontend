import styled from "styled-components";
import { useSelector } from "react-redux";
import { getActivities } from "../../services/state/activityPageSlice";
import ActivityCard from "../../components/ActivityCard";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 10rem;
`;

function ActivityList() {
  const activities = useSelector(getActivities);

  return (
    <StyledContainer>
      {activities.map((activity) => {
        return (
          <ActivityCard
            key={activity.id}
            imgUrl={activity.pictures[0]}
            title={activity.title}
            content={activity.content}
            date={activity.activityTime}
          />
        );
      })}
    </StyledContainer>
  );
}
export default ActivityList;
