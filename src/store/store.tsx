import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { usersApi } from "../services/UserService";

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
