import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
import './card.css';
import './button1.css';

const Home = ({ links, selectedCategory, handleCategoryChange }) => {
  const categories = ['All', ...new Set(links.map((link) => link.category))];
  console.log('Received links:', links);

  return (
    <div>
      <Header />
      <div className='container' style={{
        margin: '0px',
        padding: '10px',
      }}>
        <span class="regular-text-bold" style={{ fontSize: '24px', fontWeight: 'bold' }}>Categories: </span>
      </div>
      <div className='container' style={{ margin: '0px' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`card2 ${selectedCategory === category ? 'active' : ''}`}
            style={{ paddingRight: '20px', height: '40px', width: '100px', margin: '0px', }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Separate this in 2. Hero */}
      <div class="container" id="container">
        {links
          .filter((link) => selectedCategory === 'All' || selectedCategory === link.category)
          .map((link, index) => (
            <div key={index} class="card2">
              <div class="top-section">
                <img src={link.icon} alt={link.name} />
              </div>
              <div class="border">
              </div>
              <div class="icons">
              </div>
              <div class="bottom-section">
                <span class="title">{link.name}</span>
                <div class="row row1">
                  <div class="item">
                    <span class="regular-text-bold">Version</span>
                    <span class="big-text" style={{paddingLef: 'px'}}>{link.version}</span>
                  </div>
                  <div class="item">
                    <a href={link.download} class="btn1">
                      Install
                    </a>
                  </div>
                  <div className='item'>
                    <span class="regular-text-bold">Space </span>
                    <span class="regular-text-bold">150MB</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <Footer />
      </div>
    </div>
  );
};

export default Home;