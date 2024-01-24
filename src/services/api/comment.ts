import { SERVER_ADDRESS, API_VERSION } from "../../config";
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
  author: { id: string; username: string }; //评论作者
  content: string; //评论内容
  parent: string; //父评论Id
  replyTo: { id: string; author: { id: string; username: string } }; // 回复目标
  createdAt: string; //评论创建时间
  repliesCount: number; //子评论数量
}

interface getCommentCountParams {
  postId: string;
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
  { parentId: string },
  CommentResponse[]
>((params) =>
  api.get(
    SERVER_ADDRESS + API_VERSION + `/comments/parent/${params?.parentId}`,
    {
      params: { sort: JSON.stringify({ createdAt: -1 }), page: 1, limit: 10 },
    }
  )
);

export const createComment = requestHandler<
  createCommentParams,
  { id: string }
>((params) => api.post(SERVER_ADDRESS + API_VERSION + "/comments", params));
