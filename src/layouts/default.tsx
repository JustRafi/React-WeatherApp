import React from 'react';
import type { ReactNode } from 'react';
import Header from '../components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen py-16">
      <Header headerInfo='Warszawa, Polska'/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;