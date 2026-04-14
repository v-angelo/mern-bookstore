import React from "react";
import { FaPowerOff } from "react-icons/fa";

function AdminHeader() {
  return (
    <>
      {/* header top */}
      <section className="flex items-center justify-between p-3 md:px-20">
        {/* logo */}
        <div className="flex items-center">
          <img className="w-10" src="/booksIcon.png" alt="logo" />
          <h1 className="ms-2 text-2xl font-bold">Bookstore</h1>
        </div>

        {/* logout button */}
        <button className="flex cursor-pointer items-center rounded border border-black bg-black px-3 py-2 text-white hover:bg-white hover:text-black active:bg-black active:text-white">
          Logout <FaPowerOff className="ms-1" />
        </button>
      </section>

      {/* header marque */}
      <section className="w-full bg-black p-3 text-white">
        <marquee behavior="" direction="">
          Welcome Admin! You're all set to manage and monitor the system. Let's
          get to work!!{" "}
        </marquee>
      </section>
    </>
  );
}

export default AdminHeader;
