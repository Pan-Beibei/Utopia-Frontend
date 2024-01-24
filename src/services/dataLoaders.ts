import store from "../store";
import { getDrinks } from "./api/home";
import { setDrinks } from "./state/homePageSlice";

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
  // loadData(url + "", initForumPage);
  return null;
}
