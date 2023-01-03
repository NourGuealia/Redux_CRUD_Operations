import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./userAuthSlice";
const Login = () => {
  // dispatch
  const dispatch = useDispatch();
  // state :
  const [email, setEmail] = useState("johndoe66@gmail.com");
  const [password, setPassword] = useState("somePassword");

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-96 h-96 ">
        <form
          className="w-full h-full flex flex-col gap-9 p-5"
          onClick={onLogin}
        >
          <div>
            {" "}
            <label className="text-gray-600 w-full  ">Email</label>
            <input
              className="h-10 w-full bg-white rounded-md border p-3 "
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
            />
          </div>
          <div>
            {" "}
            <label className="text-gray-600 w-full ">Password</label>
            <input
              className="h-10 w-full bg-white rounded-md border p-3 "
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            className="h-10 bg-[#3b82f6] rounded-md border p-3 text-center font-bold text-white "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
