// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;