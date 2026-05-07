import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import {
  bookListAPI,
  editBookStatusAPI,
  userListAPI,
} from "../../services/allAPI";
import { useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    if (currentTab == 2) {
      getAllUsers();
    } else {
      getAllBooks();
    }
  }, [currentTab]);

  // console.log(allUsers);
  // console.log(allBooks);

  const getAllBooks = async () => {
    const result = await bookListAPI();

    if (result.status == 200) {
      setAllBooks(result.data);
    }
  };

  const getAllUsers = async () => {
    const result = await userListAPI();

    if (result.status == 200) {
      setAllUsers(result.data);
    }
  };

  const updateBookStatus = async (id) => {
    const result = await editBookStatusAPI(id);

    if (result.status == 200) {
      toast.success("Book approved successfully!");
      getAllBooks();
    }
  };

  return (
    <>
      <AdminHeader />
      <section className="grid-cols-5 gap-2 md:grid">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="mb-10 text-center text-2xl font-bold">
            All Resources
          </h1>

          {/* tabs */}
          <article className="my-8 flex items-center justify-center text-lg font-medium">
            <button
              onClick={() => setCurrentTab(1)}
              className={`cursor-pointer rounded-t ${currentTab == 1 && "border border-b-0"} border-b border-gray-200 p-3`}
            >
              Books
            </button>
            <button
              onClick={() => setCurrentTab(2)}
              className={`cursor-pointer rounded-t ${currentTab == 2 && "border border-b-0"} border-b border-gray-200 p-3`}
            >
              Users
            </button>
          </article>

          {/* tab contents */}
          {currentTab == 1 && (
            <section className="my-5 w-full grid-cols-4 md:grid">
              {/* duplicate according to number of books */}
              {allBooks.length > 0 ? (
                allBooks?.map((book) => (
                  <div
                    key={book?._id}
                    className="m-4 rounded p-3 shadow md:my-0"
                  >
                    <img
                      className="h-75 w-full object-contain"
                      src={book?.imageURL}
                      alt="bookImg"
                    />
                    <div className="mt-4 flex flex-col items-center justify-center">
                      <h2 className="text-xl font-bold text-blue-700">
                        {book?.author}
                      </h2>
                      <h3 className="text-lg">{book?.title}</h3>
                      <p className="font-bold text-red-500">
                        {book?.dicountPrice}
                      </p>

                      {book?.status != "approved" ? (
                        <button
                          onClick={() => updateBookStatus(book?._id)}
                          className="mt-2 cursor-pointer rounded bg-green-600 p-2 text-white hover:opacity-90"
                        >
                          Approve
                        </button>
                      ) : (
                        <FaCheckCircle className="text-5xl text-green-500" />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div>No books are added yet!</div>
              )}
            </section>
          )}
          {currentTab == 2 && (
            <section className="my-5 w-full grid-cols-3 md:grid">
              {/* duplicate according to number of books */}
              {allUsers.length > 0 ? (
                allUsers?.map((user) => (
                  <div key={user?._id} className="m-2 rounded bg-gray-200 p-2">
                    <p className="text-sm font-bold text-red-500">
                      ID: {user?._id}
                    </p>
                    <div className="mt-3 flex items-center">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={
                          user?.picture === ""
                            ? "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                            : user?.picture.startsWith(
                                  "https://lh3.googleusercontent.com/",
                                )
                              ? user?.picture
                              : `${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`
                        }
                        alt="user"
                      />

                      <div className="ml-3 flex w-full flex-col">
                        <h4 className="text-lg font-bold text-blue-400">
                          {user?.username}
                        </h4>
                        <p className="text-xs">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-xl font-bold">
                  No Users have registered yet!
                </div>
              )}
            </section>
          )}
        </div>
      </section>

      {/* toaster */}
      <ToastContainer position="top-center" theme="colored" autoClose={1500} />

      <Footer />
    </>
  );
}

export default AdminResource;
