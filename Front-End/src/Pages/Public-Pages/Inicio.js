import React from "react";

import "../../Style/Inicio/Inicio.css"

import IconeGratuito from '../../Assets/Images/ilu1.svg'
import IconeDesempenho from '../../Assets/Images/ilu2.svg'
import IconeRanking from '../../Assets/Images/ilu3.svg'

import Menu from "../../Components/Inicio/Menu";
import MenuExpand from "../../Components/Inicio/MenuExpand";
import Cards from "../../Components/Inicio/Cards";
import Conheca from "../../Components/Inicio/Conheca";
import Contato from "../../Components/Inicio/Contato";
import Footer from "../../Components/Inicio/Footer";
import ConhecaInvertido from "../../Components/Inicio/ConhecaInvertido";

const Inicio = () => {
    return (
        <>
        <div className="inicio">
            <div className="container">
                <nav id="menu" className="menu d-flex align-items-center justify-content-between">
                    <Menu />
                </nav>
                
                <section className="menu-expand row d-flex align-items-center">
                    <MenuExpand />
                </section>

                <section id="cards" className="cards d-flex">
                    <Cards
                        icone={IconeGratuito}
                        titulo="Gratuito"
                        texto="Você não precisa gastar nada para utilizar!"
                    />

                    <Cards 
                        icone={IconeDesempenho}
                        titulo="Desempenho"
                        texto="Acompanhe seu desempenho pelo nosso dashboard!"
                    />

                    <Cards 
                        icone={IconeRanking}
                        titulo="Ranking"
                        texto="Suba no ranking e saiba o seu nível de conhecimento!"
                    />
                </section>

                <section className="conheca row" id="conheca">
                    <Conheca />
                </section>

                <section className="conheca invertido row" id="conheca">
                    <ConhecaInvertido />
                </section>

                <section className="contato" id="contato">
                    <Contato />
                </section>
            </div>
            
            <section className="footer">
                <Footer />
            </section>
        </div>
        </>
    )
}

export default Inicio