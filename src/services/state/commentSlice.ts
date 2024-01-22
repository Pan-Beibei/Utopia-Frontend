import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store/store";
import { CommentResponse } from "../api/comment";

interface CommentState {
  comments: CommentResponse[];
  isRepliesVisible: boolean;
}

interface StateProps {
  [parentId: string]: CommentState;
}

const initialState: StateProps = {};

const userSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setUser(state, action) {
      state.comments = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: RootState) => state.user.user;
