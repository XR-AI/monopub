import React, { useState } from 'react';
import './UpdateForm.css';

const AuthenticationPopup = ({ onClose, onAuthenticate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthenticate = () => {
    if (username === 'admin' && password === 'admin') {
      onAuthenticate();
      onClose();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="authentication-popup">
      <div className="popup-content">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleAuthenticate}>Authenticate</button>
      </div>
    </div>
  );
};

export default AuthenticationPopup;