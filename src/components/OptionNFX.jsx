import React, { Component } from 'react';
import Button from './Button';

class OptionNFX extends Component {
  render() {
    return (
        <div className="container-content__principal-option">
            <img className="" src={this.props.img} alt={this.props.title}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.text}</p>
            <Button href={this.props.hrefButton} name="Comprar" />
        </div>
    );
  }
}

export default OptionNFX;