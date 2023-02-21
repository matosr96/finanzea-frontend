import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  EmptyExpensesState,
  EmptyExpenseState,
  PartialExpense,
} from "../../../types/expense";
import {
  createExpenseThunks,
  deleteExpenseThunks,
  updateExpenseThunks,
} from "./thunks";

export const createExpense = createAsyncThunk(
  "expenses/create",
  async (data: PartialExpense, thunkAPI) => {
    try {
      return await createExpenseThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteExpense = createAsyncThunk(
  "expenses/delete",
  async (uuid: string, thunkAPI) => {
    try {
      return await deleteExpenseThunks(uuid);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateExpense = createAsyncThunk(
  "expenses/update",
  async (data: PartialExpense, thunkAPI) => {
    try {
      return await updateExpenseThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: EmptyExpensesState,
    expense: EmptyExpenseState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingExpensesById: (state) => {
      state.loading = true;
    },
    setExpensesById: (state, action) => {
      state.loading = false;
      state.expenses = action.payload.expenses;
    },
    setOneExpenseById: (state, action) => {
      state.loading = false;
      state.expense = action.payload.expense;
    },
    deleteExpenseReducer: (state, action) => {
      state.loading = false;
      state.expenses = action.payload.expenses;
    },
    updateExpenseReducer: (state, action) => {
      state.loading = false;
      state.expenses = action.payload.expenses;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.expense = {};
      })
      .addCase(updateExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.expense = {};
      })
      .addCase(deleteExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.expense = {};
      });
  },
});

export const { reset } = expenseSlice.actions;
export const {
  loadingExpensesById,
  setExpensesById,
  setOneExpenseById,
  deleteExpenseReducer,
  updateExpenseReducer,
} = expenseSlice.actions;
