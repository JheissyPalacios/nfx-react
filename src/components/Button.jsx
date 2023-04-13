import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <a href={this.props.href}> 
            {
                this.props.icon !== undefined &&
                    <img className="container-footer__performance-block-icon" src={this.props.icon} alt="" />
            }
                
                <span>{this.props.name}</span>
            </a>
        );
    }
}

export default Button;