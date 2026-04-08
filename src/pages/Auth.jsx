import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Auth({ insideRegister }) {
  const [togglePasswordType, setTogglePasswordType] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[url(/booksBg.jpg)] bg-cover bg-center text-white">
      {/* gradient overlay */}
      <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)]"></div>

      {/* content */}
      <div className="relative z-10 p-10">
        <h1 className="text-center text-4xl font-bold text-black">
          BOOK STORE
        </h1>
        <div className="my-5 flex w-100 flex-col items-center justify-center bg-black/90 p-5 text-white">
          <div className="mb-5 flex h-25 w-25 items-center justify-center rounded-full border">
            <FaUser className="text-3xl" />
          </div>
          <h1 className="text-2xl">{insideRegister ? "Register" : "Login"}</h1>
          <form action="" className="my-5 w-full space-y-5">
            {/* username */}
            {insideRegister && (
              <input
                className="w-full bg-white p-2 text-black"
                type="text"
                placeholder="Username"
              />
            )}

            {/* email */}
            <input
              className="w-full bg-white p-2 text-black"
              type="email"
              placeholder="Email"
            />

            {/* password */}
            <div className="relative">
              <input
                className="w-full bg-white p-2 text-black"
                type={togglePasswordType ? "text" : "password"}
                placeholder="Password"
              />
              {togglePasswordType ? (
                <FaEyeSlash
                  onClick={() => setTogglePasswordType(!togglePasswordType)}
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => setTogglePasswordType(!togglePasswordType)}
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                />
              )}
            </div>

            {/* forgot password */}
            <div className="mb-3 flex justify-between">
              <p className="text-xs text-orange-300">
                *Never share your password with others.
              </p>
              {!insideRegister && (
                <button type="button" className="text-xs underline">
                  Forgot password
                </button>
              )}
            </div>

            <div className="text-center">
              {/* login / register button */}
              {insideRegister ? (
                <button className="w-full cursor-pointer rounded bg-green-700 p-2">
                  Register
                </button>
              ) : (
                <button className="w-full cursor-pointer rounded bg-green-700 p-2">
                  Login
                </button>
              )}
            </div>

            {/* google authentication */}
            {!insideRegister && (
              <div className="my-5 text-center">
                <p>------------------or------------------</p>
                <div className="mt-2 flex w-full items-center justify-center">
                  google authentication
                </div>
              </div>
            )}

            {/* new / already existing user */}
            <div className="text-center">
              {insideRegister ? (
                <p className="text-blue-500">
                  Existing User?{" "}
                  <Link to={"/login"} className="ms-5 underline">
                    Login
                  </Link>
                </p>
              ) : (
                <p className="text-blue-500">
                  New User?{" "}
                  <Link to={"/register"} className="ms-5 underline">
                    Register
                  </Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
