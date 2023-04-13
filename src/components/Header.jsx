import React from 'react';
import '../styles/Header.scss'
import Button from './Button';
import Search from './Search'

const Header = () => {
    return (
      <div className="header">
            <img className="image-name" src="/assets/logo-NFX.png" alt="nfx"/>
            <Search hrefButton="" />
            <div className="container-header__brands">
                <img src="assets/logo-7.png" alt="logo binance" />
                <img src="assets/logo.png" alt="logo enjin" />
                <img src="assets/logo-1.png" alt="logo trust wallet" />
                <img src="assets/logo-2.png" alt="logo metamask" />
                <img src="assets/logo-3.png" alt="logo coin98" />
                <img src="assets/logo-4.png" alt="logo safepal" />
                <img src="assets/logo-5.png" alt="logo math wallet" />
                <img src="assets/logo-6.png" alt="logo vantage" />
            </div>
            <Button hrefButton="" name="Conectar Wallet" />
      </div>
    );
};

export default Header;