import React from 'react';
import '../styles/Principal.scss'
import Banner from './Banner';
import Footer from './Footer';
import OptionNFX from './OptionNFX';

const Principal = () => {
    return (
        <div className="container-content__principal">
            <Banner rutaImg="assets/bannerNFX.png" />
            <Footer />
            <div className="container-content__principal-container">
                <div className="container-content__principal-options">
                    <OptionNFX img="assets/Categoria_1.png" title="$100" text="1 Participacion - Hasta 1K Broker" hrefButton="/"/>
                    <OptionNFX img="assets/Categoria_2.png" title="$300" text="3 Participacion - Hasta 3K Broker" hrefButton="/"/>
                    <OptionNFX img="assets/Categoria_3.png" title="$500" text="5 Participacion - Hasta 10K Broker" hrefButton="/"/>
                    <OptionNFX img="assets/Categoria_4.png" title="$1,000" text="10 Participacion - Hasta 5K Broker" hrefButton="/"/>
                    <OptionNFX img="assets/Categoria_1.png" title="$3,000" text="32 Participacion - IlimitadoBroker" hrefButton="/"/>
                    <OptionNFX img="assets/Categoria_2.png" title="$5,000" text="55 Participacion - IlimitadoBroker" hrefButton="/"/>
                </div>
                
            </div>
            <div className="container-content__secondary-container">
                <div className="container-content__secondary-table">
                    <h1>Información del usuario</h1>
                    <div className="container-content__secondary-table-info one">
                        <p className="title"><b>Link de afiliado Broker Vantage:</b></p>
                        <p>https://mynfx.com/usuario1</p>
                        <p className="title"><b>Total de Participaciones NFX:</b></p> 
                        <p>4852874541</p>
                        <p className="title"><b>Comision de Plan De Referidos</b></p>
                        <p>785127455578</p>
                    </div>
                    <div className="container-content__secondary-table-info two">
                        <p className="title"><b>Comision Plan De Carrera</b></p>
                        <p>85184545415</p>
                        <p className="title"><b>Total de retiros :</b></p>
                        <p>9687544</p>
                        <p className="title">Tiempo restante para mi siguiente retiro:</p>
                        <p>2D 16H 50M 23S</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Principal;