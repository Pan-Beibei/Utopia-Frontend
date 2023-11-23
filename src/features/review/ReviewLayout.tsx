import styled from "styled-components";
// import { useEffect } from "react";

import ReviewDetail from "./ReviewtDetail";
import ReviewInput from "./ReviewInput";
import store from "../../store/store";
import { init, getReviews } from "./reviewSlice";
import { useSelector } from "react-redux";
import { HTTPS } from "../../utils/APIRoutes";
import useFetchData from "../../hooks/useFetchData";

const ReviewLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 500px; // 设置固定高度
  overflow-y: auto; // 在内容超出时显示垂直滚动条
`;

function ReviewLayout() {
  const reviews = useSelector(getReviews);
  const { isLoading, error } = useFetchData(
    HTTPS.ACTIVITY + "/6542064894b138e561acf4a0/reviews",
    null,
    (data) => store.dispatch(init(data))
  );
  if (isLoading) return "Loading...";
  if (error instanceof Error) return `An error has occurred: ${error.message}`;

  return (
    <ReviewLayoutContainer>
      <ReviewInput />
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
