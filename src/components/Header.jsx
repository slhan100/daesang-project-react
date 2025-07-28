import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h2> 대상 프로젝트</h2>
        </div>
        
      </div>
    </header>
  );
}

export default Header