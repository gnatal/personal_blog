import React from 'react';
import NavBarWebLink from '../navBarWebLink';

function navBar({ menu, blogName }: {menu: string, blogName: string}) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">{blogName}</span>
      </div>
      <div className="block md:hidden">
        <button type="button" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>{menu}</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto md:block">
        <div className="text-sm lg:flex-grow">
          <NavBarWebLink link="/posts" placeholder="blog" />
          <NavBarWebLink link="/about" placeholder="sobre" />
          <NavBarWebLink link="/login" placeholder="login" />
        </div>
        <div>
          <a href="#blog" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
  );
}
export default navBar;
