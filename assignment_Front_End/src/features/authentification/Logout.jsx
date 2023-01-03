import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./userAuthSlice";

const Logout = () => {
  // dispatch
  const dispatch = useDispatch();
  const onLgout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <button
      onClick={onLgout}
      className="bg-[#2563eb] px-5 py-2 text-white font-bold rounded-lg"
    >
      Logout
    </button>
  );
};

export default Logout;
