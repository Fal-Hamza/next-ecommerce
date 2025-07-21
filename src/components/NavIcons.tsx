"use client";

import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";
import CartModal from "./CartModal";

const NavIcons = () => {
  //PROFILE
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  //CART
  const [iscCartOpen, setIscCartOpen] = useState(false);

  // FUNCTION PROFLE

  const router = useRouter();

  //TEMPORARY
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className=' flex items-center justify-center gap-4 xl:gap-6 relative'>
      <Image
        src='/profile.png'
        alt='profile'
        width={22}
        height={22}
        className=' cursor-pointer'
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className=' absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all z-20'>
          {/* 1 */}
          <Link href='/' className=''>
            Profile
          </Link>
          {/* 2 */}
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <Image
        src='/notification.png'
        alt='profile'
        width={22}
        height={22}
        className=' cursor-pointer'
      />
      {/* Cart */}
      <div className=' relative cursor-pointer'>
        <Image
          src='/cart.png'
          alt='profile'
          width={22}
          height={22}
          className=' cursor-pointer'
          onClick={() => setIscCartOpen((prev) => !prev)}
        />
        <div className=' absolute flex -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white items-center justify-center text-sm'>
          2
        </div>
      </div>

      {iscCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
