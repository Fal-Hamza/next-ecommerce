"use client";

import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      {/* ------------01------------------- */}
      <Link
        href='/test'
        className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/1227571/pexels-photo-1227571.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className=' font-medium'>Product name</span>
          <span className=' font-semibold'>45$</span>
        </div>
        <div className='text-sm text-gray-500'>My discription</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white '>
          Add To Cart
        </button>
      </Link>
      {/* ------------01------------------- */}
      <Link
        href='/test'
        className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/1227571/pexels-photo-1227571.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className=' font-medium'>Product name</span>
          <span className=' font-semibold'>45$</span>
        </div>
        <div className='text-sm text-gray-500'>My discription</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white '>
          Add To Cart
        </button>
      </Link>
      {/* ------------01------------------- */}
      <Link
        href='/test'
        className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/1227571/pexels-photo-1227571.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className=' font-medium'>Product name</span>
          <span className=' font-semibold'>45$</span>
        </div>
        <div className='text-sm text-gray-500'>My discription</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white '>
          Add To Cart
        </button>
      </Link>
      {/* ------------01------------------- */}
      <Link
        href='/test'
        className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/1227571/pexels-photo-1227571.jpeg'
            sizes='25vw'
            fill
            alt=''
            className=' object-cover absolute rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className=' font-medium'>Product name</span>
          <span className=' font-semibold'>45$</span>
        </div>
        <div className='text-sm text-gray-500'>My discription</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white '>
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
