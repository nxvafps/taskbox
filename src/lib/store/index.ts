import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasksSlice";

const store: EnhancedStore = configureStore({
  reducer: {
    taskbox: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
