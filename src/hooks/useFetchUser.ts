import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../services/api/user";
import { setUser, getUser } from "../services/state/userSlice";

//这里使用Redux管理数据，所以一般数据也不会丢失，所以这里没有使用React-Query的必要
export function useFetchUser() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      getMe()
        .then((res) => {
          if (res.code === "success") {
            console.log(res);
            dispatch(setUser(res.data));
          } else {
            console.error(res.error);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user, dispatch]);

  return { user };
}
