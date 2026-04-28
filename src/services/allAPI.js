import apiService from "../api/apiService";

// register api: called by authentication component when register button is clicked
export const registerAPI = async (userData) => {
  return await apiService("POST", "/register", userData);
};

// login api: called by authentication component when login button is clicked
export const loginAPI = async (userData) => {
  return await apiService("POST", "/login", userData);
};
