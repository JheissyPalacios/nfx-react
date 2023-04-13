import React from 'react';
import '../styles/Header2.scss'

const Header = () => {
    return (
      <div className="container-banner">
          <img className="image" src="/assets/Gradients.png" alt="Gradients"/>
          <img className="image-top" src="/assets/Noise.png" alt="Noise"/>
          <div className="image-name-container">
              <img className="image-name" src="/assets/nfx.png" alt="nfx"/>
          </div>
      </div>
    );
};

export default Header;