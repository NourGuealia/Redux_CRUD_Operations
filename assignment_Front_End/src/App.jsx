import { useState } from "react";
import "./App.css";
import AddUserForm from "./features/users/AddUserForm";
import UsersList from "./features/users/UsersList";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import UpdateUserForm from "./features/users/UpdateUserForm";
import DeleteModel from "./components/DeleteModel";
import Login from "./features/authentification/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.userAuth);

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<ProtectedRoutes />}>
            {" "}
            <Route path="/" exact element={<UsersList />} />{" "}
            <Route path="/addUser" element={<AddUserForm />} />{" "}
            <Route path="/editUser/:userId" element={<UpdateUserForm />} />{" "}
          </Route>
          <Route path="/login" element={<Login />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
