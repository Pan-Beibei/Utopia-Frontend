import { useQuery } from "react-query";
import { getComments } from "../services/api/comment";

export function useComments(postId: string | undefined) {
  return useQuery(["comments", postId], async () => {
    if (!postId) {
      throw new Error("post ID is undefined");
    }
    const data = await getComments({ postId });

    return data.code === "success" ? data.data : [];
  });
}
