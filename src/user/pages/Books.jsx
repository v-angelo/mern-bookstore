import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { getAllBooksAPI } from "../../services/allAPI";
import { searchContext } from "../../context/ShareContext";

function Books() {
  const { searchKey, setSearchKey } = useContext(searchContext);

  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [dummyAllBooks, setDummyAllBooks] = useState([]);

  // console.log(allBooks);
  // console.log(categoryList);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token");
      setToken(userToken);
      getBooks();
    }
  }, [searchKey]);

  const getBooks = async () => {
    const result = await getAllBooksAPI(searchKey);

    if (result.status == 200) {
      setAllBooks(result.data);
      setDummyAllBooks(result.data);

      const tempCategoryList = result.data.map((item) => item.category);
      // console.log(tempCategoryList);

      setCategoryList([...new Set(tempCategoryList)]);
    }
  };

  const filterBooks = (category) => {
    if (category != "all") {
      setAllBooks(dummyAllBooks?.filter((book) => book.category == category));
    } else {
      getBooks();
    }
  };

  return (
    <>
      <Header />

      {token ? (
        <section>
          {/* header */}
          <div className="my-5 flex flex-col items-center justify-center">
            <h1 className="my-5 text-3xl font-bold">All Books</h1>
            <div className="my-5 flex">
              <input
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                type="text"
                className="border border-gray-200 p-2 md:w-100"
                placeholder="Search by Book Title"
              />
              <button className="bg-blue-800 p-2 text-white">Search</button>
            </div>
          </div>

          {/* grid - filer & book card */}
          <div className="mb-10 grid-cols-4 p-5 md:grid md:px-40">
            {/* filter */}
            <div className="col-span-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Filter</h1>
                <button
                  onClick={() => setToggle(!toggle)}
                  className="cursor-pointer text-2xl font-bold md:hidden"
                >
                  <FaBars />
                </button>
              </div>

              <article className={toggle ? "block" : "hidden md:block"}>
                {/* filter category */}
                <div className="mt-3">
                  <input
                    onClick={() => filterBooks("all")}
                    type="radio"
                    name="filter"
                    id="no-filter"
                  />
                  <label className="ms-1" htmlFor="no-filter">
                    All
                  </label>
                </div>

                {/* duplicate filter category */}
                {categoryList?.map((category) => (
                  <div key={category} className="mt-3">
                    <input
                      onClick={() => filterBooks(category)}
                      type="radio"
                      name="filter"
                      id={category}
                    />
                    <label className="ms-1" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                ))}
              </article>
            </div>

            {/* book card */}
            <div className="col-span-3">
              <div className="mt-5 w-full grid-cols-4 md:mt-0 md:grid">
                {/* duplicate according to number of books */}
                {allBooks?.length > 0 ? (
                  allBooks?.map((book) => (
                    <div
                      key={book?._id}
                      className="m-4 rounded p-3 shadow md:mb-2"
                    >
                      <img
                        className="w-full object-contain"
                        src={book?.imageURL}
                        alt="bookImg"
                      />
                      <div className="mt-4 flex flex-col items-center justify-center">
                        <h2 className="text-xl font-bold text-blue-700">
                          {book?.author}
                        </h2>
                        <h3 className="text-lg">{book?.title}</h3>
                        <Link
                          to={`/books/${book?._id}`}
                          className="mt-2 rounded bg-blue-800 p-2 text-white"
                        >
                          View Book
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="my-5 text-center font-bold">
                    Books Not Found!
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <img src="/lockImage.gif" className="w-70" alt="login icon" />
          <p className="my-15 text-lg font-bold">
            Please
            <Link to={"/login"} className="mx-2 text-blue-600 underline">
              Login
            </Link>
            to Explore More...
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Books;
