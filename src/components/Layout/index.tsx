import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Layout({ children }: {children: any}) {
  return (
    <>
      <NavBar blogName="Blog do Natal" />
      <main className="min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}
