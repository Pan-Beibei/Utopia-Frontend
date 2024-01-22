import { useQuery } from "react-query";
import { getComments, getCommentsByParentId } from "../services/api/comment";

export function useComments(postId: string | undefined) {
  return useQuery(["comments", postId], async () => {
    if (!postId) {
      throw new Error("post ID is undefined");
    }
    const data = await getComments({ postId });

    return data.code === "success" ? data.data : [];
  });
}

export function useCommentsByParentId(parentId: string | undefined) {
  return useQuery(["comments", parentId], async () => {
    if (!parentId) {
      throw new Error("parent ID is undefined");
    }
    const data = await getCommentsByParentId({ parentId });

    return data.code === "success" ? data.data : [];
  });
}
