import { EmptyUserState, PartialUser, SigninProps } from "../../../types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  logoutAdminThunks,
  signinUserThunks,
  signupUserThunks,
} from "./thunks";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  error: "",
  success: false,
  successSignup: false,
  loading: false,
};

export const signinUser = createAsyncThunk(
  "/signin",
  async ({ email, password }: SigninProps, thunkAPI) => {
    try {
      return await signinUserThunks(email, password);
    } catch (err: any) {
      const message = err;
      console.log(message)
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "/signup",
  async (user: PartialUser, thunkAPI) => {
    try {
      return await signupUserThunks(user);
    } catch (err: any) {
      const message = err;
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk("/logout", async () => {
  await logoutAdminThunks();
  document.location.href = "/";
});

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingUsersById: (state) => {
      state.loading = true;
    },
    setUsersById: (state, action) => {
      state.loading = false;
      state.user = action.payload.admin;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.user = null;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successSignup = true;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.user = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = usersSlice.actions;
export const { loadingUsersById, setUsersById } = usersSlice.actions;
