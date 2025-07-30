import Image from "next/image";
import Link from "next/link";

// icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/' className=''>
            <div className='text-2xl tracking-wide'>Hamza</div>
          </Link>
          <p>
            Morocco, Marakech Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quas, voluptatum.
          </p>
          <span className=' font-semibold'>fal.hamza98@gmail.com</span>
          <span className=' font-semibold'>0666541236</span>
          <ul className='flex gap-6'>
            <Link
              href='/'
              className=' w-[50px] h-[50px]  transition-transform duration-500 hover:scale-150 ease-out flex items-center justify-center'
            >
              <FaFacebookF size={20} color='#3b5998' />
            </Link>
            <Link
              href='/'
              className=' w-[50px] h-[50px]  transition-transform duration-500 hover:scale-150 ease-out flex items-center justify-center'
            >
              <FaInstagram size={20} color='#E1306C' />
            </Link>
            <Link
              href='/'
              className=' w-[50px] h-[50px]  transition-transform duration-500 hover:scale-150 ease-out flex items-center justify-center'
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href='/'
              className=' w-[50px] h-[50px]  transition-transform duration-500 hover:scale-150 ease-out flex items-center justify-center'
            >
              <FaWhatsapp size={20} color='#25D366' />
            </Link>
          </ul>
        </div>
        {/* CENTER */}
        <div className=' hidden lg:flex justify-between w-1/2 '>
          {/* [01] */}
          <div className='flex flex-col justify-between'>
            <h1 className=' font-medium text-lg'>COMPANY</h1>

            <div className='flex flex-col gap-6'>
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
          {/* [01] */}
          <div className='flex flex-col justify-between'>
            <h1 className=' font-medium text-lg'>COMPANY</h1>

            <div className='flex flex-col gap-6'>
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
          {/* [01] */}
          <div className='flex flex-col justify-between'>
            <h1 className=' font-medium text-lg'>COMPANY</h1>

            <div className='flex flex-col gap-6'>
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className=' w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className=' font-medium text-lg'>SUBSCRIBE</h1>
          <p className=''>
            Be the first to get the latest news about trends, promotions, and
            much more !
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Email address'
              className='p-4 w-3/4'
            />
            <button className=' w-1/4 bg-lama text-white'>JOIN</button>
          </div>
          <span className=' font-semibold'>Secure Payments</span>
          <div className='flex justify-between gap-4 lg:flex-wrap'>
            <Image src='/discover.png' alt='' width={40} height={40} />
            <Image src='/skrill.png' alt='' width={40} height={40} />
            <Image src='/paypal.png' alt='' width={40} height={40} />
            <Image src='/mastercard.png' alt='' width={40} height={40} />
            <Image src='/visa.png' alt='' width={40} height={40} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className=''>&copy; copyright 2025 swimming Shop</div>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className=''>
            <span className=' text-gray-500 mr-4'>Language</span>
            <span className=' font-medium'>Morocco | English </span>
          </div>
          <div className=''>
            <span className=' text-gray-500 mr-4'>Curency</span>
            <span className=' font-medium'> MAD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
