import { Action } from "@reduxjs/toolkit";
import store from "../store/store";
import { SERVER_ADDRESS, API_VERSION } from "../config";
import { initActivities } from "./state/activityPageSlice";
// import { initHome } from "./state/homePageSlice";
// import { initBullet } from "../components/bullet/bulletSlice";
// import { initForumPage } from "./state/ForumPageSlice";

async function loadData(url: string, action: (data: []) => Action) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error! status: ${res.status}`);
  }
  const data = await res.json();
  store.dispatch(action(data));
}

const url = SERVER_ADDRESS + API_VERSION;

export async function hoemLoader() {
  // loadData(url + "bullets", initBullet);
  // loadData(HTTPS.HOME_PAGE, initHome);
  return null;
}

export async function activityLoader() {
  loadData(url + "activities", initActivities);
  return null;
}

export async function forumLoader() {
  // loadData(url + "", initForumPage);
  return null;
}
