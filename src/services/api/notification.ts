import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

interface getUnreadNotificationsParams {
  page: number;
  limit: number;
}

export interface NotificationResponse {
  author: string;
  createdAt: string;
  entity: {
    content: string;
    id: string;
    createdAt: string;
    replyTo: {
      author: { id: string; username: string };
      content: string;
    };
  }; //
  id: string;
  repliedUser: string; //
  sendUser: { id: string; username: string };
  status: string;
  type: string;
}

export const getUnreadNotificationsCount = requestHandler<null, number>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + `/notifications/unread/count`)
);

export const updateNotificationsStatus = requestHandler<null, null>(() =>
  api.post(SERVER_ADDRESS + API_VERSION + `/notifications/update`)
);

export async function getUserNotifications({
  page,
  limit,
}: getUnreadNotificationsParams) {
  const response = await api.get(
    SERVER_ADDRESS + API_VERSION + `/notifications/`,
    {
      params: {
        sort: JSON.stringify({ createdAt: -1 }),
        page: page,
        limit: limit,
      },
    }
  );

  const data = await response.data;
  const nextPage = data.length < limit ? null : page + 1;
  return { notifications: data, nextPage };
}

export const deleteNotification = requestHandler<string, null>((id) =>
  api.delete(SERVER_ADDRESS + API_VERSION + `/notifications/${id}`)
);
