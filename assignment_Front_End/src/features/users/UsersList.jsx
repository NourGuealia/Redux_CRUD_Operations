import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers, fetchUsers } from "./userSlice";
import { Spinner } from "../../components/Spinner";
import { Link } from "react-router-dom";
import DeleteModel from "../../components/DeleteModel";
import Logout from "../authentification/Logout";
/*  */

const UsersList = () => {
  //  delete model state :
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  // get data from the store
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
      <table className="  border-collapse border border-slate-300 ">
        <thead className="bg-gray-300 h-10">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="w-1/6  bg-slate-100 border-b border-slate-200 py-4 text-center">
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
                <Link to={`/editUser/${user.id}`} className="button">
                  <button className="bg-[#eab308] px-5 py-2 text-white font-bold rounded-lg">
                    Edit
                  </button>{" "}
                </Link>
              </td>
              <td className="border-b border-slate-200 py-4 text-center">
                <button
                  onClick={() => {
                    setUserId(user.id);
                    setOpen(true);
                  }}
                  className="bg-[#ef4444] px-5 py-2 text-white font-bold rounded-lg"
                >
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
    <div className="h-screen w-full flex flex-col gap-3 p-10">
      {/* logout button  */}
      <div className="px-24  h-auto w-full  flex justify-end items-center">
        <Logout />
      </div>
      <div className="h-full w-full flex justify-center pt-20">
        {/* the model component */}
        {open && (
          <DeleteModel
            setOpen={setOpen}
            userId={userId}
            setUserId={setUserId}
          />
        )}
        <div className="flex flex-col h-[600px]  w-[1200px] p-5 border rounded  overflow-y-auto ">
          <div className="flex justify-between mb-10">
            <div className="font-bold text-3xl ">Dashbord</div>
            <Link to="/addUser">
              {" "}
              <button className="p-3 bg-blue-600 text-white rounded font-bold">
                Add user
              </button>
            </Link>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
