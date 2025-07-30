import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

// color: rgb(65, 105, 255);
// color: rgb(102, 136, 240);

const page = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* COMPAIGN */}
      <div className=' bg-pink-50 px-4 flex justify-between h-64'>
        <div className=' md:w-2/3 w-full flex flex-col items-center justify-center gap-8 '>
          <h1 className=' text-xl md:text-3xl font-semibold leading-[48px] text-gray-700'>
            Grap up to 50% on
            <br />
            Selected Product
          </h1>
          <button className=' rounded-3xl bg-lama text-white px-5 py-3 text-sm'>
            Buy Now
          </button>
        </div>
        <div className=' hidden md:block relative w-1/3'>
          <Image src='/woman.png' alt='' fill className=' object-contain' />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* ListProduct */}
      <h1 className=' mt-12 text-xl font-semibold'>Shoes For You!</h1>
      <ProductList />
    </div>
  );
};

export default page;
