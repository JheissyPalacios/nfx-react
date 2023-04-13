import React from 'react';
import Performance from './Performance';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="container-footer__performance">
                <Performance number="1" img="assets/Categoria_1.png" compra="300" mes="32" acumulado="123" hrefButton="/" nameButton="Retirar ganancias del mes"/>
                <Performance number="2" img="assets/Categoria_2.png" compra="500" mes="75" acumulado="236" hrefButton="/" nameButton="Retirar ganancias del mes"/>
                <Performance number="3" img="assets/Categoria_3.png" compra="5000" mes="480" acumulado="2380" hrefButton="/" nameButton="Retirar ganancias del mes"/>
            </div>
        </div>
    );
};

export default Footer;