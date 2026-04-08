import React, { useState } from "react";
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
          <Link
            to={"/login"}
            className="ms-3 flex items-center rounded border border-black p-2 hover:bg-black hover:text-white"
          >
            <FaUser className="me-1" />
            Login
          </Link>
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
