import React, { useState } from "react";
import Header from "../components/Header";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Books() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header />

      <section>
        {/* header */}
        <div className="my-5 flex flex-col items-center justify-center">
          <h1 className="my-5 text-3xl font-bold">All Books</h1>
          <div className="my-5 flex">
            <input
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
                <input type="radio" name="filter" id="no-filter" />
                <label htmlFor="no-filter">All</label>
              </div>

              {/* duplicate filter category */}
              <div className="mt-3">
                <input type="radio" name="filter" id="filter" />
                <label htmlFor="filter">Category</label>
              </div>
            </article>
          </div>

          {/* book card */}
          <div className="col-span-3">
            <div className="mt-5 w-full grid-cols-4 md:mt-0 md:grid">
              {/* duplicate according to number of books */}
              <div className="m-4 rounded p-3 shadow md:mb-2">
                <img
                  className="w-full object-contain"
                  src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
                  alt="bookImg"
                />
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-blue-700">Author</h2>
                  <h3 className="text-lg">Title</h3>
                  <Link
                    to={`/books/id`}
                    className="mt-2 rounded bg-blue-800 p-2 text-white"
                  >
                    View Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Books;
