import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadStatus = "SUCCESS" | "FAILED" | "PROGRESS";

interface LoadingState {
  loading: Record<string, LoadStatus>;
  error: Record<string, string>;
}

const initialState: LoadingState = {
  loading: {},
  error: {},
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startFetching: (state: LoadingState, action: PayloadAction<string>) => {
      state.loading = {
        ...state.loading,
        [action.payload]: "PROGRESS",
      };
    },
    successFetching: (state: LoadingState, action: PayloadAction<string>) => {
      state.loading = {
        ...state.loading,
        [action.payload]: "SUCCESS",
      };
      state.error = {
        ...state.error,
        [action.payload]: "",
      };
    },
    failedFetching: (
      state: LoadingState,
      action: PayloadAction<{ name: string; error: string }>
    ) => {
      const { name, error } = action.payload;

      state.loading = {
        ...state.loading,
        [name]: "FAILED",
      };
      state.error = {
        ...state.error,
        [name]: error,
      };
    },
  },
});

export const { startFetching, successFetching, failedFetching } = loadingSlice.actions;

export default loadingSlice.reducer;
