import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

import coffeesReducer from "./coffee/coffee.slice";
import loadingReducer from "./loading/loading.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coffees: coffeesReducer,
    loading: loadingReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
