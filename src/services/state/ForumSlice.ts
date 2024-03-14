import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";

interface StateProps {
  filter: string;
  isCreatePostVisible: boolean;
}

const initialState: StateProps = {
  filter: "",
  isCreatePostVisible: false,
};

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },

    setIsCreatePostVisible(state, action) {
      state.isCreatePostVisible = action.payload;
    },
  },
});

export const { setFilter, setIsCreatePostVisible } = forumSlice.actions;

export default forumSlice.reducer;

export const getFilter = (state: RootState) => state.forum.filter;
export const getIsCreatePostVisible = (state: RootState) =>
  state.forum.isCreatePostVisible;
