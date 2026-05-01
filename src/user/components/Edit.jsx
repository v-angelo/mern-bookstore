import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import axiosInstance from "../../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import { userUpdateAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [offcanvas, setOffCanvas] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cPassword: "",
    picture: "",
    role: "",
    bio: "",
    id: "",
  });
  const [existingPicture, setExistingPicture] = useState("");
  const [preview, setPreview] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [imageFileType, setImageFileType] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUserDetails({
        ...userDetails,
        username: user.username,
        role: user.role,
        bio: user.bio,
        id: user._id,
      });
      setExistingPicture(user.picture);
    }
  }, []);

  const handleFileUpload = (e) => {
    // console.log(e.target.files[0]);
    const imageFile = e.target.files[0];

    if (imageFile.type.startsWith("image/")) {
      setUserDetails({ ...userDetails, picture: imageFile });
      const url = URL.createObjectURL(imageFile);
      setPreview(url);
      setImageFileType(true);
    } else {
      setImageFileType(false);
    }
  };

  const checkPasswordMatch = (data) => {
    setUserDetails({ ...userDetails, cPassword: data });
    userDetails.password == data
      ? setPasswordMatch(true)
      : setPasswordMatch(false);
  };

  const resetProfileForm = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserDetails({
      username: user.username,
      role: user.role,
      bio: user.bio,
      id: user._id,
      password: "",
      cPassword: "",
      picture: "",
    });
    setExistingPicture(user.picture);
    setPreview("");
    setImageFileType(true);
    setPasswordMatch(true);
  };

  const handleUserUpdate = async () => {
    const { username, password, picture, bio, id, cPassword } = userDetails;

    if (!username || !password || !cPassword || !bio) {
      toast.info("Please fill the form completely!!");
    } else if (passwordMatch) {
      // create request body
      const reqBody = new FormData();

      for (let key in userDetails) {
        if (key !== "picture") {
          reqBody.append(key, userDetails[key]);
        } else {
          preview
            ? reqBody.append("picture", picture)
            : reqBody.append("picture", existingPicture);
        }
      }

      // api call
      const result = await userUpdateAPI(id, reqBody);
      console.log(result);

      if (result.status == 200) {
        toast.success("User profile updated successfully! Please Login!!");

        setTimeout(() => {
          sessionStorage.clear();
          navigate("/login");
        }, 2500);
      }
    }
  };

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
                <input
                  onChange={(e) => handleFileUpload(e)}
                  type="file"
                  id="userProfile"
                  hidden
                />
                {existingPicture == "" ? (
                  <img
                    className="z-52 w-25 rounded-full border border-gray-300"
                    src={
                      preview
                        ? preview
                        : "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                    }
                    alt="profilePic"
                  />
                ) : existingPicture.startsWith(
                    "https://lh3.googleusercontent.com/",
                  ) ? (
                  <img
                    className="z-52 w-25 rounded-full border border-gray-300"
                    src={preview ? preview : existingPicture}
                  />
                ) : (
                  <img
                    className="z-52 w-25 rounded-full border border-gray-300"
                    src={
                      preview
                        ? preview
                        : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`
                    }
                    alt="profilePic"
                  />
                )}
                <div className="fixed z-53 -mt-5 ml-18 cursor-pointer rounded bg-black px-3 py-2 text-white">
                  <FaPen />
                </div>
              </label>

              {!imageFileType && (
                <div className="mt-5 text-xs text-yellow-500">
                  *Please upload an image-type file
                </div>
              )}

              {/* username */}
              <div className="mt-10 mb-3 w-full px-5">
                <input
                  value={userDetails.username}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                  type="text"
                  placeholder="Username"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* new password */}
              <div className="mb-3 w-full px-5">
                <input
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  type="password"
                  placeholder="New Password"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* confirm password */}
              <div className="mb-3 w-full px-5">
                <input
                  value={userDetails.cPassword}
                  onChange={(e) => checkPasswordMatch(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>
              {!passwordMatch && (
                <div className="ms-5 mb-2 self-start text-xs text-yellow-500">
                  *Password mismatch
                </div>
              )}

              {/* bio */}
              <div className="mb-3 w-full px-5">
                <input
                  value={userDetails.bio}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, bio: e.target.value })
                  }
                  type="text"
                  placeholder="Bio"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* reset & update button */}
              <div className="mt-5 flex w-full justify-end px-5">
                <button
                  onClick={resetProfileForm}
                  type="button"
                  className="cursor-pointer rounded bg-amber-500 px-3 py-2 text-white"
                >
                  RESET
                </button>
                <button
                  onClick={handleUserUpdate}
                  type="button"
                  className="ms-5 cursor-pointer rounded bg-emerald-500 px-3 py-2 text-white"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* toaster */}
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default Edit;
