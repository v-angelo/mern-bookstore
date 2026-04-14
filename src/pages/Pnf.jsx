import React from "react";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-150"
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="PnFImage"
      />

      <div>
        <Link to={"/"} className="mt-5 rounded bg-black px-3 py-2 text-white">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Pnf;
