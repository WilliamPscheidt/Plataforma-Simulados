import React, { useState } from 'react'
import Graphic3 from './Graficos/TempoMedio'
import Graphic4 from './Graficos/Ranking'
import { useEffect } from 'react'
import Axios from 'axios'

import Lottie from 'react-lottie-player'
import lottieJson from '../../Assets/Animations/loading.json'
import SemResultado from '../../Assets/Animations/sem-resultado.json'

import $ from 'jquery'

const DashboardStatsBottom = () => {

  const [ranking, setRanking] = useState([])
  const [mediaTempo, setMediaTempo] = useState([])

  useEffect(() => {
    $('.loader').attr('class', 'd-none')
    $('.feedback').attr('class', 'd-flex')

    Axios.post('https://api.zyngo.com.br/dashboard/dashBottom', {
      email: localStorage.getItem('user'),
    }).then((response) => {
      if (response.data.result.length > 0) {
        setRanking(response.data.result)
      }

      if (response.data.resultado.length > 0) {
        setMediaTempo(response.data.resultado)
      }
    })
  }, [])

  return (
    <>
      <div className="col-12 col-md-6 p-3 bg-light" id="dashboard-card">
        <h1 id="tituloGráfico">Tempo Médio (Minutos)</h1>
        <div className="d-flex align-items-center justify-content-center container-grafico">

          {
            mediaTempo.length > 0
              ?
              <Graphic4
                mediaA={mediaTempo[1] ? mediaTempo[1].media : 0}
                mediaB={mediaTempo[2] ? mediaTempo[2].media : 0}
                mediaC={mediaTempo[0] ? mediaTempo[0].media : 0}
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

      <div className="col-12 col-md-6 p-3 bg-light" id="dashboard-card">
        <h1 id="tituloGráfico">Ranking</h1>
        <div className="d-flex align-items-center justify-content-center container-grafico">

          {
            ranking.length > 0
              ?
              <Graphic3
                ranking0={ranking[0].nomeCompleto}
                pontuacao0={ranking[0].pontuacao}

                ranking1={ranking[1].nomeCompleto}
                pontuacao1={ranking[1].pontuacao}

                ranking2={ranking[2].nomeCompleto}
                pontuacao2={ranking[2].pontuacao}

                ranking3={ranking[3].nomeCompleto}
                pontuacao3={ranking[3].pontuacao}

                ranking4={ranking[4].nomeCompleto}
                pontuacao4={ranking[4].pontuacao}

                ranking5={ranking[5].nomeCompleto}
                pontuacao5={ranking[5].pontuacao}

                ranking6={ranking[6].nomeCompleto}
                pontuacao6={ranking[6].pontuacao}

                ranking7={ranking[7].nomeCompleto}
                pontuacao7={ranking[7].pontuacao}

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
                    <span className="feedback-dados text-center">Você precisa fazer um simulado para exibir dados!</span>
                  </div>

                </div>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default DashboardStatsBottom