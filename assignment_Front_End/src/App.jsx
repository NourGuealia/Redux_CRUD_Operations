import { useState } from "react";
import "./App.css";
import AddUserForm from "./features/users/AddUserForm";
import UsersList from "./features/users/UsersList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UsersList />} />{" "}
          <Route path="/addUser" element={<AddUserForm />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
