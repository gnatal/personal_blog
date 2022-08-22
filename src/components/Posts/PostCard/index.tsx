import React from 'react';

export default function PostCard() {
  return (
    <div className='max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md'>
      <div className='flex justify-between items-center'>
        <span className='font-light text-gray-600'>date</span>
        <a className='px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500' href='!#'>tag</a>
      </div>
      <div className='mt-2'>
        <a className='text-2xl text-gray-700 font-bold hover:underline' href='!#'>title</a>
        <p className='mt-2 text-gray-600'>content</p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <a className='text-blue-500 hover:underline' href='!#'>Read more</a>
        <div>
          <a className='flex items-center' href='!#'>
            <img className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block' src='..' alt='avatar' />
            <h1 className='text-gray-700 font-bold hover:underline'>name</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
