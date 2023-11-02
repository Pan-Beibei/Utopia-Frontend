// import { useState } from "react";
import styled from "styled-components";
import { ReviewRowStyle } from "./ReviewStyle";
// import ReviewInput from "./reviewInput";
// import { getUserId } from "../user/userSlice";
// import { useSelector } from "react-redux";
import { CovTime } from "../../utils/ConversionTime";

const ReviewDetailContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  display: block;
`;

// const ReviewReplyBtnStyle = styled.button`
//   border: none;
//   color: #868e96;
//   background-color: transparent;
// `;

const ReviewDateStyle = styled.span`
  color: #868e96;
`;

const ReviewTextStyle = styled.p`
  color: #000;
  // background-color: #fff;
  margin-left: 5rem;
`;

// const ReviewReplyInputBox = styled.textarea`
//   padding: 0.2rem;
//   margin-left: 5rem;
//   width: 100%;
// `;

function getUserAvatar() {
  let index = Math.floor(Math.random() * 4);
  if (index === 0) index = 1;
  return `./avatars/image-${index}.png`;
}

interface ReviewDetailProps {
  review: string;
  createAt: string;
}

function ReviewDetail({ review, createAt }: ReviewDetailProps) {
  // const [isShowReplyInpu, setIsShowReplyInpu] = useState(false);
  // const userId = useSelector(getUserId);
  // function handleReply() {
  //   setIsShowReplyInpu((show) => !show);
  // }

  const avatarImg = getUserAvatar();
  // console.log(avatarImg);

  return (
    <ReviewDetailContainer>
      <ReviewRowStyle>
        <Avatar src={avatarImg} />
        <ReviewDateStyle>{CovTime(createAt)}</ReviewDateStyle>
        {/* <ReviewReplyBtnStyle onClick={handleReply}>回复</ReviewReplyBtnStyle> */}
      </ReviewRowStyle>

      <ReviewTextStyle>{review}</ReviewTextStyle>
      {/* {isShowReplyInpu && <ReviewInput />} */}
    </ReviewDetailContainer>
  );
}

export default ReviewDetail;
