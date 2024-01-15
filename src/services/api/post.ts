import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";
import { useQuery } from "react-query";

interface createPostParams {
  title: string;
  content: string;
  tags: string[];
}

export interface PostListResponse {
  _id: string;
  title: string;
  content: string;
  tags: Array<string>;
  author: { username: string };
  createdAt: string;
  commentsCount: number;
}

export function usePosts(page: number, limit: number) {
  return useQuery("posts", async () => {
    const { data } = await api.get(SERVER_ADDRESS + API_VERSION + "/posts", {
      params: { page, limit },
    });
    return data;
  });
}

export const createPost = requestHandler<createPostParams, { id: string }>(
  (params) => api.post(SERVER_ADDRESS + API_VERSION + "/posts", params)
);

export interface PostResponse {
  id: string;
  title: string;
  content: string;
  tags: Array<string>;
  author: { username: string };
  createdAt: string;
  commentsCount: number;
}

export const getPost = requestHandler<{ id: string }, PostResponse>(
  (params) => {
    if (!params || !params.id) {
      throw new Error("Missing id parameter");
    }

    return api.get(`${SERVER_ADDRESS}${API_VERSION}/posts/${params.id}`);
  }
);
