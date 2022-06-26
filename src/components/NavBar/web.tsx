import React from 'react';
import NavBarWebLink from '../NavBarWebLink';

function NavBarWeb() {
  return (
    <div className="w-full hidden flex-grow sm:flex sm:items-center sm:w-auto sm:block">
      <div className="text-sm sm:flex-grow">
        <NavBarWebLink link="/" placeholder="inicio" />
        <NavBarWebLink link="/posts" placeholder="blog" />
        <NavBarWebLink link="/about" placeholder="sobre" />
      </div>
      <div>
        <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Entrar</a>
      </div>
    </div>
  );
}

export default NavBarWeb;
