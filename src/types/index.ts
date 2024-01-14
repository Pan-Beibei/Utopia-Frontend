export interface User {
  id: string;
  username: string;
  phone: string;
  roles: [];
}

export interface DrinkType {
  name: string;
  description: string;
  price: number;
  type: string;
  pictures: Array<string>;
}

export enum DrinkEnum {
  DRINK_MENU = "DRINK_MENU",
  BLACK_COFFEE = "BLACK_COFFEE",
  WHITE_COFFEE = "WHITE_COFFEE",
  GREEN_PLUM_WINE = "GREEN_PLUM_WINE",
  SWEET_WATER = "SWEET_WATER",
  OTHER_WATER = "OTHER_WATER",
  NOODLES = "NOODLES",
}

export const postTags = [
  { id: "GUEST_MESSAGE", name: "病人日记" },
  { id: "SEEK_HELP", name: "寻求帮助" },
  { id: "CASUAL_TALK", name: "吐槽划水" },
  { id: "SERIOUS_SUGGESTION", name: "认真建议" },
];
