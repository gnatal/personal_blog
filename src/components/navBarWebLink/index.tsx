import React from 'react';

function NavBarWebLink({ link, placeholder }: {link:string, placeholder:string}) {
  return (
    <a href={link} className="block mt-4 text-md lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
      {placeholder}
    </a>
  );
}

export default NavBarWebLink;
