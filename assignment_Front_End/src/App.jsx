import { useState } from "react";
import "./App.css";
import AddUserForm from "./features/AddUserForm";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <div>
      <UsersList />
    </div>
  );
}

export default App;
