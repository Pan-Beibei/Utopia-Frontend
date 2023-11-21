import { useState } from "react";
import { useMutation } from "react-query";
import {
  ReviewPublishBtnStyle,
  ReviewReplyInputBox,
  ReviewRowStyle,
} from "./ReviewStyle";

import { sendReview } from "../../services/apiReviews";
import { addReview } from "./reviewSlice";
import store from "../../store/store";

function ReviewInput() {
  const mutation = useMutation(sendReview);
  const [inputText, setInputText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value);
  }

  const send = () => {
    mutation.mutate(
      { review: inputText, id: "6542064894b138e561acf4a0" },
      {
        onSuccess: (data) => {
          console.log(data);
          store.dispatch(addReview(data));
        },
      }
    );
  };

  function handleClick() {
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
