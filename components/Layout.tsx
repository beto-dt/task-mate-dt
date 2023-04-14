import React from 'react';
import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="page">
      <Link href="/">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
