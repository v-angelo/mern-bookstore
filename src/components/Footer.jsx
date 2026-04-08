import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* ABOUT */}
        <div>
          <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
            ABOUT US
          </h3>
          <p className="text-sm leading-7">
            We believe books are more than just pages — they are windows into
            new worlds, teachers of wisdom, and companions for life. Our journey
            began with a passion for storytelling and a mission to make reading
            accessible, enjoyable, and inspiring for everyone.
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
            NEWS LETTER
          </h3>
          <p className="mb-4 text-sm">Stay updated with our latest trends</p>

          <div className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="E Mail"
              className="w-full bg-white px-3 py-2 text-sm text-black outline-none"
            />
            <button className="flex items-center justify-center bg-yellow-500 px-4 transition hover:bg-yellow-400">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h3 className="mb-2 text-lg font-semibold tracking-wide text-white">
            FOLLOW US
          </h3>
          <p className="mb-4 text-sm">Let us be social</p>

          <div className="flex gap-6 text-lg">
            <FaFacebookF className="cursor-pointer transition hover:text-white" />
            <FaInstagram className="cursor-pointer transition hover:text-white" />
            <FaTwitter className="cursor-pointer transition hover:text-white" />
            <FaEnvelope className="cursor-pointer transition hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-4 py-4 text-center text-sm">
        <p>
          Copyright © 2026 All rights reserved | This website is made with{" "}
          <span className="text-white">🤍</span> By Luminar Technolab
        </p>
      </div>
    </footer>
  );
};

export default Footer;
