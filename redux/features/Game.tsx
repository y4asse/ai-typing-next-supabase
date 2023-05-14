import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  currentCharIndex: number;
  currentTextIndex: number;
  timer: number;
  english: string[];
  japanese: string[];
}

const initialState: State = {
  currentCharIndex: 0,
  currentTextIndex: 0,
  timer: 10,
  english: [],
  japanese: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    reset: (state) => {
      state.currentCharIndex = 0;
      state.currentTextIndex = 0;
      state.timer = 10;
      state.english = [];
      state.japanese = [];
    },
    setCurrentCharIndex: (state, { payload }) => {
      state.currentCharIndex = payload;
    },
    addCurrentCharIndex: (state, { payload }) => {
      state.currentCharIndex += payload;
    },
    setCurrentTextIndex: (state, { payload }) => {
      state.currentTextIndex = payload;
    },
    addCurrentTextIndex: (state, { payload }) => {
      state.currentTextIndex += payload;
    },
    clearTimer: (state) => {
      state.timer = 10;
    },
    setTimer: (state, { payload }: { payload: number }) => {
      state.timer = payload;
    },
    subTimer: (state) => {
      state.timer -= 1;
    },

    addJapaneseText: (state, { payload }: { payload: string }) => {
      state.japanese = [...state.japanese, payload];
    },
    clearJapaneseText: (state) => {
      state.japanese = [];
    },
    clearEnglishText: (state) => {
      state.english = [];
    },
    addEnglishText: (state, { payload }: { payload: string }) => {
      state.english = [...state.english, payload];
    },
  },
});

export const {
  setCurrentCharIndex,
  setCurrentTextIndex,
  clearTimer,
  setTimer,
  addJapaneseText,
  subTimer,
  clearJapaneseText,
  clearEnglishText,
  addEnglishText,
  addCurrentTextIndex,
  addCurrentCharIndex,
  reset,
} = gameSlice.actions;

export default gameSlice.reducer;
