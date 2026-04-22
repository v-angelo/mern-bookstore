import React from "react";

function Purchase() {
  return (
    <div className="my-10 rounded p-10 shadow">
      {/* duplicate uploaded books */}
      <div className="mt-4 rounded-lg bg-gray-100 p-5">
        <div className="grid-cols-[3fr_1fr] md:grid">
          {/* book details */}
          <div className="px-4">
            <h1 className="text-2xl">title</h1>
            <h2 className="text-xl">author</h2>
            <h2 className="text-lg text-blue-500">$discountPrice</h2>
            <p className="text-justify">abstract</p>

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
              src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
              alt="no image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
