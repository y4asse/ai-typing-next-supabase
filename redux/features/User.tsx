import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type Payload = {
  id: string;
  email: string;
  name: string;
};

export const userSlice = createSlice({
  name: "user",
  initialState: { id: "", email: "", name: "" },
  reducers: {
    setUser: (state, { payload }: { payload: Payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.name = payload.name;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
