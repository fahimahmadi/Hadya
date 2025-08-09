"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import NavLink from "./NavLink";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md fixed w-full top-0 z-50">
      <div className="top px-5 py-3 flex justify-between items-center border-b-1 border-gray-300 bg-gray-800">
        {/* logo */}
        <div>
          <NavLink href="/" classList="font-bold text-3xl">
            <Image
              src="/logo_.png"
              alt="site logo"
              width={150}
              height={50}
              className=""
            />
          </NavLink>
        </div>
        <nav className="hidden sm:flex items-center space-x-2  text-sm">
          <NavLink
            href="/user/login"
            classList="border-gray-50 text-gray-50 border px-3 py-2 rounded-md hover:bg-amber-300 hover:text-gray-800 font-semibold"
          >
            Login
          </NavLink>
          <NavLink
            href="/user/signup"
            classList="px-3 bg-gray-50 rounded-md py-2 text-gray-800 hover:bg-amber-300  font-semibold"
          >
            Signup
          </NavLink>
          <div className="flex gap-3 text-sm text-gray-50 mx-4 border-l-2 pl-3">
            <NavLink href="/eng" classList="font-sans hover:text-amber-400">
              Eng
            </NavLink>
            <NavLink href="/fa" classList="font-sans hover:text-amber-400">
              دری
            </NavLink>
          </div>
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
            className="hidden sm:flex space-x-6 text-gray-600 text-sm uppercase w-full font-semibold"
            id="menu"
          >
            <NavLink href="/gifts/women" classList="hover:text-amber-600">
              For Her
            </NavLink>
            <NavLink href="/gifts/men" classList="hover:text-amber-600">
              For Him
            </NavLink>
            <NavLink href="/gifts/kids" classList="hover:text-amber-600">
              Kids
            </NavLink>
            <NavLink href="/gifts/occasions" classList="hover:text-amber-600">
              Occasions
            </NavLink>
            <NavLink
              href="/sales"
              classList="text-pink-700 hover:text-amber-600 animate-pulse"
            >
              Sales
            </NavLink>

            <div className="ml-auto flex space-x-4">
              <NavLink href="/posts" classList="hover:text-amber-600">
                <FaSearch className="text-xl" />
              </NavLink>
              <NavLink href="/user/profile" classList="hover:text-amber-600">
                <FaUser className="text-xl" />
              </NavLink>
              <NavLink href="/order/cart" classList="hover:text-amber-600">
                <FaShoppingCart className="text-xl" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar Mobile */}
      <div
        className={`sm:hidden overflow-hidden 
                      transition-all duration-400 ease-in-out
                      ${toggle ? "max-h-100 opacity-100" : "max-h-0 opacity-0"} 
                    `}
        id="mobile-menu"
      >
        <NavLink
          href="/gifts/women"
          classList="block py-2 px-4 text-gray-800 hover:bg-amber-300 hover:text-white"
        >
          For Her
        </NavLink>
        <NavLink
          href="/gifts/men"
          classList="block py-2 px-4 text-gray-800 hover:bg-amber-300 hover:text-white"
        >
          For Him
        </NavLink>
        <NavLink
          href="/gifts/kids"
          classList="block py-2 px-4 text-gray-800 hover:bg-amber-300 hover:text-white"
        >
          Kids
        </NavLink>
        <NavLink
          href="/gifts/occasions"
          classList="block py-2 px-4 text-gray-800 hover:bg-amber-300 hover:text-white"
        >
          Occasions
        </NavLink>
        <NavLink
          href="/gifts/sales"
          classList="block py-2 px-4 text-gray-800 hover:bg-amber-300 hover:text-white"
        >
          Sales
        </NavLink>
        <NavLink
          href="/login"
          classList="block py-2 px-4 text-gray-800 hover:bg-amber-300 hover:text-white font-bold"
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
