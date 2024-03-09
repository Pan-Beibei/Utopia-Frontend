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
  filter: string;
}

// export const getPosts = requestHandler<getPostCountParams, PostResponse[]>(
//   (params) =>
//     api.get(SERVER_ADDRESS + API_VERSION + "/posts", {
//       params,
//     })
// );

export async function getPosts({ page, limit, filter }: getPostCountParams) {
  const response = await api.get(SERVER_ADDRESS + API_VERSION + "/posts", {
    params: {
      sort: JSON.stringify({ createdAt: -1 }),
      page: page,
      limit: limit,
      filter: filter,
    },
  });

  const data = response.data;

  const nextPage = data.length < limit ? null : page + 1;
  return { posts: data, nextPage };
}

export const getPost = requestHandler<{ id: string }, PostResponse>((params) =>
  api.get(`${SERVER_ADDRESS}${API_VERSION}/posts/${params?.id}`)
);

export const getPostsCount = requestHandler<getPostCountParams, number>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/posts/count")
);

export const createPost = requestHandler<createPostParams, { id: string }>(
  (params) => api.post(SERVER_ADDRESS + API_VERSION + "/posts", params)
);
