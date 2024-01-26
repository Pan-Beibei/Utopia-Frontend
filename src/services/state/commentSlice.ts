import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";
import { CommentResponse } from "../api/comment";
import { getCommentsByParentId } from "../api/comment";

export interface CommentState {
  comments: CommentResponse[];
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
    collapseReplies: (state, action) => {
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
      // console.log(state.comments);

      console.log("addNewReply", action.payload);
      //如果不存在就创建一个，这里解决未展开更多时，直接评论的问题
      if (!state[action.payload.parent]) {
        state[action.payload.parent] = {
          comments: [],
          isRepliesVisible: true,
          hasNewReply: true,
          hasFetchedAllReplies: false,
          cursor: "",
          pageSize: 3,
        };
      }

      //存在就直接添加，临时存放一下，后面拉取数据的时候会覆盖
      state[action.payload.parent].comments.push(action.payload);
    },
    hideReplies(state, action) {
      if (state[action.payload]) {
        state[action.payload].isRepliesVisible = false;
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
      } else {
        state[commentId] = {
          comments: payload.comments,
          isRepliesVisible: true,
          hasNewReply: false,
          hasFetchedAllReplies: false,
          cursor: "",
          pageSize: action.meta.arg.pageSize,
        };
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

export const { addNewReply, collapseReplies } = userSlice.actions;

export default userSlice.reducer;

export const getReplies = (
  state: RootState,
  parentId: string
): CommentState | undefined => {
  return state.comment[parentId];
};
