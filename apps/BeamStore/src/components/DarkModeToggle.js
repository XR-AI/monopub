import React, { useState } from 'react';
import './buttons.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('light-mode');
    document.querySelector('header').classList.toggle('light-mode');
  };

  return (
    <button  className="btn" onClick={toggleDarkMode}>
      {isDarkMode ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
    </button>
  );
};

export default DarkModeToggle;