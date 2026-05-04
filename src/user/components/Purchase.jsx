import React, { useEffect, useState } from "react";
import { getAllUserBoughtBooksAPI } from "../../services/allAPI";

function Purchase() {
  const [userBoughtBooks, setUserBoughtBooks] = useState([]);

  useEffect(() => {
    getUserBoughtBooks();
  }, []);

  // console.log(userBoughtBooks);

  const getUserBoughtBooks = async () => {
    const result = await getAllUserBoughtBooksAPI();
    // console.log(result.data);

    if (result.status == 200) {
      setUserBoughtBooks(result.data);
    }
  };
  return (
    <div className="my-10 rounded p-10 shadow">
      {/* duplicate uploaded books */}
      {userBoughtBooks?.length > 0 &&
        userBoughtBooks?.map((book) => (
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
                  <img
                    className="w-30 object-contain"
                    src="/purchase.png"
                    alt="purchase"
                  />
                </div>
              </div>

              {/* book cover image */}
              <div className="mt-4 px-4 md:mt-0">
                <img
                  className="w-full rounded"
                  src={book?.imageURL}
                  alt="no image"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Purchase;
