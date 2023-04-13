import React, { Component } from 'react';
import Button from './Button';
import '../styles/Search.scss'

class Search extends Component {
  render() {
    return (
        <div className="searching">
            <input type="text" placeholder="Dirección de Wallet..." />
            <Button href={this.props.hrefButton} name="Comprar" />
        </div>
    );
  }
}

export default Search;