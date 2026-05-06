import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

function PaymentSuccess() {
  return (
    <>
      <Header />

      <div className="container flex min-h-screen items-center justify-center">
        <div className="my-10 grid-cols-2 items-center justify-center px-20 md:grid">
          <div>
            <h1 className="font-bold text-blue-500 md:text-4xl">
              Congratulation!!!
            </h1>

            <p className="my-10 text-2xl">
              Thank you for purchasing with BookStore. Hope you have good time
              wiht us...
            </p>

            <Link
              to={"/books"}
              className="flex w-60 cursor-pointer items-center rounded bg-blue-700 p-2 font-bold text-white hover:opacity-90"
            >
              <FaBackward className="me-2" />
              Explore More Books...
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <img src="/paymentSuccess.gif" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaymentSuccess;
