// src/context/AuthContext.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

export const AuthContextProvider = ({ children }) => {
  const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      return response.data;
    } catch (error) {
      console.error('Registration error', error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  };

  // Other context logic...

  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

