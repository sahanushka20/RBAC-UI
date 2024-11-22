import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getRoles = () => axios.get(`${API_URL}/roles`);
export const createUser = async (user) => {
    try {
      const res = await axios.post(`${API_URL}/users`, user);
      return res;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };
// export const createUser = (data) => axios.post(`${API_URL}/users`, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
export const createRole = (data) => axios.post(`${API_URL}/roles`, data);
export const updateRole = (id, data) => axios.put(`${API_URL}/roles/${id}`, data);
export const deleteRole = (id) => axios.delete(`${API_URL}/roles/${id}`);
