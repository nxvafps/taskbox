import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasksSlice";

const store = configureStore({
  reducer: {
    taskbox: tasksReducer,
  },
});

export default store;
