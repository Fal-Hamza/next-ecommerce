const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
      <div className='flex gap-6 flex-wrap'>
        {/* [01] */}
        <select
          name='type'
          id=''
          className='py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED] outline-0'
        >
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='Physical' className=' bg-[rgb(102,136,240)]'>
            Physical
          </option>
          <option value='Digital' className=' bg-[rgb(102,136,240)]'>
            Digital
          </option>
        </select>
        <input
          type='text'
          name='min'
          placeholder='min price'
          className='text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-[rgb(102,136,240)]'
        />
        <input
          type='text'
          name='max'
          placeholder='max price'
          className='text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-[rgb(102,136,240)]'
        />
        {/* [02] */}
        <select
          name='type'
          id=''
          className='py-2 px-4 rounded-2xl text-sm font-medium bg-[rgb(65,105,255)] outline-0'
        >
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
        </select>
        {/* [03] */}
        <select
          name='type'
          id=''
          className='py-2 px-4 rounded-2xl text-sm font-medium bg-[rgb(65,105,255)] outline-0'
        >
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
          <option value='' className=' bg-[rgb(102,136,240)]'>
            Type
          </option>
        </select>
      </div>
      <div className=''>
        <select
          name=''
          id=''
          className=' py-2 px-4 rounded-2xl text-sm font-medium bg-white ring-1 ring-gray-400'
        >
          <option value=''>Sport By</option>
          <option value=''>Price (low to high)</option>
          <option value=''>Price (high to loe)</option>
          <option value=''>Newest</option>
          <option value=''>Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
