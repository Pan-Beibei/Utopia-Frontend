import { HTTPS } from "../utils/APIRoutes";

const Url = HTTPS.ACTIVITY + "/6539592b12c13592dc74746f/reviews";

export async function sendReview(sendData: string) {
  try {
    const res = await fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: sendData,
      }),
    });
    const data = await res.json();
    console.log(data);
    return { createAt: data.createAt, review: data.review };
    //
  } catch (err) {
    console.log(err);
  }
}

export async function getAllReviews() {
  try {
    const res = await fetch(Url);
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
}
