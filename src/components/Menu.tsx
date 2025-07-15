"use client";

import Link from "next/link";

const Menu = () => {
  return (
    <div className=' absolute bg-black left-0 top-20 text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 '>
      <Link href='/'>HomePage</Link>
      <Link href='/'>Shop</Link>
      <Link href='/'>Deals</Link>
      <Link href='/'>About</Link>
      <Link href='/'>Contact</Link>
      <Link href='/'>Logout</Link>
      <Link href='/'>Cart(1)</Link>
    </div>
  );
};

export default Menu;
