import { useQuery } from "react-query";
import { getPosts, getPost } from "../services/api/post";

export function usePosts(page: number, limit: number) {
  return useQuery(["posts", page, limit], async () => {
    const data = await getPosts({ page, limit });
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
