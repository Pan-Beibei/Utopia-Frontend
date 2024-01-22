import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";
import { useQuery } from "react-query";

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
  author: { username: string };
  createdAt: string;
  commentsCount: number;
}

interface getPostCountParams {}

export function usePosts(page: number, limit: number) {
  // console.log(page, limit);

  return useQuery(["posts", page, limit], async () => {
    const { data } = await api.get(SERVER_ADDRESS + API_VERSION + "/posts", {
      params: { page, limit },
    });
    return data;
  });
}

export function usePost(id: string | undefined) {
  return useQuery(
    [id],
    async () => {
      if (!id) {
        // Throw an error or return undefined
        throw new Error("post ID is undefined");
      }
      const { data } = await api.get(
        `${SERVER_ADDRESS}${API_VERSION}/posts/${id}`
      );
      return data;
    },
    {
      staleTime: Infinity,
    }
  );
}

export const getPostsCount = requestHandler<getPostCountParams, number>(() =>
  api.get(SERVER_ADDRESS + API_VERSION + "/posts/count")
);

export const createPost = requestHandler<createPostParams, { id: string }>(
  (params) => api.post(SERVER_ADDRESS + API_VERSION + "/posts", params)
);
