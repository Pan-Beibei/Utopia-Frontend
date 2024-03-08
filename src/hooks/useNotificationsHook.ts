import { useInfiniteQuery } from "react-query";
import { getUserNotifications } from "../services/api/notification";

export function useNotifications() {
  return useInfiniteQuery(
    ["notifications"],
    async ({ pageParam = 1 }) =>
      getUserNotifications({ page: pageParam, limit: 10 }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
}
