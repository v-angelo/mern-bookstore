import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { FaPen } from "react-icons/fa";

function AdminSettings() {
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
                <input type="file" id="userProfile" hidden />
                <img
                  className="z-5 h-25 w-25 rounded-full border border-gray-300"
                  src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="user"
                />

                <button className="z-53 -mt-4 ml-12 rounded bg-black px-3 py-2 text-white">
                  <FaPen />
                </button>
              </label>

              {/* username */}
              <div className="mt-10 mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* confirm password */}
              <div className="mt-10 mb-3 w-full px-5">
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              {/* reset */}
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdminSettings;
