import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers, fetchUsers } from "./userSlice";
import { Spinner } from "../../components/Spinner";
/*  */

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector((state) => state.users.status);
  const usersError = useSelector((state) => state.users.error);

  useEffect(() => {
    if (usersStatus === "idle") {
      console.log(users);
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  let content;
  if (usersStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (usersStatus === "succeeded") {
    content = (
      <table className="border-collapse border border-slate-300 ">
        <thead className="bg-gray-300 h-10">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="border-b border-slate-200 py-4 text-center">
                {user.id}
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                {user.first_name}
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                {user.last_name}
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                {user.email}
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                {user.gender}
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                <button className="bg-[#eab308] px-5 py-2 text-white font-bold rounded-lg">
                  Edit
                </button>
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                <button className="bg-[#ef4444] px-5 py-2 text-white font-bold rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (usersStatus === "failed") {
    content = <div>{usersError}</div>;
  }
  return (
    <div className="h-screen w-full flex justify-center pt-20">
      <div className="flex flex-col  w-[1000px] p-5 border rounded  ">
        <div className="flex justify-between mb-10">
          <div className="font-bold text-3xl ">Dashbord</div>
          <button className="p-3 bg-blue-600 text-white rounded font-bold">
            Add user
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default UsersList;
