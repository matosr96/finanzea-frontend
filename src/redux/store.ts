import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../types/user";
import { categoriesSlice } from "./states/category/slice";
import { expenseSlice } from "./states/expense/slice";
import { savingsSlice } from "./states/saving/slice";
import { usersSlice } from "./states/user/slice";

export interface AppStore {
  user: UserInfo;
  categories: any;
  expenses: any;
  savings: any;
}

export default configureStore<AppStore>({
  reducer: {
    user: usersSlice.reducer,
    categories: categoriesSlice.reducer,
    expenses: expenseSlice.reducer,
    savings: savingsSlice.reducer,
  },
});
