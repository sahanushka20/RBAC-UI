import React from 'react';
import { AppProvider } from './context/AppContext';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">RBAC Management Dashboard</h1>
        {/* Your content goes here */}
        <div className="mt-8">
          <UserManagement />
          <RoleManagement />
          <PermissionManagement />
          </div>
      </div>
    </div>
    </AppProvider>
  );
};

export default App;

