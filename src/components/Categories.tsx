"use client";

import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className=' px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
        {/* [01] */}
        <Link
          href='/list?cat=test'
          className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg'
              alt=''
              fill
              className=' object-cover'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category NAme
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
