import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { adminUpdateAPI } from "../../services/allAPI";
import axiosInstance from "../../api/axiosInstance";

function AdminSettings() {
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

    if (!username || !password || !cPassword) {
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
      const result = await adminUpdateAPI(id, reqBody);
      // console.log(result);

      if (result.status == 200) {
        toast.success("Admin profile updated successfully! Please Login!!");

        setTimeout(() => {
          sessionStorage.clear();
          navigate("/login");
        }, 2500);
      }
    }
  };

  return (
    <>
      <AdminHeader />
      <section className="grid-cols-5 gap-2 md:grid">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="mb-10 text-center text-2xl font-bold">Settings</h1>

          <div className="grid-cols-2 items-center md:grid">
            {/* text content */}
            <section>
              <h2 className="mb-5 text-xl">Welcome, Admin 👋</h2>
              <p className="text-justify">
                This is your personal administration space where you can manage
                your account details, system preferences, and platform roles
                with ease. From here, you can update essential information such
                as your username, password, contact details, and notification
                preferences — ensuring your access remains secure and
                personalized.
              </p>
              <h4 className="my-5 text-lg">
                🔧 What You Can Manage in This Section:
              </h4>
              <ul>
                <li>
                  ✏️ Update personal details (name, email, role, profile
                  picture)
                </li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>{" "}
              <p className="mt-5 text-justify">
                Your profile settings help ensure your administrative tools work
                the way you need them to — securely, efficiently, and with
                complete control. Thank you for keeping the platform organized
                and running smoothly. Continue managing, updating, and improving
                the system — one step at a time. 🚀📚
              </p>
            </section>

            {/* edit form */}
            <section className="m-10 flex flex-col items-center justify-center rounded bg-blue-100 p-5">
              {/* edit picture */}
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
                <div className="absolute z-53 -mt-5 ml-18 cursor-pointer rounded bg-black px-3 py-2 text-white">
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
            </section>
          </div>
        </div>
      </section>
      <Footer />

      {/* toaster */}
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </>
  );
}

export default AdminSettings;
