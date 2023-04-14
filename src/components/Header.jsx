import React, { Component } from 'react'
import '../styles/Header.scss'
import Button from './Button';
import Logo from './Logo';
import Search from './Search'

export default class Header extends Component {
  render() {
    const Style = {width: '30px'}
    return (
      <div className={"header " + this.props.toggle}>
        <div className="header-content-logo">
          <svg style={Style} onClick={this.props.toggleAccordion} className={this.props.toggle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fcfcfc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect> </clipPath> </defs> </g></svg>
          <Logo toggle={this.props.toggle}/>
        </div>
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
    )
  }
}
