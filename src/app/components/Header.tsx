"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function setActiveLink(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.parentElement) {
      for (let elem of target.parentElement.children) {
        elem.classList.remove("active");
      }
    }
    target.classList.add("active");
  }

  return (
    <header className="bg-gray-50 shadow-md fixed w-full top-0 z-50">
      <div className="top px-5 py-3 flex justify-between items-center border-b-1 border-gray-300 bg-gray-800">
        {/* logo */}
        <div>
          <Link href="/" className="font-bold text-3xl">
            <Image src="/logo_.png" alt="site logo" width={150} height={50} className="animate-pulse" />
          </Link>
        </div>
        <nav className="hidden sm:flex space-x-2 text-yellow-500 text-sm">
          <Link href="/login" className="hover:text-yellow-400">
            Login
          </Link>
          <Link href="/login" className="hover:text-yellow-400">
            Signup
          </Link>
          <Link href="tel:+4917655667788" className="mx-6">
            +49 176 55667788
          </Link>
        </nav>
        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button
            className="flex flex-col justify-center w-8 h-8 space-y-1"
            onClick={() => setToggle((value) => !value)}
          >
            <span className="block w-6 h-0.5 bg-amber-300"></span>
            <span className="block w-6 h-0.5 bg-amber-300"></span>
            <span className="block w-6 h-0.5 bg-amber-300"></span>
          </button>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:h-12 items-center">
          {/* Navbar */}
          <nav
            className="hidden sm:flex space-x-6 text-gray-600 text-sm uppercase w-full"
            id="menu"
            onClick={setActiveLink}
          >
            <Link 
              href="/gifts/women" 
              className="hover:text-pink-500">
              For Her
            </Link>
            <Link 
              href="/gifts/men" 
              className="hover:text-pink-500">
              For Him
            </Link>
            <Link 
              href="/gifts/kids" 
              className="hover:text-pink-500">
              Kids
            </Link>
            <Link 
              href="/gifts/occasions" 
              className="hover:text-pink-500">
              Occasions
            </Link>
            <Link 
              href="/sale" 
              className="text-pink-700 hover:text-pink-500">
              Sale
            </Link>
            <div className="ml-auto flex space-x-4">
              <Link 
                href="/posts" 
                className="hover:text-pink-500">
                <FaSearch className="text-xl" />
              </Link>
              <Link 
                href="/posts" 
                className="hover:text-pink-500">
                <FaUser className="text-xl" />
              </Link>
              <Link 
                href="/cart" 
                className="hover:text-pink-500">
                <FaShoppingCart className="text-xl" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar Mobile */}
      <div
        className={`sm:hidden overflow-hidden 
                      transition-all duration-400 ease-in-out
                      ${toggle ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} 
                    `}
        id="mobile-menu"
        onClick={setActiveLink}
      >
        <Link
          href="/"
          className="block py-2 px-4 text-gray-700 hover:bg-sky-300 hover:text-white active"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-gray-700 hover:bg-sky-300 hover:text-white"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-gray-700 hover:bg-sky-300 hover:text-white"
        >
          Contact
        </Link>
        <Link
          href="/login"
          className="block py-2 px-4 text-gray-600 hover:bg-sky-300 hover:text-white font-bold"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
