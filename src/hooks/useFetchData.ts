import { useEffect } from "react";
import { useQuery } from "react-query";

function useFetchData(url: string, action: (data: []) => void) {
  const { isLoading, error, data } = useQuery(url, async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    return res.json();
  });

  useEffect(() => {
    if (data) {
      action(data);
    }
  }, [data, action]);

  return { isLoading, error, data };
}

export default useFetchData;
