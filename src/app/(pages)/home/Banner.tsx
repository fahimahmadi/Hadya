"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const images = ["bg1.jpg", "bg1.jpg", "bg1.jpg"];

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((val) => (val < images.length - 1 ? val + 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <section
      id="banner"
      className={`flex-1 bg-amber-300 bg-no-repeat bg-cover bg-center pb-30`}
      style={{ backgroundImage: `url('/bg/${images[bannerIndex]}` }}
    >
      <div className="text-amber-400 text-3xl p-6 flex justify-end"><FaGift className="animate-bounce"/></div>
      {/* titles */}
      <div className="text-white text-center">
        <div className="flex flex-col align-center text-shadow-md mt-25">
          <span className="text-4xl sm:text-6xl lg:text-8xl font-extrabold">
            Perfect Gifts for
          </span>
          <span className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-yellow-500">
            Every Occasion
          </span>
          <p className="text-sm sm:text-lg lg:text-xl max-w-2/3 lg:max-w-1/3 mx-auto mt-7 text-shadow-lg">
            Discover thoughtful gifts that create lasting memories. From
            birthdays to holidays, we have something special for everyone you
            love.
          </p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex space-x-2.5 justify-center-safe mt-12">
        <Link
          href="/gifts/all"
          className="bg-amber-400 px-3 md:px-8 py-2 md:py-3 text-md sm:text-lg text-white rounded-md shadow hover:bg-amber-500"
        >
          Shop All Gifts
        </Link>
        <Link
          href="/gifts/finder"
          className="px-3 md:px-8 py-2 md:py-3 text-md sm:text-lg text-white rounded-md shadow bg-black/10 border-1 hover:bg-gray-50 hover:text-gray-500"
        >
          Gift Finder
        </Link>
      </div>

      {/* ratings */}
      <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10 justify-center mt-30 text-sm sm:text-lg">
        <span className="flex gap-x-2 items-center">
          <FaStar className="text-amber-400 text-shadow-lg" />
          <span className="text-white">4.9/5 Rating</span>
        </span>
        <span className="flex gap-x-2 items-center">
          <FaGift className="text-amber-400 text-shadow-lg" />
          <span className="text-white">50K+ Happy Customers</span>
        </span>
        <span className="flex gap-x-2 items-center">
          <FaHeart className="text-amber-400 text-shadow-lg" />
          <span className="text-white">Free Gift Wrapping</span>
        </span>
      </div>
    </section>
  );
};

export default Banner;
