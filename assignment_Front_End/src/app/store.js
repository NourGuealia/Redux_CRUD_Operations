import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "../features/users/userSlice";
import userAuthReducer from "../features/authentification/userAuthSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    userAuth: userAuthReducer,
  },
});
