import { useEffect } from "react";
import { useQuery } from "react-query";

type ParamsPros = {
  [key: string]: string;
};

function useFetchData<T>(
  url: string,
  params: ParamsPros | undefined | null,
  action: (data: T) => void
) {
  if (params) {
    const reqParams = JSON.stringify(params);
    url = `${url}?filter=${reqParams}`;
    console.log(url);
  }

  const { isLoading, error, data } = useQuery(url, async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
