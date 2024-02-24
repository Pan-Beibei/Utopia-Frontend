import { useQuery } from "react-query";
import { getPosts, getPost } from "../services/api/post";

export function usePosts(page: number, limit: number, filter: string) {
  return useQuery(["posts", page, limit, filter], async () => {
    const data = await getPosts({ page, limit, filter });
    return data.code === "success" ? data.data : [];
  });
}

export function usePost(id: string | undefined) {
  return useQuery(
    [id],
    async () => {
      if (!id) {
        throw new Error("post ID is undefined");
      }
      const data = await getPost({ id });
      return data.code === "success" ? data.data : undefined;
    },
    {
      staleTime: Infinity,
    }
  );
}
