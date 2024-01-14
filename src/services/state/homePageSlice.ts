import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store/store";
import { DrinkType } from "../../types";

interface StateProps {
  drinks: {
    [key in string]: DrinkType[];
  };
}

const initialState: StateProps = {
  drinks: {},
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setDrinks(state, action) {
      if (Object.keys(state.drinks).length > 0) return;

      const drinks = action.payload;
      drinks.forEach((drink: DrinkType) => {
        if (!state.drinks[drink.type]) state.drinks[drink.type] = [];
        state.drinks[drink.type].push(drink);
      });
    },
  },
});

export const { setDrinks } = homePageSlice.actions;

export default homePageSlice.reducer;

export const getDrinks = (state: RootState) => state.homePage.drinks;
