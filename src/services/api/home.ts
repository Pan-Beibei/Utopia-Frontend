import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import { DrinkType } from "../../types";
import api from "./api";

interface ItemParams {
  token: string;
}

export const getDrinks = requestHandler<ItemParams, DrinkType[]>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/items")
);
