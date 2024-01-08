export enum MsgType {
  ADD_USER = "add-user",
  SEND_BULLET = "send-bullet",
  REV_BULLET = "rev-bullet",
}

export const SERVER_ADDRESS = "http://localhost:3000";
export const API_VERSION = "/api/v1";

// export const HTTPS = {
//   BULLETS: SERVER_ADDRESS.host + route + "bullets",
//   ACTIVITY: SERVER_ADDRESS.host + route + "activities",
//   HOME_PAGE:
//     SERVER_ADDRESS.host +
//     route +
//     "pages" +
//     `?filter=${JSON.stringify({ title: "Home" })}`,
//   DAILY_PAGE: SERVER_ADDRESS.host + route + "posts",
// };
//`${HTTPS.HOME_PAGE}?filter=${JSON.stringify({ title: "Home" })}`
