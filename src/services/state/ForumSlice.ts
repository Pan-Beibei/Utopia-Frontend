import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";

interface StateProps {
  search: string;
  isCreatePostVisible: boolean;
}

const initialState: StateProps = {
  search: "",
  isCreatePostVisible: false,
};

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearSearch(state, _action) {
      state.search = "";
    },

    setIsCreatePostVisible(state, action) {
      state.isCreatePostVisible = action.payload;
    },
  },
});

export const { setSearch, clearSearch, setIsCreatePostVisible } =
  forumSlice.actions;

export default forumSlice.reducer;

export const getSearch = (state: RootState) => state.forum.search;
export const getIsCreatePostVisible = (state: RootState) =>
  state.forum.isCreatePostVisible;
