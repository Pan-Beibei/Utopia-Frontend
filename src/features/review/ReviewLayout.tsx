import styled from "styled-components";
import { useEffect } from "react";

import ReviewDetail from "./ReviewtDetail";
import ReviewInput from "./ReviewInput";
// import { HTTPS } from "../../utils/APIRoutes";
import store from "../../store";
import { init, getReviews } from "./reviewSlice";
import { useSelector } from "react-redux";
import { getAllReviews } from "../../services/apiReviews";

const ReviewLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

function ReviewLayout() {
  const reviews = useSelector(getReviews);

  useEffect(function () {
    async function getAllReviewss() {
      const data = await getAllReviews();
      console.log(data);

      store.dispatch(init(data));
    }
    getAllReviewss();
  }, []);

  if (!reviews.length) return;
  return (
    <ReviewLayoutContainer>
      <ReviewInput />
      {reviews.map((review, index) => (
        <ReviewDetail
          createAt={review.createAt}
          review={review.review}
          key={index}
        />
      ))}
    </ReviewLayoutContainer>
  );
}

export default ReviewLayout;
