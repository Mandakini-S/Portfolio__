import React from 'react';
import Sidebar from '../Sidebar/';
import './index.scss';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;