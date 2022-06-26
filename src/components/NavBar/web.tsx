import React from 'react';
import NavBarWebLink from '../NavBarWebLink';

function NavBarWeb() {
  return (
    <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto md:block">
      <div className="text-sm lg:flex-grow">
        <NavBarWebLink link="/posts" placeholder="blog" />
        <NavBarWebLink link="/about" placeholder="sobre" />
        <NavBarWebLink link="/login" placeholder="login" />
      </div>
      <div>
        <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Entrar</a>
      </div>
    </div>
  );
}

export default NavBarWeb;
