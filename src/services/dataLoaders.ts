import store from "../store";
import { getDrinks } from "./api/home";
// import { getPostsCount } from "./api/post";
import { getBullets } from "./api/bullet";
import { setDrinks } from "./state/homePageSlice";
import { setBullets } from "./state/bulletSlice";

export async function hoemLoader() {
  try {
    const [drinks, bullets] = await Promise.all([getDrinks(), getBullets()]);
    if (drinks.code === "success") {
      console.log(drinks);
      store.dispatch(setDrinks(drinks.data));
    } else {
      console.log(drinks.error);
    }

    if (bullets.code === "success") {
      console.log(bullets);
      store.dispatch(setBullets(bullets.data));
    } else {
      console.log(bullets.error);
    }
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function activityLoader() {
  // loadData(url + "activities", initActivities);
  return null;
}

// export async function forumLoader() {
//   try {
//     const res = await getPostsCount();
//     console.log(res);
//     if (res.code !== "success") {
//       console.log(res);
//       return null;
//     }
//     return res.data;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// }
