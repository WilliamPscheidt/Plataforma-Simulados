import React, {useEffect, useState} from "react";

import {Modal, Button, Spinner} from 'react-bootstrap';

import '../../Style/Simulado/Simulado.css'

import Axios from "axios";

import $ from 'jquery'

import Prova from '../../Assets/Images/prova.svg'

import { useNavigate } from "react-router-dom";

import SVGWarning from '../../Assets/Images/warning-svgrepo-com.svg'

import Lottie from 'react-lottie-player'
import lottieJson from '../../Assets/Animations/96487-award-or-achievement-animation.json'

import configs from '../../Configurations/Configs.json'

const Simulado = () => {

    const redirecionar = useNavigate();

    const [show, setShow] = useState(true);
    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [conteudo, setConteudo] = useState();
    const [respostas, setRespostas] = useState([]);
    const [pontuação, setPontuacao] = useState(0);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);

    const [minutos, setMinutos] = useState(30);
    const [segundos, setSegundos] = useState(0);

    const dificuldadeProva = localStorage.getItem("dificuldade")

    var timer;
    var timerDec;

    useEffect(()=> {
        timer = setInterval(() =>{
            setSegundos(segundos-1);

            if(segundos===0){
                setMinutos(minutos-1)
                setSegundos(59)
            }
        },1000)

        if(minutos===0 && segundos===1) {
            redirecionar("/provas")
        }
    
        return ()=> clearInterval(timer);
    })

    const handleClose = () => { 
        setShow(false);
        pegarPerguntas();
        $("#seletorsimulado").attr("class", "simulado d-flex vh-100 justify-content-center align-items-center")
    }

    const pegarPerguntas = () => {
        Axios.post(configs.BASE_URL+'/prova/listarPerguntas', {
            dificuldade: dificuldadeProva
        }).then((response) => {
            if(response){
                setConteudo(response.data.result)
            }
        })
    }

    const emitirResposta = () => {
        const proximaQuestao = questaoAtual + 1
        if(proximaQuestao < conteudo.length) {
            setQuestaoAtual(proximaQuestao)
        } else {
            $("#seletorsimulado").attr("class", "simulado d-flex vh-100 justify-content-center align-items-center d-none")
            $("#seletorfinal").attr("class", "simulado d-flex vh-100 justify-content-center align-items-center")
        }
    }

    const exibirResultados = () => {
        const codPergunta = []

        for(let i=0; i < conteudo.length; i++){
            codPergunta.push(conteudo[i].codPergunta)
        }

        clearInterval(timer);
        clearInterval(timerDec);

        Axios.post(configs.BASE_URL+'/prova/validarRespostas', {
            codPergunta: codPergunta,
            resposta: respostas,
            email: localStorage.getItem("user"),
            dificuldade: dificuldadeProva,
            tempo: minutos
        }).then((response) => {
            if(response){
                setPontuacao(response.data.pontuacao)
                setAcertos(response.data.acertos)
                setErros(response.data.erros)
            }
        })
        $("#seletorfinal").attr("class", "simulado d-flex vh-100 justify-content-center align-items-center d-none")
        $("#infosFinais").attr("class", "simulado d-flex vh-100 justify-content-center align-items-center ssp-5")
    }

    const fecharProva = () => {
        redirecionar("/provas")
    }

    //window.addEventListener('blur', function(){
    //    redirecionar("/problema")
    //});

  return (
      <>
          <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" size="xl">
              <Modal.Header closeButton>
                  <Modal.Title><img src={SVGWarning} alt="Ícone"/> Leia as regras antes de iniciar!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <span>
                  A identificação da utilização de meios ilícitos ou fraudulentos no momento da realização da prova digital acarretará em penalidades previstas no Regimento Geral da IES. Fique atento, caso confirmado a ação a sua prova será cancelada.
                    Fique atento ao tempo de duração da sua prova especificado no seu agendamento. Esse tempo é ininterrupto e a prova digital finalizará automaticamente ao fim desse prazo. Você pode acompanhar o tempo pelo cronômetro disponibilizado ao acessá-la.
                    Reserve um tempo adequado para realizar sua prova antes da Data e Hora Fim do seu agendamento.
                    Busque um ambiente calmo onde você não seja interrompido, isso te ajudará durante a realização.
                    Tenha sempre em mãos os seus dados de acesso para a prova digital.
                    Leia atentamente as instruções gerais e as instruções especificas para cada questão da prova. Tenha uma boa prova!
                    <br />
                    <br />
                      1. A identificação de meios ilicitos ou fraudulentos no momento da realização da prova acarretará em finalização e remoção de pontuação no ranking da plataforma.<br /><br />
                      2. Após o início você terá até 2 horas para realizar o simulado.<br /><br />
                      3. É proibido sair da tela durante o simulado, caso o faça terá o simulado zerado e finalizado.<br /><br />
                  </span>

              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={fecharProva}>
                      Cancelar Prova
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                      Concordo com as Regras
                  </Button>
              </Modal.Footer>
          </Modal>

        <div id="seletorsimulado" className="simulado d-flex vh-100 justify-content-center align-items-center d-none">
            <div className="container-total justify-content-center align-items-center d-flex flex-column">
                <div className="card-info col-sm-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={Prova} alt="Ícone"/><h3 id="texto-card-info">Questão {questaoAtual+1}/{conteudo ? conteudo.length : "Carregando.."}</h3>
                    </div> 
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h3 id="texto-card-info">{minutos<10 ? "0"+minutos : minutos}:{segundos<10 ? "0"+segundos : segundos}</h3>
                    </div> 
                </div>
                <div className="card-questao col-sm-3 d-flex flex-column">
                    <div className="div-questoes d-flex">
                        <p className="text-left" id="texto-questao">{conteudo ? conteudo[questaoAtual].pergunta : <Spinner animation="border" size="sm" />}</p>
                    </div>
                    <div className="div-opcoes d-flex flex-column">
                        <div className="d-flex">
                            <span className="questao-info d-flex align-items-center justify-content-center">A</span><button id="btnOpcao" value="a" onClick={() => {setRespostas([...respostas, "A"]); emitirResposta(); }}>{conteudo ? conteudo[questaoAtual].opcaoA : <Spinner animation="border" size="sm" />}</button>
                        </div>
                        <div className="d-flex">
                            <span className="questao-info d-flex align-items-center justify-content-center">B</span><button id="btnOpcao" value="b" onClick={() => {setRespostas([...respostas, "B"]); emitirResposta(); }}>{conteudo ? conteudo[questaoAtual].opcaoB : <Spinner animation="border" size="sm" />}</button>
                        </div>
                        <div className="d-flex">
                            <span className="questao-info d-flex align-items-center justify-content-center">C</span><button id="btnOpcao" value="c" onClick={() => {setRespostas([...respostas, "C"]); emitirResposta(); }}>{conteudo ? conteudo[questaoAtual].opcaoC : <Spinner animation="border" size="sm" />}</button>
                        </div>
                        <div className="d-flex">
                            <span className="questao-info d-flex align-items-center justify-content-center">D</span><button id="btnOpcao" value="d" onClick={() => {setRespostas([...respostas, "D"]); emitirResposta(); }}>{conteudo ? conteudo[questaoAtual].opcaoD : <Spinner animation="border" size="sm" />}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="seletorfinal" className="d-flex vh-100 justify-content-center align-items-center d-none">
            <div className="card-resultados d-flex flex-column align-items-center justify-content-center">
                <div className="resultados-titulo">
                    <h3 className="resultados-h3">Prova Finalizada</h3>
                </div>
                
                <h3><button onClick={exibirResultados} className="finalizar-prova">Ver Resultados</button></h3>
            </div>
        </div>

        <div id="infosFinais" className="simulado d-flex flex-column vh-100 justify-content-center align-items-center d-none p-5">
            <div className="card-resultados d-flex flex-column align-items-center justify-content-center">
                <div className="resultados-titulo">
                    <h3 className="resultados-h3">Simulado Finalizado</h3>
                </div>

                <div className="container-infos d-flex">
                    <div className="container-left d-none d-lg-flex flex-column align-items-center">
                        <Lottie className="d-flex"
                            loop
                            animationData={lottieJson}
                            play
                            style={{ width: 300, height: 300 }}
                        />
                    </div>
                    <div className="container-right d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex">
                            <div className="card-infos-simulado separator d-flex flex-column align-items-center">
                                <span className="texto-infos-acertos">{acertos}</span>
                                <span className="texto-infos">Acertos</span>
                            </div>
                            <div className="card-infos-simulado d-flex flex-column align-items-center">
                                <span className="texto-infos-erros">{erros}</span>
                                <span className="texto-infos">Erros</span>
                            </div>
                        </div>

                        <h3 className="resultados-exibir"><img src="./assets/SVG/Icons-Dashboard/Arrow-Up.svg" id="icon-dados" alt="Ícone"/>Pontuação Obtida {pontuação ? <b>{pontuação}</b> : <Spinner animation="border" size="sm" />}</h3>
                        <h3 className="resultados-exibir"><img src="./assets/SVG/Icons-Dashboard/Arrow-Down.svg" id="icon-dados" alt="Ícone"/>Você acertou {acertos ? <b>{acertos}</b> : <Spinner animation="border" size="sm" />}</h3>

                        <div className="d-flex">
                            <button className="resultados-voltar"><a href="/provas">Voltar para o Início</a></button>
                            <button className="resultados-dashboard"><a href="/dashboard">Acessar Dashboard</a></button>
                        </div>
                    </div>
                </div>
                
                
                
                <div>
                    
                </div>
                
            </div>
        </div>  
    </>
  )
}

export default Simulado