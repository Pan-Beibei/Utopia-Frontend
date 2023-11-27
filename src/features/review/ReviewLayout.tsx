import { Box } from "@mui/system";

import ReviewDetail from "./ReviewDetail";
import ReviewInput from "./ReviewInput";
import store from "../../store/store";
import { init, getReviews } from "./reviewSlice";
import { useSelector } from "react-redux";
import { HTTPS } from "../../utils/APIRoutes";
import useFetchData from "../../hooks/useFetchData";

const ReviewLayoutContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem",
      maxHeight: "500px",
      overflowY: "auto",
    }}
  >
    {children}
  </Box>
);

interface ReviewLayoutProps {
  activityId: string;
}

function ReviewLayout({ activityId }: ReviewLayoutProps) {
  const reviews = useSelector(getReviews);
  useFetchData(HTTPS.ACTIVITY + `/${activityId}/reviews`, null, (data) =>
    store.dispatch(init(data))
  );
  console.log("reviews: ", reviews);
  if (reviews.length === 0) return null;

  return (
    <ReviewLayoutContainer>
      <ReviewInput activityId={activityId} />
      {reviews.map((review, index) => (
        <ReviewDetail
          createAt={review.createdAt}
          review={review.review}
          key={index}
        />
      ))}
    </ReviewLayoutContainer>
  );
}

export default ReviewLayout;
