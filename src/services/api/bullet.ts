import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

interface BulletResponse {
  id: string;
  msg: string;
}

export const getBullets = requestHandler<null, BulletResponse[]>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + `/bullets/`, {
    params: { sort: JSON.stringify({ createdAt: -1 }) },
  })
);
