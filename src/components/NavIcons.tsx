"use client";

import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className=' flex items-center justify-center gap-4 xl:gap-6'>
      <Image
        src='/profile.png'
        alt='profile'
        width={22}
        height={22}
        className=' cursor-pointer'
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className=''>
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
      <Image
        src='/cart.png'
        alt='profile'
        width={22}
        height={22}
        className=' cursor-pointer'
      />
    </div>
  );
};

export default NavIcons;
