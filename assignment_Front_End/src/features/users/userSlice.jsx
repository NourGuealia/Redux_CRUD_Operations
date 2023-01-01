import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Initial user state
const initialState = {
  users: [],
  status: "idle",
  error: null,
};

// Fetch all users :

var configGetUsers = {};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3000/data",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "access-control-allow-origin": "*",
    },
  });

  return response.data;
});

// User Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(first_name, last_name, email, gender) {
        return {
          payload: {
            id: nanoid(),
            first_name,
            last_name,
            email,
            gender,
          },
        };
      },
    },
    userUpdated(state, action) {
      const { id, firstName, lastName, email, gender } = action.payload;
      const existingUser = state.users.find((user) => user.id == id);
      if (existingUser) {
        existingUser.first_name = firstName;
        existingUser.last_name = lastName;
        existingUser.email = email;
        existingUser.gender = gender;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

export const { userAdded, userUpdated } = userSlice.actions;
export const selectAllUsers = (state) => state.users.users;

export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id == userId);
