"use client";

import { div } from "framer-motion/client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className=' w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-8 z-20'>
      {!cartItems ? (
        <div className=''> Cart is Empty</div>
      ) : (
        <>
          <h2 className=' text-xl font-semibold'>Shopping Cart</h2>
          <div className='flex flex-col gap-8'>
            {/* items 1 */}
            <div className=' flex gap-4'>
              <Image
                src='https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg'
                width={72}
                height={96}
                alt=''
                className=' object-cover rounded-md'
              />
              <div className='flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className=''>
                  {/* TITLE */}
                  <div className=' flex items-center justify-between gap-8'>
                    <h3 className=' font-semibold'>Product name</h3>
                    <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                  </div>
                  {/* DESC */}
                  <div className=' text-sm text-gray-500'>available</div>
                </div>
                {/* BOTTOM */}
                <div className='flex justify-between items-center'>
                  <span className=' text-gray-500'>Qty. 2</span>
                  <span className=' text-blue-500'>remove</span>
                </div>
              </div>
            </div>
            {/* items 1 */}
            <div className=' flex gap-4'>
              <Image
                src='https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg'
                width={72}
                height={96}
                alt=''
                className=' object-cover rounded-md'
              />
              <div className='flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className=''>
                  {/* TITLE */}
                  <div className=' flex items-center justify-between gap-8'>
                    <h3 className=' font-semibold'>Product name</h3>
                    <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                  </div>
                  {/* DESC */}
                  <div className=' text-sm text-gray-500'>available</div>
                </div>
                {/* BOTTOM */}
                <div className='flex justify-between items-center'>
                  <span className=' text-gray-500'>Qty. 2</span>
                  <span className=' text-blue-500'>remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* // BOTTOM */}
          <div className=''>
            <div className='flex justify-between items-center font-semibold'>
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className=' text-gray-500 text-sm mt-2 mb-4'>
              Shipping and Taxes calculated at checkout
            </p>
            <div className='flex justify-between text-sm'>
              <button className=' rounded-md py-3 px-4 ring-1  ring-gray-300 hover:bg-gray-100 transition duration-500'>
                View Cart
              </button>
              <button className='rounded-md py-3 px-4 bg-black hover:bg-gray-300 text-white hover:text-black transition duration-500'>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
