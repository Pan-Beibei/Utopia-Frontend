import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { User } from "../../types";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

interface createPostParams {
  title: string;
  content: string;
  tags: string[];
}

export interface PostResponse {
  id: string;
  title: string;
  content: string;
  tags: Array<string>;
  author: User;
  createdAt: string;
  commentsCount: number;
}

interface getPostCountParams {
  page: number;
  limit: number;
}

export const getPosts = requestHandler<getPostCountParams, PostResponse[]>(
  (params) =>
    api.get(SERVER_ADDRESS + API_VERSION + "/posts", {
      params,
    })
);

export const getPost = requestHandler<{ id: string }, PostResponse>((params) =>
  api.get(`${SERVER_ADDRESS}${API_VERSION}/posts/${params?.id}`)
);

export const getPostsCount = requestHandler<getPostCountParams, number>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/posts/count")
);

export const createPost = requestHandler<createPostParams, { id: string }>(
  (params) => api.post(SERVER_ADDRESS + API_VERSION + "/posts", params)
);
