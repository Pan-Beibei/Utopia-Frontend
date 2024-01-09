import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store/store";
import { DrinkType } from "../../types";

interface StateProps {
  drinks: Array<DrinkType>;
}

const initialState: StateProps = {
  drinks: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setDrinks(state, action) {
      state.drinks = action.payload;
    },
  },
});

export const { setDrinks } = homePageSlice.actions;

export default homePageSlice.reducer;

export const getDrinks = (state: RootState) => state.homePage.drinks;
