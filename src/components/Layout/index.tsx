import React from 'react';
import NavBar from '../NavBar';

export default function Layout({ children }: {children: any}) {
  return (
    <>
      <NavBar blogName="Blog do Natal" />
      <main>
        {children}
      </main>

    </>
  );
}
