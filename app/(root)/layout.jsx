import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
