import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaBackward, FaCamera, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBookDetailsAPI } from "../../services/allAPI";
import axiosInstance from "../../api/axiosInstance";

function View() {
  const [modal, setModal] = useState(false);
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState(null);

  // console.log(bookDetails);

  useEffect(() => {
    getBookDetails(id);
  }, []);

  const getBookDetails = async (bookID) => {
    const result = await getBookDetailsAPI(bookID);

    if (result.status == 200) {
      // console.log(result.data);

      setBookDetails(result.data);
    }
  };

  return (
    <>
      <Header />

      <div className="m-5 md:m-10">
        {/* content */}
        <section className="border border-gray-200 p-5 shadow">
          <div className="grid-cols-4 gap-x-10 md:grid">
            {/* image */}
            <div className="col-span-1">
              <img src={bookDetails?.imageURL} alt="book" className="w-full" />
            </div>

            {/* book details */}
            <div className="col-span-3">
              <div className="mt-5 flex justify-between md:mt-0">
                <h2 className="text-3xl font-bold">{bookDetails?.title}</h2>
                <button
                  onClick={() => setModal(true)}
                  className="cursor-pointer text-gray-400"
                >
                  <FaEye />
                </button>
              </div>

              <h3 className="my-5 text-lg text-blue-500">
                {bookDetails?.author}
              </h3>

              <div className="grid grid-cols-1 gap-x-2 gap-y-10 md:grid-cols-3">
                <h3 className="font-medium">
                  Publisher: {bookDetails?.publisher}
                </h3>
                <h3 className="font-medium">
                  Language: {bookDetails?.language}
                </h3>
                <h3 className="font-medium">
                  No. of Pages: {bookDetails?.pages}
                </h3>
                <h3 className="font-medium">
                  Category: {bookDetails?.category}
                </h3>
                <h3 className="font-medium">ISBN: {bookDetails?.isbn}</h3>
                <h3 className="font-medium">
                  Original Price: ${bookDetails?.price}
                </h3>
                <h3 className="font-medium">
                  Seller Mail: {bookDetails?.sellerMail}
                </h3>
              </div>

              <div className="my-4 md:my-10">
                <h3 className="text-lg font-medium">
                  Abstract: {bookDetails?.abstract}
                </h3>
              </div>

              <div className="flex justify-end">
                <Link
                  to={"/books"}
                  className="flex cursor-pointer items-center rounded bg-blue-700 p-2 font-black text-white"
                >
                  <FaBackward className="me-2" /> Back
                </Link>

                <button className="ms-5 cursor-pointer rounded bg-green-700 p-2 font-black text-white">
                  Buy ${bookDetails?.discountPrice}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* modal */}
        {modal && (
          <section
            onClick={() => setModal(false)}
            className="relative z-10 overflow-y-auto"
          >
            <div className="fixed inset-0 bg-gray-500/75">
              <div className="flex min-h-screen items-center justify-center">
                <div className="w-100 rounded-2xl bg-white md:w-250">
                  {/* modal title */}
                  <div className="bg-black p-3 text-white">
                    <h3>Book Images</h3>
                  </div>

                  {/* modal body */}
                  <div className="relative p-5">
                    <p className="flex items-center text-blue-500">
                      <FaCamera className="me-2" /> Book Covers of available
                      books.
                    </p>

                    <div className="my-4 flex-wrap gap-5 md:flex">
                      {/* duplicate image */}

                      {bookDetails?.uploadImages?.length > 0 ? (
                        bookDetails?.uploadImages?.map((bookCover, index) => (
                          <img
                            key={`${index}-${bookCover}`}
                            src={`${axiosInstance.defaults.baseURL}/uploads/${bookCover}`}
                            alt="book cover image"
                            className="mb-3 w-25 md:me-2 md:mt-0 md:w-50"
                          />
                        ))
                      ) : (
                        <div>No extra book covers available...</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}

export default View;
