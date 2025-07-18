"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  // function On submit

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const name = fromData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className=' flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        placeholder='Search'
        name='name'
        className=' flex-1 bg-transparent outline-none'
      />
      <button className=' cursor-pointer'>
        <Image src='/search.png' alt='icon search' width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
