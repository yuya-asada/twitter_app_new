import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface USER {
  displayName: string;
  photoUrl: string;
}

export const userSlice = createSlice({
  //userSliceを作成
  name: "user",
  initialState: {
    user: { uid: "", photoUrl: "", displayName: "" },
    //useid,avatar画像,usernameをこのスライスで管理します
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      //user(ログインしているuser)に受け取ったpayloadを代入します
    },
    logout: (state) => {
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
    updateUserProfile: (state, action: PayloadAction<USER>) => {
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
//userのstateを読んでくれる関数

export default userSlice.reducer;
