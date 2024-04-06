import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { nanniesReducer } from "./nannies/nanniesSlice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isSignedIn"],
};

const nannyConfig = {
  key: "nanny",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  nanny: persistReducer(nannyConfig, nanniesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
