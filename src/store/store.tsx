import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReduser from "./reducers/UserSlice";
import { usersApi } from "../services/userService";

const rootReducer = combineReducers({
  userReduser,
  [(usersApi.reducerPath)]: usersApi.reducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware )
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
