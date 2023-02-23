import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  EmptySavingsState,
  EmptySavingState,
  PartialSaving,
} from "../../../types/saving";
import {
  createSavingThunks,
  deleteSavingThunks,
  updateSavingThunks,
} from "./thunks";

export const createSaving = createAsyncThunk(
  "savings/create",
  async (data: PartialSaving, thunkAPI) => {
    try {
      return await createSavingThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteSaving = createAsyncThunk(
  "savings/delete",
  async (uuid: string, thunkAPI) => {
    try {
      return await deleteSavingThunks(uuid);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateSaving = createAsyncThunk(
  "savings/update",
  async (data: PartialSaving, thunkAPI) => {
    try {
      return await updateSavingThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const savingsSlice = createSlice({
  name: "savings",
  initialState: {
    savings: EmptySavingsState,
    saving: EmptySavingState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingSavingById: (state) => {
      state.loading = true;
    },
    setSavingById: (state, action) => {
      state.loading = false;
      state.savings = action.payload.savings;
    },
    setOneSavingById: (state, action) => {
      state.loading = false;
      state.saving = action.payload.saving;
    },
    deleteSavingReducer: (state, action) => {
      state.loading = false;
      state.savings = action.payload.savings;
    },
    updateSavingReducer: (state, action) => {
      state.loading = false;
      state.savings = action.payload.savings;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSaving.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSaving.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createSaving.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.saving = {};
      })
      .addCase(updateSaving.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSaving.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateSaving.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.saving = {};
      })
      .addCase(deleteSaving.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSaving.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteSaving.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.saving = {};
      });
  },
});

export const { reset } = savingsSlice.actions;
export const {
  loadingSavingById,
  setSavingById,
  setOneSavingById,
  deleteSavingReducer,
  updateSavingReducer,
} = savingsSlice.actions;
