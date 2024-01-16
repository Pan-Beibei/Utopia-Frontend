import { User } from "../../types";
import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

export const getMe = requestHandler<null, User>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/auth/me")
);
