import { Action } from "@reduxjs/toolkit";
import store from "../store/store";
import { HTTPS } from "./api/APIRoutes";
import { initActivities } from "../pageSlices/activityPageSlice";
import { initHome } from "../pageSlices/homePageSlice";
import { initBullet } from "../components/bullet/bulletSlice";
import { initForumPage } from "../pageSlices/ForumPageSlice";

async function loadData(url: string, action: (data: []) => Action) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error! status: ${res.status}`);
  }
  const data = await res.json();
  store.dispatch(action(data));
}

export async function hoemLoader() {
  loadData(HTTPS.BULLETS, initBullet);
  loadData(HTTPS.HOME_PAGE, initHome);
  return null;
}

export async function activityLoader() {
  loadData(HTTPS.ACTIVITY, initActivities);
  return null;
}

export async function forumLoader() {
  loadData(HTTPS.DAILY_PAGE, initForumPage);
  return null;
}
