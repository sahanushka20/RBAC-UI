import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { createRole, updateRole, deleteRole } from "../services/api";

const RoleManagement = () => {
  const { roles, setRoles } = useContext(AppContext);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const permissions = ["Read", "Write", "Delete"];

  const handleCreate = async () => {
    const res = await createRole(newRole);
    setRoles([...roles, res.data]);
    setNewRole({ name: "", permissions: [] });
  };

  const handleUpdate = async (id, updatedRole) => {
    const res = await updateRole(id, updatedRole);
    setRoles(roles.map((role) => (role.id === id ? res.data : role)));
  };

  const handleDelete = async (id) => {
    await deleteRole(id);
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="mt-8">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 text-transparent bg-clip-text">
           
        Role Management
      </h2>

      <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
  <div className="overflow-x-auto"> {/* Make the table horizontally scrollable on small screens */}
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
          <th className="px-4 py-3 text-left text-gray-700 font-semibold">Role</th>
          <th className="px-4 py-3 text-left text-gray-700 font-semibold">Permissions</th>
          <th className="px-4 py-3 text-left text-gray-700 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr
            key={role.id}
            className="border-b hover:bg-gray-100 transition duration-200"
          >
            <td className="px-4 py-2">{role.name}</td>
            <td className="px-4 py-2">{role.permissions.join(", ")}</td>
            <td className="px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mr-2"
                onClick={() =>
                  handleUpdate(role.id, { ...role, permissions: ["Read"] })
                }
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                onClick={() => handleDelete(role.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      {/* Add New Role Section */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg shadow-lg p-6  text-gray-600">
        <h3 className="text-2xl font-semibold text-gray-800">Add New Role</h3>
        <div className="mt-4">
          {/* Role Name Input */}
          <input
            className="border p-3 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-300"
            placeholder="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          />
        </div>

        {/* Permissions Section */}
        <div className="mt-4 flex gap-4">
          {permissions.map((perm) => (
            <label key={perm} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-purple-500"
                checked={newRole.permissions.includes(perm)}
                onChange={(e) => {
                  const updatedPermissions = e.target.checked
                    ? [...newRole.permissions, perm]
                    : newRole.permissions.filter((p) => p !== perm);
                  setNewRole({ ...newRole, permissions: updatedPermissions });
                }}
              />
              {perm}
            </label>
          ))}
        </div>

        {/* Create Button */}
        <button
          className="mt-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-6 py-2 rounded shadow-lg hover:opacity-90 transition"
          onClick={handleCreate}
        >
          Create Role
        </button>
      </div>
    </div>
  );
};

export default RoleManagement;
