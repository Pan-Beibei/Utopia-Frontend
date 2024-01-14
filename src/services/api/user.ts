import { User } from "../../types";
import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

interface UserParams {
  token: string;
}

export const getMe = requestHandler<UserParams, User>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/auth/me")
);
