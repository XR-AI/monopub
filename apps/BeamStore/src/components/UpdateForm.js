import React, { useState } from 'react';
import AuthenticationPopup from './AuthenticationPopup';
import './UpdateForm.css';

const UpdateForm = ({ onSubmit }) => {
  const [download, setDownload] = useState('');
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [version, setVersion] = useState('');
  const [category, setCategory] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
    setIsPopupVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      onSubmit({ download, name, icon, version, category });
      setDownload('');
      setName('');
      setIcon('');
      setVersion('');
      setCategory('');
    } else {
      alert('Authentication required. Please log in.');
    }
  };

  return (
    <div className="form-container">
      {isPopupVisible && (
        <AuthenticationPopup onClose={handlePopupClose} onAuthenticate={handleAuthenticate} />
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Download Link:
          <input type="text" value={download} onChange={(e) => setDownload(e.target.value)} />
        </label>
        <label>
          App Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Icon Link:
          <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
        </label>
        <label>
          Version:
          <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <button type="submit">Send it!</button>
      </form>

      <div>
        <p>You can add things here!</p>
      </div>
    </div>
  );
};

export default UpdateForm;