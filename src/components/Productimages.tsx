"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/27229066/pexels-photo-27229066.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/7294671/pexels-photo-7294671.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/9616278/pexels-photo-9616278.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/9044055/pexels-photo-9044055.jpeg",
  },
];

const Productimages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image
          src={images[index].url}
          alt=''
          fill
          sizes='50vw'
          className=' object-cover rounded-md'
        />
      </div>

      <div className='flex gap-4 mt-8'>
        {images.map((img, i) => (
          <div
            className=' w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=''
              fill
              sizes='50vw'
              className=' object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productimages;
