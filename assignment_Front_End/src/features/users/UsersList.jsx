import React from "react";

const UsersList = () => {
  return (
    <div className="h-screen w-full flex justify-center pt-20 ">
      <div className="flex flex-col  w-[900px] p-5 border rounded">
        <div className="flex justify-between mb-6">
          <div className="font-bold text-3xl ">Dashbord</div>
          <button className="p-3 bg-blue-600 text-white rounded font-bold">
            Add user
          </button>
        </div>
        <table class="border-collapse border border-slate-300...">
          <thead className="bg-gray-300 h-10">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b border-slate-700 ...">Indiana</td>
              <td class="border-b border-slate-700 ...">Indianapolis</td>
              <td class="border-b border-slate-700 ...">Indiana</td>
              <td class="border-b border-slate-700 ...">Indianapolis</td>
              <td class="border-b border-slate-700 ...">Indiana</td>
              <td class="border-b border-slate-700 ...">Indianapolis</td>
              <td class="border-b border-slate-700 ...">Indianapolis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
