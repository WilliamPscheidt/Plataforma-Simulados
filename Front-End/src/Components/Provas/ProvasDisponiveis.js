import React from "react";
import { useNavigate } from 'react-router-dom';
import SVGTimer from '../../Assets/Images/lap-timer-svgrepo-com.svg'
import SVGTeste from '../../Assets/Images/test-svgrepo-com.svg'

const ProvasDisponiveis = (props) => {
  const redirecionar = useNavigate();

  const abrirProva = () => {
    localStorage.setItem("dificuldade", props.dificuldadeBackend)
    redirecionar("/simulado")
  }

  return (
    <>
      <div className="provas-disponiveis">
        <div id="card-dificuldade" className={props.dificuldade}>
          <span id="textoDificuldade"><img src={props.icone} alt="Ícone" />Dificuldade <span id='bold'>{props.dificuldade}</span></span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div id="prova" className='d-flex'><button id="texto-prova" onClick={abrirProva}>{props.titulo1} {props.dificuldade}</button><span id="card-concluida" onClick={abrirProva}>Realizar Simulado</span></div>
        </div>
        <div className="d-flex">
          <div className="info-prova d-flex align-items-center justify-content-center">
            <p className="texto-info-prova d-flex align-items-center justify-content-center"><img src={SVGTeste} alt="Questoes" />10 Questões</p>
          </div>
          <div className="info-prova  d-flex align-items-center justify-content-center">
            <p className="texto-info-prova d-flex align-items-center justify-content-center"><img src={SVGTimer} alt="Tempo" />30 minutos</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProvasDisponiveis