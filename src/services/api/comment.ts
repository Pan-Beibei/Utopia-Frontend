import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";
import { useQuery } from "react-query";

interface createCommentParams {
  authorId: string;
  postId: string;
  content: string;
  parentId?: string;
  replyToId?: string;
}

export interface ServerCommentData {
  id: string; //评论Id
  author: { id: string; username: string }; //评论作者
  content: string; //评论内容
  parent: string; //父评论Id
  replyTo: string; // 回复目标Id
  createdAt: string; //评论创建时间
  repliesCount: number; //子评论数量
}

export function useComments(
  postId: string | undefined,
  page: number,
  limit: number
) {
  return useQuery(["comments", postId, page, limit], async () => {
    if (!postId) {
      throw new Error("post ID is undefined");
    }
    const { data } = await api.get(SERVER_ADDRESS + API_VERSION + "/comments", {
      params: { page, limit },
    });
    return data;
  });
}

export const createComment = requestHandler<
  createCommentParams,
  { id: string }
>((params) => api.post(SERVER_ADDRESS + API_VERSION + "/comments", params));
