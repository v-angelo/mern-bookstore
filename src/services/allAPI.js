import apiService from "../api/apiService";

// register api: called by authentication component when register button is clicked
export const registerAPI = async (userData) => {
  return await apiService("POST", "/register", userData);
};

// login api: called by authentication component when login button is clicked
export const loginAPI = async (userData) => {
  return await apiService("POST", "/login", userData);
};

// google-login api: called by auth component when google login button clicked
export const googleLoginAPI = async (userData) => {
  return await apiService("POST", "/google-login", userData);
};

// useredit api: called by Edit component when update button is clicked
export const userUpdateAPI = async (userId, userData) => {
  return await apiService("PUT", `/user/${userId}`, userData);
};

// add book api: called by UploadBook component when add button is clicked
export const addBookAPI = async (bookDetails) => {
  return await apiService("POST", `/books`, bookDetails);
};
