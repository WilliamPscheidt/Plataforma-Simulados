import React, { useEffect, useState } from "react";
import Graphic from './Graficos/Evolucao'
import Graphic2 from './Graficos/Acertos'

import Axios from "axios";

import Lottie from 'react-lottie-player'
import lottieJson from '../../Assets/Animations/loading.json'
import SemResultado from '../../Assets/Animations/sem-resultado.json'

import $ from 'jquery'

const DashboardStatsTop = () => {

    const [evolucao, setEvolucao] = useState([]);
    const [ultimoSimulado, setUltimoSimulado] = useState([]);

    useEffect(() => {
        $('.loader').attr('class', 'd-none')
        $('.feedback').attr('className', 'feedback d-block')

        Axios.post('https://api.zyngo.com.br/dashboard/dashTop', {
            email: localStorage.getItem("user")
        }).then((response) => {
            if (response.data.evolucao.length > 0 && response.data.resultado.length > 0) {
                setEvolucao(response.data.evolucao)
                setUltimoSimulado(response.data.resultado)
            }
        });
    }, [])

    return (
        <>
            <div className="col-12 col-md-6 p-3 bg-light" id="dashboard-card">
                <div className="d-flex align-items-center">
                    <h1 id="tituloGráfico">Curva de Evolução</h1>
                </div>
                <div className="d-flex align-items-center justify-content-center container-grafico">
                    {evolucao.length > 0 ?
                        <Graphic
                            tamanho={evolucao.length}
                            evolucao0={evolucao[0] ? evolucao[0].acertos : 0}
                            evolucao1={evolucao[1] ? evolucao[1].acertos : 0}
                            evolucao2={evolucao[2] ? evolucao[2].acertos : 0}
                            evolucao3={evolucao[3] ? evolucao[3].acertos : 0}
                            evolucao4={evolucao[4] ? evolucao[4].acertos : 0}
                            evolucao5={evolucao[5] ? evolucao[5].acertos : 0}
                            evolucao6={evolucao[6] ? evolucao[6].acertos : 0}
                            evolucao7={evolucao[7] ? evolucao[7].acertos : 0}
                            evolucao8={evolucao[8] ? evolucao[8].acertos : 0}
                            evolucao9={evolucao[9] ? evolucao[9].acertos : 0}
                        />
                        :
                        <>
                            <Lottie className="loader"
                                loop
                                animationData={lottieJson}
                                play
                                style={{ width: 200, height: 200 }} />
                            <div className="d-flex align-items-center">
                                <Lottie
                                    loop
                                    animationData={SemResultado}
                                    play
                                    style={{ width: 200, height: 200 }} />
                                <span className="feedback-dados text-center">Sem dados</span>
                            </div>
                        </>
                    }
                </div>

            </div>

            <div className="col-12 col-md-6 p-3 bg-light" id="dashboard-card">
                <h1 id="tituloGráfico">Acertos por Dificuldade</h1>
                <div className="d-flex align-items-center justify-content-center container-grafico">

                    {
                        ultimoSimulado.length > 0
                            ?
                            <Graphic2
                                acertosA={ultimoSimulado[1] ? ultimoSimulado[1].soma : 0}
                                acertosB={ultimoSimulado[2] ? ultimoSimulado[2].soma : 0}
                                acertosC={ultimoSimulado[0] ? ultimoSimulado[0].soma : 0}
                            />
                            :
                            <>
                                <Lottie className="loader"
                                    loop
                                    animationData={lottieJson}
                                    play
                                    style={{ width: 200, height: 200 }} />
                                <div className="feedback d-none">
                                    <div className="d-flex align-items-center">
                                        <Lottie
                                            loop
                                            animationData={SemResultado}
                                            play
                                            style={{ width: 200, height: 200 }} />
                                        <span className="feedback-dados text-center">Sem dados</span>
                                    </div>

                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default DashboardStatsTop