import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  reducer: { users: persistReducer(persistConfig, usersReducer) },
});
export const persistor = persistStore(store);
