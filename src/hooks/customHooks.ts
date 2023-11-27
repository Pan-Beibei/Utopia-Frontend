import { useEffect } from "react";
import { Action } from "@reduxjs/toolkit";
import store from "../store/store";

export function useAsyncEffect(asyncFunc: () => Promise<void | (() => void)>) {
  useEffect(() => {
    asyncFunc();
  }, [asyncFunc]);
}

export function useFetchAndInitData(url: string, action: (data: []) => Action) {
  useAsyncEffect(async () => {
    console.log("useFetchAndInitData: ", url);

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    const data = await res.json();
    store.dispatch(action(data));
  });
}
