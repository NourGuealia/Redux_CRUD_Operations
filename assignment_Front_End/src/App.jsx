import { useState } from "react";
import "./App.css";
import AddUserForm from "./features/users/AddUserForm";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <div>
      <AddUserForm />

      <UsersList />
    </div>
  );
}

export default App;
