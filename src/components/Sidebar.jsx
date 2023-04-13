import React from 'react'
import '../styles/Sidebar.scss'
import Accordion from './Accordion';
import Banner from './Banner';
import Button from './Button';

export default function Sidebar() {
  return (
    <div className="container-content__sidebar">
        <div className="container-content__sidebar-balance">
            <Banner rutaImg="assets/fondoBalance.png" />
            <div className="banner-content">
                <span>Balance</span>
                <h2>US$ 14,000</h2>
                <Button name="Retirar ganancias" />
            </div>
        </div>
        <div className="container-content__sidebar-container">
                    <div className="container-content__secondary-square" id="present-range">
                        <p>Rango actual</p>
                        <img className="image-diamond" src="assets/diamond.png" alt="diamond"/>
                        <h1>Blue Diamond</h1>
                    </div>
                    <div className="container-content__secondary-progress">
                        <p><span>10</span> directos producción directa <span>20K</span> - Bono 1K - <span>Diamond</span></p>
                        <progress id="number_10" max="100" value="70"> 70% </progress>
                        <p><span>20</span> directos producción directa <span>50K</span> - Bono 3K - Blue <span>Diamond</span></p>
                        <progress id="number_20" max="100" value="50"> 70% </progress>
                        <p><span>50</span> directos producción directa <span>200K</span> - Bono 10K - Black <span>Diamond</span></p>
                        <progress id="number_50" max="100" value="30"> 70% </progress>
                    </div>
                    <div className="container-content__secondary-square two">
                        <p>Ventas actuales</p>
                        <h2>US$ 10,000</h2>
                        <h1>Directos NFX</h1>
                    </div>
            {/* <div  className="container-content__sidebar-accordion">
                <Accordion title="¿Qué es NFX?">
                    <p data-accordion-content>Es un Smart Contract ,con plan de referidos y con reparticion de beneficios a los usuarios  a través de la tecnología blockchain de Binance y soportado en la industria del mercado de Forex operativa real en uno de los mejores broker del mundo Vantage.Visible myfxbook.El dinero siempre en tu Control.</p>
                </Accordion>
                <p className="container-content__sidebar-accordion-content">Es un Smart Contract ,con plan de referidos y con reparticion de beneficios a los usuarios  a través de la tecnología blockchain de Binance y soportado en la industria del mercado de Forex operativa real en uno de los mejores broker del mundo Vantage.Visible myfxbook.El dinero siempre en tu Control.</p>
            </div> */}
        </div>
    </div>
  )
}