import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaLocationPin } from "react-icons/fa6";
import { FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <section>
        <h1 className="my-5 text-center text-3xl font-bold">Contact</h1>
        <p className="px-2 text-justify">
          Have questions, feedback, or need help finding the perfect book? We’d
          love to hear from you! Why Contact Us? Order-related support Book
          availability inquiries Return/replacement queries Bulk/Institutional
          purchase requests Author or partnership inquiries. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Hic veniam id eveniet
          recusandae pariatur, facilis fuga? Iusto, asperiores modi cum
          praesentium et, libero nisi eaque harum sed deleniti odio eveniet.
          Maiores delectus iusto voluptatibus officia eveniet sunt quibusdam
          mollitia, error fugit laborum dolorum deserunt! Quaerat magni ad,
          veritatis dolor iusto, aliquam nisi consequatur officiis perferendis
          unde, maiores quos praesentium voluptatibus. Magni dolores impedit,
          officia doloribus repellat fuga quos ad natus recusandae sed numquam
          fugiat, sapiente minima, nam vero incidunt libero earum. Minima
          praesentium laborum tenetur corporis quod dolorum maxime pariatur.
        </p>

        <div className="mt-5 grid-cols-3 items-center space-y-3 p-5 md:mt-0 md:grid md:space-y-0 md:px-40">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <FaLocationPin />
            </div>
            <p className="ms-5 text-wrap">123 Main Street, Apt 4B, Anytown</p>
          </div>

          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <FaPhone />
            </div>
            <p className="ms-5">+098754654133</p>
          </div>

          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <FaEnvelope />
            </div>
            <p className="ms-5">contact@bookstore.com</p>
          </div>
        </div>

        <div className="my-5 grid-cols-2 gap-10 p-5 md:grid md:px-40">
          <div className="bg-gray-100 p-5 text-center">
            <h1 className="font-semi-bold text-2xl">Send Us Message!</h1>
            {/* form */}
            <form>
              <div className="mt-10 mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white p-2"
                />
              </div>

              <div className="mt-10 mb-5">
                <input
                  type="email"
                  placeholder="E Mail"
                  className="w-full bg-white p-2"
                />
              </div>

              <div className="mt-10 mb-5">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full bg-white p-2"
                />
              </div>

              <div className="my-5">
                <button className="flex w-full items-center justify-center bg-black p-2 text-lg text-white">
                  Submit <FaPaperPlane className="ms-2" />
                </button>
              </div>
            </form>
          </div>

          {/* map */}
          <div className="mt-5 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9841723019904!2d76.3426715!3d10.018164400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1775627380724!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
