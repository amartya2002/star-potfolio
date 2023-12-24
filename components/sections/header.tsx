// components/Navbar.js
"use client";
import { useState } from "react";
import Menuicon from "@/components/icons/menu-icon";
import Closeicon from "@/components/icons/close-icon";

import Link from "next/link";
import navData from "@/data/test.json";

// MobileNav component for mobile view
const MobileNav = ({ links, navbarOpen, onClose }) => (
  <div
    className={`md:hidden mobile-nav ${
      navbarOpen
        ? "open mx-auto max-w-7xl bg-black w-full h-[100vh] top-0 absolute"
        : ""
    }  `}
  >
    
      <div className="flex-col flex w-full h-full justify-center items-center">
{navbarOpen && (
  <>
        <ul className="space-y-4 text-center">
        {links.map((link) => (
          <li
            key={link.id}
            className="rounded-md hover:bg-zinc-900 hover:scale-105 duration-500"
          >
            <Link
              href={link.href}
              className="block px-[35vw] py-1.5 text-xl font-medium text-zinc-300 dark:text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-500 duration-200 w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    
      </>
      
)}
  <button
          className="text-zinc-700 dark:text-zinc-500 cursor-pointer text-xl leading-none mt-12 hover:text-white duration-300"
          type="button"
          onClick={onClose}
        >
          <Closeicon />
        </button>


      </div>
    
  </div>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="nav sticky top-0 mx-auto w-full justify-center bg-white/60 backdrop-blur-lg dark:bg-transparent">
      <div className="z-99 mx-auto flex w-full max-w-7xl flex-row justify-between px-6 py-6 md:items-center md:px-12 lg:px-32">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-800 dark:text-zinc-200"
          >
            {navData.firstname}
            <span className="from-zinc-100 to-zinc-700 font-normal text-zinc-600 dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent">
              {" "}
              {navData.lastname}
            </span>
          </Link>
          <button
            className="text-zinc-700 dark:text-zinc-500 cursor-pointer text-xl leading-none px-3 py-1 block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Menuicon />
          </button>
        </div>
        <div className="md:flex items-center hidden">
          <ul className="flex">
            {navData.links.map((link) => (
              <li key={link.id} className="nav-item">
                <Link
                  href={link.href}
                  className="px-3 flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MobileNav
        links={navData.links}
        navbarOpen={navbarOpen}
        onClose={closeNavbar}
      />
    </nav>
  );
};

export default Navbar;
