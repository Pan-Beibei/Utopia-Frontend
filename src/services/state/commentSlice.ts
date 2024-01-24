import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";
import { CommentResponse } from "../api/comment";
import { getCommentsByParentId } from "../api/comment";

export interface CommentState {
  comments: CommentResponse[];
  isRepliesVisible: boolean;
}

interface StateProps {
  [parentId: string]: CommentState;
}

const initialState: StateProps = {};

// 创建异步 thunk action
export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (parentId: string, { getState }) => {
    const state = getState() as { comment: StateProps };
    if (state.comment[parentId]) {
      // 如果已经存在对应 parentId 的数据，直接返回这些数据
      console.log("已存在：", state.comment[parentId].comments);

      return state.comment[parentId].comments;
    } else {
      // 如果不存在对应 parentId 的数据，发送请求获取数据
      const data = await getCommentsByParentId({ parentId });

      return data.code === "success" ? data.data : [];
    }
  }
);

const userSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment(state, action) {
      // console.log(state.comments);

      console.log("addComment", action.payload);
      if (state[action.payload.parent]) {
        state[action.payload.parent].comments.push(action.payload);
      }
    },
    hideReplies(state, action) {
      if (state[action.payload]) {
        state[action.payload].isRepliesVisible = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state[action.meta.arg] = {
        comments: action.payload,
        isRepliesVisible: true,
      };
    });
  },
});

export const { addComment } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: RootState) => state.user.user;

export const getReplies = (
  state: RootState,
  parentId: string
): CommentState | undefined => {
  return state.comment[parentId];
};
