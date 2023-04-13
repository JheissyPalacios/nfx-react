import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={this.props.rutaImg} alt={this.props.alt} />
            </div>
        );
    }
}

export default Banner;