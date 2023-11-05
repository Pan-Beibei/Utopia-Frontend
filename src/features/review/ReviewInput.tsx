// import styled from "styled-components";

import { useState } from "react";
import {
  ReviewPublishBtnStyle,
  ReviewReplyInputBox,
  ReviewRowStyle,
} from "./ReviewStyle";

import { sendReview } from "../../services/apiReviews";
import { addReview } from "./reviewSlice";
import store from "../../store/store";

function ReviewInput() {
  const [inputText, setInputText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value);
  }

  function handleClick() {
    async function send() {
      const data = await sendReview(inputText);
      console.log(data);
      store.dispatch(addReview(data));
    }
    send();
  }

  return (
    <ReviewRowStyle>
      <ReviewReplyInputBox value={inputText} onChange={handleChange} />
      <ReviewPublishBtnStyle onClick={handleClick}>发布</ReviewPublishBtnStyle>
    </ReviewRowStyle>
  );
}

export default ReviewInput;
