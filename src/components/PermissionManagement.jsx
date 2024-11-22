import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { updateRole } from "../services/api";

const PermissionManagement = () => {
  const { roles, setRoles } = useContext(AppContext);
  const permissions = ["Read", "Write", "Delete"];

  const togglePermission = async (roleId, permission) => {
    const role = roles.find((r) => r.id === roleId);
    const hasPermission = role.permissions.includes(permission);
    const updatedPermissions = hasPermission
      ? role.permissions.filter((p) => p !== permission)
      : [...role.permissions, permission];

    const updatedRole = { ...role, permissions: updatedPermissions };
    const res = await updateRole(roleId, updatedRole);
    setRoles(roles.map((r) => (r.id === roleId ? res.data : r)));
  };

  return (
    <div className="mt-8">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 text-transparent bg-clip-text">
           
        Permission Management
      </h2>

      {/* Permission Table */}
      <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200">
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">
                Role
              </th>
              {permissions.map((perm) => (
                <th
                  key={perm}
                  className="px-4 py-3 text-left text-gray-700 font-semibold text-center"
                >
                  {perm}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr
                key={role.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition duration-200`}
              >
                <td className="px-4 py-2 font-medium">{role.name}</td>
                {permissions.map((perm) => (
                  <td key={perm} className="text-center px-4 py-2">
                    <input
                      type="checkbox"
                      className="accent-teal-500 w-5 h-5"
                      checked={role.permissions.includes(perm)}
                      onChange={() => togglePermission(role.id, perm)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionManagement;
