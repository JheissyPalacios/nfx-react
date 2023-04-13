import React, { Component } from 'react';
import Button from './Button';
import rest from '../../public/assets/rest.svg'

class Performance extends Component {
    render() {
        return (
            <div className="container-footer__performance-block">
                <img className="container-footer__performance-block-img" src={this.props.img} alt="Categoria_1"/>
                <div>
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
                    <Button href={this.props.hrefButton} name={this.props.nameButton} icon={rest} />
                </div>
            </div>
        );
    }
}

export default Performance;