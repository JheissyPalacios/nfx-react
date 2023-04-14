import React, { Component } from 'react';
import Button from './Button';
import rest from '../../public/assets/rest.svg'

class Performance extends Component {
    render() {
        const Style = {width: '100%'}
        return (
            <div className="container-footer__performance-block">
                <div className="container-footer__performance-bookmark">
                    <img src="assets/bookmark.png" alt="marcalibro"/>
                    <span>{this.props.number}</span>
                </div>
                <img className="container-footer__performance-block-img" src={this.props.img} alt="Categoria_1"/>
                <div style={Style}>
                    <div className="container-footer__performance-container">
                        <div className="container-footer__performance-info">
                            <p>Compra</p>
                            <h3>${this.props.compra}</h3>
                        </div>
                        <div className="container-footer__performance-info">
                            <p>Pago del mes</p>
                            <h3>${this.props.mes}</h3>
                        </div>
                        <div className="container-footer__performance-info">
                            <p>Pago acumulado</p>
                            <h3>${this.props.acumulado}</h3>
                        </div>
                    </div>
                </div>
                <Button href={this.props.hrefButton} name={this.props.nameButton} icon={rest} />
            </div>
        );
    }
}

export default Performance;