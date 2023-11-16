import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Download apps to your XREAL Beam</h1>
      <div>
        {<DarkModeToggle/> }
      </div>
    </header>
  );
};

export default Header;