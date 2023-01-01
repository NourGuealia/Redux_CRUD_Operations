import React, { useState } from "react";
import { FaMale, FaFemale, FaCheck } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectAllUsers, selectUserById, userUpdated } from "./userSlice";
import { useNavigate } from "react-router-dom";

const UpdateUserForm = () => {
  // get the id :
  const { userId } = useParams();

  // get the user selected data :

  const user = useSelector((state) => selectUserById(state, userId));

  // States :
  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState(user?.gender);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUpdate = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && gender) {
      console.log(firstName, lastName);
      dispatch(userUpdated({ id: userId, firstName, lastName, email, gender }));
      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("");
      navigate("/");
    }
  };

  const canSave =
    Boolean(firstName) &&
    Boolean(lastName) &&
    Boolean(email) &&
    Boolean(gender);

  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <form className="w-[700px] h-[500px] border " onSubmit={onUpdate}>
        <div className=" flex gap-8 items-center mt-4 mb-12 mx-4 pb-8 border-b ">
          <Link to="/">
            {" "}
            <MdKeyboardBackspace size={30} />
          </Link>

          <span className="text-3xl font-bold">Edit User</span>
        </div>

        <div className="flex">
          <div className=" flex flex-col px-4 w-1/2  ">
            <label className="text-gray-600 ">First name</label>

            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your first name here"
              className="w-ful mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700  focus:outline-none focus:border-sky-600"
            />
          </div>
          <div className="flex flex-col px-4 w-1/2 ">
            <label className="text-gray-600 ">Last name</label>

            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter your last name here"
              className="w-ful mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700  focus:outline-none focus:border-sky-600"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col px-4 w-1/2 ">
            <label className="text-gray-600 ">Email</label>

            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email here"
              className="w-ful mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700  focus:outline-none focus:border-sky-600"
            />
          </div>
          <div className="flex flex-col px-4 w-1/2 ">
            <label className="text-gray-600 ">gender</label>

            <div className="w-full flex justify-between gap-4 mt-2 mb-6 h-10  ">
              <label className="  w-1/2 cursor-pointer ">
                <input
                  required
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  className="peer sr-only"
                  name="gender"
                  value="female"
                  defaultChecked={gender === "Female"}
                />
                <div className=" w-full max-w-xl rounded-md bg-white  text-gray-600 ring-2 ring-gray-300 transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                  <div className="h-10 flex  justify-around items-center">
                    <p className="text-sm font-semibold uppercase text-gray-500">
                      Female
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
              </label>

              <label className="  w-1/2 cursor-pointer ">
                <input
                  required
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  className="peer sr-only"
                  name="gender"
                  value="Male"
                  defaultChecked={gender === "Male"}
                />
                <div className=" w-full max-w-xl rounded-md bg-white  text-gray-600 ring-2 ring-gray-300 transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                  <div className="h-10 flex  justify-around items-center">
                    <p className="text-sm font-semibold uppercase text-gray-500">
                      Male
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-6 px-4 w-full ">
          <button
            disabled={!canSave}
            type="submit"
            className="w-1/4 p-3 bg-blue-600 text-white rounded font-bold disabled:bg-[#7b9de7]"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserForm;
