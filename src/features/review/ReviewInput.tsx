import { useState } from "react";
import { useMutation } from "react-query";
import {
  ReviewPublishBtnStyle,
  ReviewReplyInputBox,
  ReviewRowStyle,
} from "./ReviewStyle";

import { sendReview } from "../../services/apiReviews";
// import GlobalSnackbar from "../../components/ui/GlobalSnackbar";
import { HTTPS } from "../../utils/APIRoutes";
import { useQueryClient } from "react-query";

interface ReviewInputProps {
  activityId: string;
}

function ReviewInput({ activityId }: ReviewInputProps) {
  const mutation = useMutation(sendReview);
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  console.log(open);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value);
  }

  function updateReviews() {
    queryClient.invalidateQueries(HTTPS.ACTIVITY + `/${activityId}/reviews`);
  }

  const send = () => {
    mutation.mutate(
      { review: inputText, id: activityId },
      {
        onSuccess: (data) => {
          console.log(data);
          setOpen(true);
          updateReviews();
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
      {/* <GlobalSnackbar
        open={open}
        message="发送成功"
        close={() => setOpen(false)}
      /> */}
    </ReviewRowStyle>
  );
}

export default ReviewInput;
