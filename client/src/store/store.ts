import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import dexSlice from "./slices/dexSlice";
import { tokensSlice } from "./slices/tokenSlice";
import { marketSlice } from "./slices/marketSlice";

const reducers = combineReducers({
  dex: dexSlice,
  [tokensSlice.reducerPath]: tokensSlice.reducer,
  [marketSlice.reducerPath]: marketSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([tokensSlice.middleware, marketSlice.middleware]);
  },
});

export default store;
