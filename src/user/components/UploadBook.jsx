import React from "react";
import { FaPlus } from "react-icons/fa";

function UploadBook() {
  return (
    <div className="mx-5 my-10 rounded bg-gray-200 px-2 py-5 shadow md:p-10">
      <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
      <div className="mt-10 w-full grid-cols-2 md:grid">
        {/* left part of the grid */}
        <div className="px-3">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Book Title"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Author"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Book Cover Page URL"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Total Pages"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Original Price"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Discount Price"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Book Title"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              placeholder="Abstract"
              rows={"5"}
              className="w-full rounded bg-white p-2"
            />
          </div>
        </div>

        {/* right part of the grid */}
        <div className="px-3">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Publisher"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="ISBN"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Language"
              className="w-full rounded bg-white p-2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Category"
              className="w-full rounded bg-white p-2"
            />
          </div>

          {/* upload book images */}
          <div className="mt-10 mb-3 flex items-center justify-center">
            <label htmlFor="bookImages">
              <input type="file" id="bookImages" hidden />
              <img
                className="w-50 rounded-full shadow-2xl"
                src="https://img.freepik.com/premium-vector/illustration-upload_498740-5719.jpg"
                alt="upload book image file not found"
              />
            </label>
          </div>

          {/* preview uploaded images */}
          <div className="flex items-center justify-center">
            <img
              className="w-20 rounded"
              src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
              alt="upload book image file not found"
            />
            <label htmlFor="bookUpload">
              <input type="file" id="bookUpload" hidden />
              <FaPlus className="ms-2 text-3xl" />
            </label>
          </div>
        </div>
      </div>

      {/* reset & add button */}
      <div className="mt-7 flex w-full justify-center p-3 md:justify-end">
        <button className="cursor-pointer rounded bg-gray-600 px-3 py-2 text-white hover:opacity-85">
          RESET
        </button>
        <button className="ms-5 cursor-pointer rounded bg-blue-500 px-3 py-2 text-white hover:opacity-85">
          ADD BOOK DETAILS
        </button>
      </div>
    </div>
  );
}

export default UploadBook;
