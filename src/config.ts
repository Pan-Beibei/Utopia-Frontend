export enum MsgType {
  ADD_USER = "add-user",
  SEND_BULLET = "send-bullet",
  REV_BULLET = "rev-bullet",
}

//开发环境
// export const SERVER_ADDRESS = "http://localhost:3000";

//Docker开发环境
// export const SERVER_ADDRESS = "http://localhost";

//测试服环境
// export const SERVER_ADDRESS = "http://8.138.107.174";

//生产环境
export const SERVER_ADDRESS = "https://sixyuancoffee.cn";

export const API_VERSION = "/api/v1";
