import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

interface PulishPostParams {
  authorId: string;
  title: string;
  content: string;
  tags: string[];
}

export const getMe = requestHandler<PulishPostParams, { id: string }>(() =>
  api.post(SERVER_ADDRESS + API_VERSION + "/auth/me")
);
