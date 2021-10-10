import { RootState } from "../store";

export const selectLoading = (state: RootState) => state.loading.loading;

export const selectLoadError = (state: RootState) => state.loading.error;
