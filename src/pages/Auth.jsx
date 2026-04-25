import { useFormik } from "formik";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { registerAPI } from "../services/allAPI";

function Auth({ insideRegister }) {
  const [togglePasswordType, setTogglePasswordType] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must atleast be 3 characters!")
        .required("Required!"),
      email: Yup.string().email("Invalid email!").required("Required!"),
      password: Yup.string().required("Required!"),
    }),

    onSubmit: (values) => {
      console.log(values);

      if (insideRegister) {
        console.log("Register api call");
        handleRegister(values);
      } else {
        console.log("Login api call");
      }
    },
  });

  const handleRegister = async (userData) => {
    const result = await registerAPI(userData);
    console.log(result);

    if (result.status == 201) {
      alert("Registration Successful!! Please Login.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[url(/booksBg.jpg)] bg-cover bg-center text-white">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)]"></div>

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

          <form
            onSubmit={formik.handleSubmit}
            className="my-5 w-full space-y-5"
          >
            {/* username */}
            {insideRegister && (
              <>
                <input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  className="w-full bg-white p-2 text-black"
                  type="text"
                  placeholder="Username"
                />
                {formik.errors.username && (
                  <div className="text-xs text-yellow-400">
                    {formik.errors.username}
                  </div>
                )}
              </>
            )}

            {/* email */}
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full bg-white p-2 text-black"
              type="email"
              placeholder="Email"
            />
            {formik.errors.email && (
              <div className="text-xs text-yellow-400">
                {formik.errors.email}
              </div>
            )}

            {/* password */}
            <div className="relative">
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
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
            {formik.errors.password && (
              <div className="text-xs text-yellow-400">
                {formik.errors.password}
              </div>
            )}

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
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded bg-green-700 p-2"
                >
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
