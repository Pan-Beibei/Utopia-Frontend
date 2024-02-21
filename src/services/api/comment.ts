import { SERVER_ADDRESS, API_VERSION } from "../../config";
import { User } from "../../types";
import { requestHandler } from "../../utils/requestHandler";
import api from "./api";

interface createCommentParams {
  postId: string;
  content: string;
  parentId?: string;
  replyToId?: string;
}

export interface CommentResponse {
  id: string; //评论Id
  author: User; //评论作者
  content: string; //评论内容
  parent: string; //父评论Id
  replyTo: { id: string; author: { id: string; username: string } }; // 回复目标
  createdAt: string; //评论创建时间
  repliesCount: number; //子评论数量
}

interface getCommentCountParams {
  postId: string;
}

interface getCommentsByParentIdParams {
  parentId: string;
  cursor: string;
  pageSize: number;
}

export const getComments = requestHandler<
  getCommentCountParams,
  CommentResponse[]
>((params) =>
  api.get(SERVER_ADDRESS + API_VERSION + `/comments/${params?.postId}`, {
    params: { sort: JSON.stringify({ createdAt: -1 }) },
  })
);

export const getCommentsCount = requestHandler<{ postId: string }, number>(
  (params) => {
    if (!params?.postId) {
      throw new Error("post ID is undefined");
    }
    return api.get(
      SERVER_ADDRESS + API_VERSION + `/comments/count/${params.postId}`
    );
  }
);

export const getCommentsByParentId = requestHandler<
  getCommentsByParentIdParams,
  { comments: CommentResponse[]; hasMore: boolean }
>((params) => {
  if (!params || !params.parentId || !params.pageSize) {
    throw new Error("params is required");
  }

  return api.get(
    SERVER_ADDRESS + API_VERSION + `/comments/parent/${params.parentId}`,
    {
      params: {
        sort: JSON.stringify({ createdAt: -1 }),
        cursor: params.cursor,
        limit: params.pageSize,
      },
    }
  );
});

export const createComment = requestHandler<
  createCommentParams,
  { id: string }
>((params) => api.post(SERVER_ADDRESS + API_VERSION + "/comments", params));
