import store from "../store";
import { getDrinks } from "./api/home";
import { setDrinks } from "./state/homePageSlice";
import { getPostsCount } from "./api/post";

export async function hoemLoader() {
  getDrinks()
    .then((res) => {
      if (res.code === "success") {
        console.log(res);
        store.dispatch(setDrinks(res.data));
      } else {
        console.error(res.error);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return null;
}

export async function activityLoader() {
  // loadData(url + "activities", initActivities);
  return null;
}

export async function forumLoader() {
  try {
    const res = await getPostsCount();
    console.log(res);
    if (res.code !== "success") {
      console.log(res);
      return null;
    }
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
