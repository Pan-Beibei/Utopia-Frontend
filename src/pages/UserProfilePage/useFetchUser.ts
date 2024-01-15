import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../../services/api/user";
import { setUser } from "../../services/state/userSlice";
import { getUser } from "../../services/state/userSlice";

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
  }, [user]);

  return { user };
}
