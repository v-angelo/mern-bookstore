import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getHomePageBooksAPI } from "../../services/allAPI";

function Home() {
  const [homeBooks, setHomeBooks] = useState([]);

  useEffect(() => {
    getHomePageBooks();
  }, []);

  const getHomePageBooks = async () => {
    const result = await getHomePageBooksAPI();

    if (result.status == 200) {
      setHomeBooks(result.data);
    }
  };

  return (
    <>
      <Header />
      {/* hero section */}
      <section className="flex min-h-150 flex-col items-center justify-center bg-[url(/booksBg.jpg)] bg-cover bg-center text-white">
        <div className="flex min-h-150 w-full flex-col items-center justify-center bg-black/35">
          <h1 className="text-4xl font-bold md:text-6xl">Wonderful Gifts</h1>
          <p className="max-md:text-sm">Gift your family and friends a book</p>
          <div className="mt-9 flex items-center">
            <input
              type="text"
              placeholder="Search a Book"
              className="rounded-3xl bg-white p-2 text-black md:w-100"
            />
            <FaSearch className="curosr-pointer -ml-10 text-gray-500" />
          </div>
        </div>
      </section>

      {/* new arrivals */}
      <section className="my-5 flex flex-col items-center justify-center p-5 md:px-40">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <h1 className="my-2 text-center text-3xl md:text-4xl">
          Explore Our Latest Collection
        </h1>

        <div className="my-10 w-full grid-cols-4 md:grid">
          {/* duplicate according to number of books */}
          {homeBooks.length > 0 ? (
            homeBooks?.map((book) => (
              <div key={book?._id} className="m-4 rounded p-3 shadow md:my-0">
                <img
                  className="h-75 w-full object-contain"
                  src={book?.imageURL}
                  alt="bookImg"
                />
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-blue-700">
                    {book?.author}
                  </h2>
                  <h3 className="text-lg">{book?.title}</h3>
                  <p className="font-bold text-red-500">
                    ${book?.discountPrice}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="my-3 text-center font-bold">Loading...</p>
          )}
        </div>

        <div className="my-10 text-center">
          <Link
            to={"/books"}
            className="rounded bg-black p-3 font-black text-white"
          >
            Explore More...
          </Link>
        </div>
      </section>

      {/* authors */}
      <section className="grid-cols-2 items-center gap-10 p-5 md:grid md:px-40">
        <div className="text-center">
          <h2 className="text-xl font-bold">FEATURED AUTHORS</h2>
          <h3 className="text-xl">Captivates with every word</h3>
          <p className="my-5 text-justify">
            Welcome to the Author Spotlight section of our bookstore website!
            This feature is designed to celebrate writers, showcase their
            creative journeys, and help readers discover the minds behind their
            favorite books.
          </p>
          <p className="text-justify">Our Author Features include:</p>

          <p className="my-3 text-justify">
            <span className="font-black">✨ Author Profiles :</span>
            Get to know each author through detailed profiles that highlight
            their biography, writing style, achievements, and personal
            inspirations.
          </p>
          <p className="my-3 text-justify">
            <span className="font-black">📖 Published Works :</span>
            Explore a curated list of books written by the author with quick
            access to book details, reviews, and purchase options.
          </p>
          <p className="my-3 text-justify">
            <span className="font-black">🎤 Interviews & Insights : </span>
            Exclusive interviews, behind-the-scenes stories, and writing tips
            that offer a deeper look into the author’s creative world.
          </p>
        </div>
        <div className="flex items-center justify-center p-5">
          <img
            className="w-full object-contain"
            src="https://www.entrepreneur.com/wp-content/uploads/sites/2/2017/09/20170919152836-unnamed.jpeg"
            alt="author"
          />
        </div>
      </section>

      {/* testimonials */}
      <section className="my-5 flex flex-col items-center justify-center p-5 md:px-40">
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h1 className="my-2 text-2xl md:text-4xl">
          See What Others Are Saying
        </h1>
        <div className="my-5 flex flex-col items-center justify-center">
          <img
            className="h-50 w-50 rounded-full"
            src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
            alt="user"
          />
          <h3 className="my-3">Luther King</h3>
          <p className="text-justify">
            This bookstore has completely changed the way I discover new books.
            The recommendations are always spot-on, and the delivery is super
            fast. I love the clean interface and the huge collection! The user
            experience is amazing! Easy navigation, great deals, and beautifully
            organized categories. I appreciate how quickly customer support
            responds too.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
