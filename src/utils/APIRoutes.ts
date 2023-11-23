export enum MsgType {
  ADD_USER = "add-user",
  SEND_BULLET = "send-bullet",
  REV_BULLET = "rev-bullet",
}

export const SERVER_ADDRESS = {
  host: "http://localhost:3000",
};

const route = "/api/v1/";

export const HTTPS = {
  BULLETS: SERVER_ADDRESS.host + route + "bullets",
  ACTIVITY: SERVER_ADDRESS.host + route + "activities",
  HOME_PAGE: SERVER_ADDRESS.host + route + "pages",
};
