import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../services/api/user";
import { setUser, getUser } from "../services/state/userSlice";
import { useLocalStorage } from "./useLocalStorage";

//这里使用Redux管理数据，所以一般数据也不会丢失，所以这里没有使用React-Query的必要
export function useFetchUser() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { getItem } = useLocalStorage("token");
  const token = getItem();

  useEffect(() => {
    //如果已经有用户数据了，就不再请求
    //如果没有token，也不再请求,说明未登录
    if (user || !token) {
      return;
    }

    getMe()
      .then((res) => {
        if (res.code === "success") {
          console.log("fetch user success", res);

          dispatch(setUser(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, dispatch, token]);

  return { user };
}
