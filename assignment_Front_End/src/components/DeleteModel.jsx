import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userDeleted } from "../features/users/userSlice";

const DeleteModel = ({ setOpen, userId, setUserId }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    //e.preventDefault();
    if (userId) {
      dispatch(userDeleted(userId));
      setUserId(null);
      setOpen(false);
    }
  };
  return (
    <div className="w-full h-screen fixed bg-gray-500 left-0 top-0 flex justify-center items-center bg-opacity-70 ">
      <div className="h-52 w-96 rounded-lg border p-5 bg-white shadow-lg">
        <div className="w-full  flex  items-center justify-start gap-6 mb-3">
          <FaTrashAlt size={20} />
          <h1 className="font-bold text-2xl ">
            Delete confirmation of{userId}
          </h1>
        </div>
        <p className="w-full text-lg mb-3  ">
          Are you sure you want to delete this user{" "}
        </p>
        <div className="w-full flex items-center justify-center gap-4 ">
          <button
            onClick={() => onDelete()}
            className="w-20 h-7 bg-green-500 text-white font-bold rounded-md"
          >
            YES
          </button>
          <button
            onClick={() => setOpen(false)}
            className="w-20 h-7 bg-red-600 text-white font-bold rounded-md"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
