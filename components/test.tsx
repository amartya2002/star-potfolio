"use client";
import { useState } from 'react';
import Menuicon from '@/components/icons/menu-icon';
import Link from 'next/link';
import navData from '@/public/test.json'; 

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white dark:bg-black border-b mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-zinc-700 dark:text-zinc-500"
              href="/"
            >
              {navData.name}
            </Link>
            <button
              className="text-zinc-700 dark:text-zinc-500 cursor-pointer text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Menuicon />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {navData.links.map((link) => (
                <li key={link.id} className="nav-item">
                  <Link
                    href={link.href}
                     className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 dark:text-zinc-500 hover:opacity-75"
                  >
                    
                      {link.label}
                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
