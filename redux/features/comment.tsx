import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Database } from "@/database.types";
import { useRef } from "react";

type Comment = Database["public"]["Tables"]["comments"]["Row"];

interface State {
  editingComment: Comment;
}

const initialState: State = {
  editingComment: {
    content: "",
    created_at: "",
    id: "",
    name: "",
    user_id: "",
  }
};

export const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    setEditingComment: (state, { payload }: { payload: Comment }) => {
      state.editingComment = payload;
    },
    clearEditingComment: (state) => {
      state.editingComment = {
        content: "",
        created_at: "",
        id: "",
        name: "",
        user_id: "",
      };
    },
  },
});

export const { setEditingComment, clearEditingComment } = commentSlice.actions;

export default commentSlice.reducer;
