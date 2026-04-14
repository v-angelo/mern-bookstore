import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1);

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
              <div className="m-4 rounded p-3 shadow md:my-0">
                <img
                  className="h-75 w-full object-contain"
                  src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
                  alt="bookImg"
                />
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-blue-700">Author</h2>
                  <h3 className="text-lg">Title</h3>
                  <p className="font-bold text-red-500">Price</p>

                  {/* approve button */}
                  <button className="mt-2 cursor-pointer rounded bg-green-600 p-2 text-white hover:opacity-90">
                    Approve
                  </button>
                </div>
              </div>
            </section>
          )}
          {currentTab == 2 && (
            <section className="my-5 w-full grid-cols-3 md:grid">
              {/* duplicate according to number of books */}
              <div className="m-2 rounded bg-gray-200 p-2">
                <p className="text-lg font-bold text-red-500">ID:</p>
                <div className="mt-3 flex items-center">
                  <img
                    className="h-20 w-20 rounded-full"
                    src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="user"
                  />

                  <div className="ml-3 flex w-full flex-col">
                    <h4 className="text-lg font-bold text-blue-400">
                      Username
                    </h4>
                    <p className="text-xs">mail</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdminResource;
