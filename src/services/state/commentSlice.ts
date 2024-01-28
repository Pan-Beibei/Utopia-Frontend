import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";
import { CommentResponse } from "../api/comment";
import { getCommentsByParentId } from "../api/comment";

export interface CommentState {
  comments: CommentResponse[];
  repliesCount: number;
  isRepliesVisible: boolean;
  hasNewReply: boolean;
  hasFetchedAllReplies: boolean;
  cursor: string;
  pageSize: number;
}

interface StateProps {
  [parentId: string]: CommentState;
}

const initialState: StateProps = {};

// 创建异步 thunk action
export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async ({
    parentId,
    cursor,
    pageSize,
  }: {
    parentId: string;
    cursor: string;
    pageSize: number;
  }) => {
    const data = await getCommentsByParentId({ parentId, cursor, pageSize });

    console.log("createAsyncThunk", data);

    return data.code === "success" ? data.data : null;
  }
);

const userSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    initCommentState(state, action) {
      //初始化，在顶级评论下，创建一个回复列表
      action.payload.forEach((comment: CommentResponse) => {
        const { id, repliesCount } = comment;
        if (!state[id]) {
          state[id] = {
            comments: [],
            repliesCount,
            isRepliesVisible: false,
            hasNewReply: false,
            hasFetchedAllReplies: false,
            cursor: "",
            pageSize: 3,
          };
        }
      });
    },

    updateRepliesCount(state, action) {
      //更新评论数
      const { commentId, count } = action.payload;
      state[commentId].repliesCount = count;
    },
    collapseReplies(state, action) {
      const commentId = action.payload;
      const comment = state[commentId];
      if (comment) {
        comment.isRepliesVisible = false;
        // 重置状态
        comment.cursor = "";
        comment.pageSize = 3;
        comment.hasFetchedAllReplies = false;
        comment.comments = [];
      }
    },
    addNewReply(state, action) {
      console.log("addNewReply", action.payload);

      //如果存在就直接添加，改变状态
      state[action.payload.parent].repliesCount += 1;
      state[action.payload.parent].hasNewReply = true;
      state[action.payload.parent].isRepliesVisible = true;
      state[action.payload.parent].comments.push(action.payload);
      if (state[action.payload.parent].repliesCount === 1) {
        state[action.payload.parent].hasFetchedAllReplies = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      // 如果已经有评论，那么将新的评论添加到已有的评论中
      // 否则，创建一个新的评论列表
      const commentId = action.meta.arg.parentId;
      const payload = action.payload as {
        comments: CommentResponse[];
        hasMore: boolean;
      };

      console.log("fetchComments", payload);

      if (state[commentId]) {
        // 使用 Set 来去重
        const existingCommentIds = new Set(
          state[commentId].comments.map((comment) => comment.id)
        );
        const newComments = payload.comments.filter(
          (comment) => !existingCommentIds.has(comment.id)
        );
        state[commentId].comments = [
          ...state[commentId].comments,
          ...newComments,
        ];
        state[commentId].isRepliesVisible = true;
        //重置
        state[commentId].hasNewReply = false;
      }
      state[commentId].hasFetchedAllReplies = !payload.hasMore;
      //如果还有更多，那么page+1
      if (!state[commentId].hasFetchedAllReplies) {
        const len = state[commentId].comments.length;
        state[commentId].cursor = state[commentId].comments[len - 1].id;
      }
    });
  },
});

export const { initCommentState, addNewReply, collapseReplies } =
  userSlice.actions;

export default userSlice.reducer;

export const getReplies = (
  state: RootState,
  parentId: string
): CommentState | undefined => {
  return state.comment[parentId];
};
