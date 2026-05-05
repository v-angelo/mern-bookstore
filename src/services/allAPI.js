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

// getHomeBooks api: called by home component when page opens
export const getHomePageBooksAPI = async () => {
  return await apiService("GET", "/home-books", {});
};

// all-books: getAllBooksAPI - called by Books component when page loads
export const getAllBooksAPI = async (searchKey) => {
  return await apiService("GET", `/all-books?search=${searchKey}`, {});
};

// user uploaded books: called by BookStatus component when it opens
export const getAllUserBooksAPI = async () => {
  return await apiService("GET", "/user-books", {});
};

// user bought books: called by Purchase component when it opens
export const getAllUserBoughtBooksAPI = async () => {
  return await apiService("GET", "/bought-books", {});
};

// view a single book details: called by View component when it loads
export const getBookDetailsAPI = async (bookID) => {
  return await apiService("GET", `/book-details/${bookID}`, {});
};

// called by BookStatus component when delete button is clicked
export const deleteUserUploadBooksAPI = async (bookID) => {
  return await apiService("DELETE", `/books/${bookID}`, {});
};
