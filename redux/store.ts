import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./features/Modal";
import scoreReducer from "./features/Scores";
import gameReducer from "./features/Game";
import userReducer from "./features/User";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    score: scoreReducer,
    game: gameReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
