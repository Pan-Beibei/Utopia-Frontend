import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMe } from "../../services/api/user";
import store from "../../store/store";
import { setUser } from "../../services/state/userSlice";
import { getUser } from "../../services/state/userSlice";

export function useFetchUser() {
  const user = useSelector(getUser);
  useEffect(() => {
    if (!user) {
      getMe()
        .then((res) => {
          if (res.code === "success") {
            console.log(res);
            store.dispatch(setUser(res.data));
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
