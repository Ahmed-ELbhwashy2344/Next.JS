"use client";
import Link from "next/link";
import { useState } from "react";
import { GiTec9 } from "react-icons/gi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="flex justify-between items-center p-4">
        <div
          className={`md:hidden text-5xl cursor-pointer z-20 ${
            isMenuOpen ? "ml-36" : ""
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>

        <div className="font-bold text-3xl text-violet-600 hidden md:flex">
          <Link href="/" className="flex items-center">
            CLOUD
            <span className=" inline-block text-5xl mx-5">
              
              <GiTec9 />
            </span>
            HOSTING
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="text-2xl font-bold ml-20 flex">
            <Link className="mx-6 hover:text-violet-600 transition" href="/">
              Home
            </Link>
            <Link
              className="mx-6 hover:text-violet-600 transition"
              href="/admin"
            >
              Admin
            </Link>
            <Link
              className="mx-6 hover:text-violet-600 transition"
              href="/About"
            >
              About
            </Link>
            <Link
              className="mx-6 hover:text-violet-600 transition"
              href="/articles"
            >
              Articles
            </Link>
            <Link
              className="mx-6 hover:text-violet-600 transition"
              href="/test"
            >
              Test page
            </Link>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-[200px] h-[300px] bg-amber-50 shadow-xl z-10 transition-transform duration-300 transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full text-3xl font-bold space-y-8">
          <Link
            onClick={toggleMenu}
            className="hover:text-violet-600 transition"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-violet-600 transition"
            href="/admin"
          >
            Admin
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-violet-600 transition"
            href="/About"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-violet-600 transition"
            href="/articles"
          >
            Articles
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-violet-600 transition"
              href="/test"
            >
              Test page
          </Link>
        </ul>
      </div>
    </div>
  );
}
