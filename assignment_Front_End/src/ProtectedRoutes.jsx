import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.userAuth);

  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
