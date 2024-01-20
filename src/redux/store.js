import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./carsSlice";
import { favoriteReducer } from "./favoriteSlice";

const rentalPersistConfig = {
  key: "rental",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(rentalPersistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

export const persistor = persistStore(store);


// auth: persistReducer(authPersistCfg, authReducer),
// contacts: contactsReducer,
// filter: filterReducer,