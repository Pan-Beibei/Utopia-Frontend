import { useInfiniteQuery } from "react-query";
import { getComments } from "../services/api/comment";

export function useComments(postId: string) {
  return useInfiniteQuery(
    ["comments", postId],
    async ({ pageParam = 1 }) =>
      getComments({ postId, page: pageParam, limit: 10 }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
}
