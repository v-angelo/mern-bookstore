import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Edit() {
  const [offcanvas, setOffCanvas] = useState(false);

  return (
    <div>
      {/* button */}
      <button
        onClick={() => setOffCanvas(true)}
        className="flex cursor-pointer items-center rounded bg-black p-2 text-white transition hover:bg-white hover:text-black hover:ring active:bg-black active:text-white"
      >
        <FaPen className="me-2" /> Edit
      </button>

      {/* offcanvas */}
      {offcanvas && (
        <section>
          <div className="fixed inset-0 h-full w-full bg-gray-500/75"></div>
          <div className="fixed top-0 left-0 z-50 h-full w-90 bg-white">
            {/* head */}
            <div className="flex items-center justify-between bg-black px-3 py-4 text-2xl text-white">
              <h1>Update User Profile</h1>
              <FaX
                className="cursor-pointer"
                onClick={() => setOffCanvas(false)}
              />
            </div>

            {/* body */}
            <div className="my-5 flex flex-col items-center justify-center">
              {/* edit profile pic */}
              <label htmlFor="userProfile">
                <input type="file" id="userProfile" hidden />
                <img
                  className="z-52 w-25 rounded-full border border-gray-300"
                  src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="profilePic"
                />
                <div className="fixed z-53 -mt-5 ml-18 cursor-pointer rounded bg-black px-3 py-2 text-white">
                  <FaPen />
                </div>
              </label>

              {/* username */}
              <div className="mt-10 mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* new password */}
              <div className="mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="New Password"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* confirm password */}
              <div className="mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* bio */}
              <div className="mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Bio"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* reset & update button */}
              <div className="mt-5 flex w-full justify-end px-5">
                <button className="cursor-pointer rounded bg-amber-500 px-3 py-2 text-white">
                  RESET
                </button>
                <button className="ms-5 cursor-pointer rounded bg-emerald-500 px-3 py-2 text-white">
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Edit;
