import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState("");
  const [dp, setDp] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token");
      const user = JSON.parse(sessionStorage.getItem("user"));

      setToken(userToken);
      setDp(user.picture);
    }
  }, [token]);

  return (
    <>
      {/* header top part */}
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className="flex items-center">
          <img className="w-10" src="/booksIcon.png" alt="logo" />
          <h1 className="ms-2 text-2xl font-bold md:hidden">Bookstore</h1>
        </div>
        {/* title */}
        <div className="hidden items-center justify-center md:flex">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/* login */}
        <div className="hidden items-center justify-end gap-2 md:flex">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          {/* login link */}
          {!token ? (
            <Link
              to={"/login"}
              className="ms-3 flex items-center rounded border border-black p-2 hover:bg-black hover:text-white"
            >
              <FaUser className="me-1" />
              Login
            </Link>
          ) : (
            <div>
              {/* profile icon */}
              <button className="ms-5 cursor-pointer rounded p-1 shadow-sm hover:bg-gray-100">
                <img
                  className="h-10 w-10 rounded-full"
                  src={
                    dp == ""
                      ? "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                      : dp
                  }
                  alt="profilePic"
                />
              </button>
              {/* dropdown menu */}
            </div>
          )}
        </div>
      </div>

      {/* navigation part */}
      <nav className="w-full items-center justify-center bg-black p-3 text-white md:flex">
        {/* menu & login in small screen */}
        <div className="flex items-center justify-between text-2xl md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <FaBars className="cursor-pointer" />
          </button>
          <Link
            to={"/login"}
            className="ms-3 flex items-center rounded border border-black p-2 hover:bg-black hover:text-white"
          >
            <FaUser className="me-1" />
            Login
          </Link>
        </div>
        <ul className={toggle ? "flex flex-col" : "hidden md:flex"}>
          <li>
            <Link to={"/"} className="mt-2 md:mx-4 md:mt-0">
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/books"} className="mt-2 md:mx-4 md:mt-0">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="mt-2 md:mx-4 md:mt-0">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
