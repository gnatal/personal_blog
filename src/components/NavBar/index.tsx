import React from 'react';
import NavBarMobile from './mobile';
import NavHeader from './Navheader';
import NavBarWeb from './web';

function navBar({ blogName }: { blogName: string}) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <NavHeader blogName={blogName} />
      <NavBarMobile />
      <NavBarWeb />
    </nav>
  );
}
export default navBar;
