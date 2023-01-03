import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initial state :
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  userAuth: false,
  token: token,
  status: "idle",
  error: null,
};

// login function :

export const login = createAsyncThunk("userAuth/login", async (data) => {
  const res = await axios({
    method: "post",
    url: "http://localhost:3000/login",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
    data: data,
  });

  return res.data.token;
});

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = "";
      state.userAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        const token = action.payload;
        state.token = token;
        state.userAuth = true;
        localStorage.setItem("token", token);
        //localStorage.clear();
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
