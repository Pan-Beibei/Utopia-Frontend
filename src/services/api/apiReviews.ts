import { SERVER_ADDRESS } from "./APIRoutes";

const Url = SERVER_ADDRESS.host + "/api/v1/reviews";

interface ReviewData {
  review: string;
  id: string;
}
export async function sendReview(sendData: ReviewData) {
  try {
    const res = await fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: sendData.review,
        activityId: sendData.id,
      }),
    });
    const data = await res.json();
    console.log(data);
    return { createdAt: data.createdAt, review: data.review };
    //
  } catch (err) {
    console.log(err);
  }
}
