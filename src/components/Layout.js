import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-area">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
