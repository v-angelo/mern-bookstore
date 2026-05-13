import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routeContext } from "../context/RouteGuardContext";

function Pnf() {
  const { role, setRole, authorizedUser, setAuthorizedUser } =
    useContext(routeContext);

  const navigate = useNavigate();

  const backHome = () => {
    if (role === "user") {
      navigate("/");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-150"
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="PnFImage"
      />

      <div>
        {authorizedUser ? (
          <button
            onClick={backHome}
            className="mt-5 bg-black px-3 py-2 text-white"
          >
            Home
          </button>
        ) : (
          <Link to={"/"} className="mt-5 rounded bg-black px-3 py-2 text-white">
            Home
          </Link>
        )}
      </div>
    </div>
  );
}

export default Pnf;
