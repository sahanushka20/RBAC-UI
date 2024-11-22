import React, { createContext, useState, useEffect } from 'react';
import { getUsers, getRoles } from '../services/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [usersRes, rolesRes] = await Promise.all([getUsers(), getRoles()]);
      setUsers(usersRes.data);
      setRoles(rolesRes.data);
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles }}>
      {children}
    </AppContext.Provider>
  );
};
