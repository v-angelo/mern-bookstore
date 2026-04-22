import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaCircleCheck } from "react-icons/fa6";

import Edit from "../components/Edit";
import UploadBook from "../components/UploadBook";
import BookStatus from "../components/BookStatus";
import Purchase from "../components/Purchase";

function Profile() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Header />

      <div className="h-50 bg-black"></div>
      <div className="-mt-30 ml-20 h-55 w-55 rounded-full bg-white p-2">
        <img
          className="rounded-full"
          src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
          alt="profilePic"
        />
      </div>

      <section className="mt-5 justify-between px-20 md:flex">
        <div className="flex items-center">
          <h1 className="text-2xl font-black md:text-3xl">Username</h1>
          <FaCircleCheck className="ms-3 text-blue-400" />
        </div>
        <Edit />
      </section>

      <p className="mt-5 px-20 text-xl font-bold">bio</p>

      <p className="my-5 px-5 text-justify md:px-20">
        This is your personal space where you can manage your account, explore
        your reading activity, track your orders, and save books you love.
        Whether you're building a wishlist, discovering new arrivals, or
        reviewing your recent purchases, this page keeps everything organized
        and easy to access. Your reading journey continues here — enjoy
        exploring, discovering, and collecting stories that inspire you. ✨
      </p>

      <section className="md:px-40">
        {/* tabs */}
        <article className="my-8 flex items-center justify-center text-lg font-medium">
          <button
            onClick={() => setCurrentTab(1)}
            className={`cursor-pointer rounded-t ${currentTab == 1 && "border border-b-0"} border-b border-gray-200 p-3`}
          >
            Upload Book
          </button>
          <button
            onClick={() => setCurrentTab(2)}
            className={`cursor-pointer rounded-t ${currentTab == 2 && "border border-b-0"} border-b border-gray-200 p-3`}
          >
            Upload Status
          </button>
          <button
            onClick={() => setCurrentTab(3)}
            className={`cursor-pointer rounded-t ${currentTab == 3 && "border border-b-0"} border-b border-gray-200 p-3`}
          >
            Purchase History
          </button>
        </article>

        {/* tab contents */}
        {currentTab == 1 && (
          <section>
            <UploadBook />
          </section>
        )}
        {currentTab == 2 && (
          <section>
            <BookStatus />
          </section>
        )}
        {currentTab == 3 && (
          <section>
            <Purchase />
          </section>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Profile;
