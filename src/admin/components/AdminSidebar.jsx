import React from "react";
import { FaDatabase } from "react-icons/fa";
import { FaChartSimple, FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <section className="h-fit bg-blue-100 py-10 md:min-h-screen">
      {/* image */}
      <article className="flex justify-center">
        <img
          className="z-52 h-25 w-25 rounded-full border border-gray-300"
          src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
          alt="user"
        />
      </article>

      {/* name */}
      <h3 className="my-5 text-center text-xl font-bold">Name</h3>

      {/* links */}
      <article className="mt-10 flex flex-col items-center justify-center">
        <div className="mt-3">
          <Link to={"/admin"} className="flex items-center">
            <FaChartSimple className="me-2" /> Dashboard
          </Link>
        </div>
        <div className="mt-3">
          <Link to={"/admin/resources"} className="flex items-center">
            <FaDatabase className="me-2" /> Collections
          </Link>
        </div>
        <div className="mt-3">
          <Link to={"/admin/settings"} className="flex items-center">
            <FaGear className="me-2" /> Settings
          </Link>
        </div>
      </article>
    </section>
  );
}

export default AdminSidebar;
