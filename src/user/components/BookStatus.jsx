import React, { useEffect, useState } from "react";
import {
  deleteUserUploadBooksAPI,
  getAllUserBooksAPI,
} from "../../services/allAPI";

function BookStatus() {
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    getUserBooks();
  }, []);

  // console.log(userBooks);

  const getUserBooks = async () => {
    const result = await getAllUserBooksAPI();
    // console.log(result.data);

    if (result.status == 200) {
      setUserBooks(result.data);
    }
  };

  const removeBook = async (id) => {
    const result = await deleteUserUploadBooksAPI(id);
    getUserBooks();
  };

  return (
    <div className="my-10 rounded p-10 shadow">
      {/* duplicate uploaded books */}
      {userBooks?.length > 0 ? (
        userBooks?.map((book) => (
          <div key={book?._id} className="mt-4 rounded-lg bg-gray-100 p-5">
            <div className="grid-cols-[3fr_1fr] md:grid">
              {/* book details */}
              <div className="px-4">
                <h1 className="text-2xl">{book?.title}</h1>
                <h2 className="text-xl">{book?.author}</h2>
                <h2 className="text-lg text-blue-500">
                  ${book?.discountPrice}
                </h2>
                <p className="text-justify">{book?.abstract}</p>

                {/* status images */}
                <div className="mt-3 flex">
                  {book?.status == "sold" ? (
                    <img
                      className="w-30 object-contain"
                      src="/sold.png"
                      alt="sold"
                    />
                  ) : book?.status == "approved" ? (
                    <img
                      className="w-30 object-contain"
                      src="/approved.png"
                      alt="approved"
                    />
                  ) : (
                    <img
                      className="w-30 object-contain"
                      src="/pending.png"
                      alt="pending"
                    />
                  )}
                </div>
              </div>

              {/* book cover image */}
              <div className="mt-4 px-4 md:mt-0">
                <img
                  className="w-full rounded"
                  src={book?.imageURL}
                  alt="no image"
                />

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => removeBook(book?._id)}
                    className="rounded bg-red-600 p-2 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>You have not uploaded any books yet!</div>
      )}
    </div>
  );
}

export default BookStatus;
