"use client";

import Link from "next/link";
import Menu from "./Menu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className=' h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* MOBILE */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link href='/'>
          <div className=' text-2xl tracking-wide'>LAMA</div>
        </Link>

        <button
          onClick={() => setNavActive(!navActive)}
          className='w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none'
        >
          {/* [1] */}
          <span
            className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
              navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
            }`}
          ></span>
          {/* [2] */}
          <span
            className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
              navActive ? "opacity-0" : "top-1/2"
            }  `}
          ></span>
          {/* [3] */}
          <span
            className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
              navActive ? " top-1/2 -rotate-45" : "bottom-0 translate-y-0"
            }`}
          ></span>
        </button>

        {/* Manu */}
      </div>
      <AnimatePresence mode='wait'>{navActive && <Menu />}</AnimatePresence>

      {/* BIGGER SCREEN */}
      <div className=' hidden md:flex items-center justify-between gap-8 h-full'>
        {/* LIFT */}
        <div className='w-1/3'>
          <Link href='/' className=' flex items-center gap-3'>
            <Image src='/logo.png' alt='Logo' width={24} height={24} />
            <div className=' text-2xl tracking-wide'>LAMA</div>
          </Link>
        </div>
        {/* RGHT */}
        <div className='w-2/3 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
