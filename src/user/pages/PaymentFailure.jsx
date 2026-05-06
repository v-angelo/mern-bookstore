import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

function PaymentFailure() {
  return (
    <>
      <Header />

      <div className="container flex min-h-screen items-center justify-center">
        <div className="my-10 grid-cols-2 items-center justify-center px-20 md:grid">
          <div>
            <h1 className="font-bold text-red-500 md:text-4xl">
              Payment Failed!! Please try again!
            </h1>

            <p className="my-10 text-2xl">
              We apologize for the inconvenience caused. Please retry payment
              after sometime...
            </p>

            <Link
              to={"/books"}
              className="flex w-60 cursor-pointer items-center rounded bg-red-700 p-2 font-bold text-white hover:opacity-90"
            >
              <FaBackward className="me-2" />
              Explore More Books...
            </Link>
          </div>

          <div className="flex items-center justify-center max-md:mt-15">
            <img className="w-70" src="/paymentFailed.gif" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaymentFailure;
