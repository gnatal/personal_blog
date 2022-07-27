import React from 'react';
import Banner from '../Banner';

export default function About() {
  return (
    <Banner>
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
            Build Your new
            {' '}
            <span className="underline text-blue-400">Saas</span>
          </h1>
          <button type="button" className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
        </div>
      </div>
    </Banner>
  );
}
