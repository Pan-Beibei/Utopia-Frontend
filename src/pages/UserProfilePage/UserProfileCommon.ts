export enum UserViewEnum {
  USER_INFO = "userInfo",
  MESSAGE = "message",
  APPOINTMENTS = "appointments",
}

export type UserViewType =
  | UserViewEnum.USER_INFO
  | UserViewEnum.APPOINTMENTS
  | UserViewEnum.MESSAGE;
