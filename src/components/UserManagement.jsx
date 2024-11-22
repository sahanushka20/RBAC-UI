import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ]);

  const handleEdit = (user) => alert(`Editing user: ${user.name}`);
  const handleDelete = (id) => setUsers(users.filter((user) => user.id !== id));
  const handleToggleStatus = (user) =>
    setUsers(
      users.map((u) =>
        u.id === user.id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u
      )
    );

  return (
    <div className="bg-white rounded-lg shadow-lg text-gray-800 p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Management</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left">
          <thead className="bg-gradient-to-r from-purple-200 to-purple-300">
            <tr>
              <th className="px-4 py-3 text-gray-700">ID</th>
              <th className="px-4 py-3 text-gray-700">Name</th>
              <th className="px-4 py-3 text-gray-700">Email</th>
              <th className="px-4 py-3 text-gray-700">Role</th>
              <th className="px-4 py-3 text-gray-700">Status</th>
              <th className="px-4 py-3 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={user.id}
                className={`border-t ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:underline mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:underline mx-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggleStatus(user)}
                    className="text-gray-600 hover:underline mx-1"
                  >
                    Toggle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
