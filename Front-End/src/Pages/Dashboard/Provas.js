import React, { useState } from "react";
import Sidebar from '../../Components/Dashboard/Sidebar'
import ProvasDisponiveis from '../../Components/Provas/ProvasDisponiveis'
import Ranking from '../../Components/Provas/Ranking'
import '../../Style/Provas/Provas-style.css'

import MobileMenu from "../../Components/MobileMenu/MobileMenu";

import { Modal, Button } from 'react-bootstrap';

const Provas = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} className="modal_">
                <Modal.Header closeButton>
                    <Modal.Title><img src="./assets/SVG/firefighter.svg" alt="Ícone Bombeiro" /> Olá, seja muito bem vindo!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>
                        Em nossa plataforma você poderá se preparar para seus próximos passos no ingresso aos Bombeiros!<br /> <br />
                        Para que você faça o seu primeiro Simulado basta clicar sob o botão "Vamos lá!" e logo após clicar em um dos níveis de simulados disponíveis. <br /><br />
                        Para acessar o seu progresso você pode clicar <a href="/dashboard">neste link</a> ou então clicar no ícone <img src="./assets/SVG/dashboard2.svg" alt="Ícone Dashboard" /> no menu.
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Vamos lá!
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="prova-bg container-fluid provas">
                <div className="row">
                    <Sidebar />
                    <MobileMenu />
                    <div className='provas-container d-flex justify-content-center'>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 d-flex flex-column align-items-center">
                            <ProvasDisponiveis dificuldadeBackend="facil" dificuldade="Fácil" titulo1="Prova" titulo2="Prova B" titulo3="Prova C" icone="./assets/SVG/provafacil.svg" />
                            <ProvasDisponiveis dificuldadeBackend="moderado" dificuldade="Moderado" titulo1="Prova" titulo2="Prova B" titulo3="Prova C" icone="./assets/SVG/provamoderada.svg" />
                            <ProvasDisponiveis dificuldadeBackend="dificil" dificuldade="Difícil" titulo1="Prova" titulo2="Prova B" titulo3="Prova C" icone="./assets/SVG/provadificil.svg" />
                        </div>
                        <div className="col-3 d-none d-xl-flex flex-column">
                            <Ranking
                                ranking1="William Pscheidt"
                                ranking2="João Silva"
                                ranking3="Gabriel do Mato"
                                ranking4="Rafael Almeida"
                                ranking5="Leonardo Pacheco"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Provas