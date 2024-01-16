import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import { DrinkType } from "../../types";
import api from "./api";

export const getDrinks = requestHandler<null, DrinkType[]>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/items")
);
