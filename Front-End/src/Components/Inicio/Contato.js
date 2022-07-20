import React, { useState } from 'react'

import { Modal } from 'react-bootstrap';

import Axios from "axios"

import $ from 'jquery'

import Alert from 'react-bootstrap/Alert'

import Lottie from 'react-lottie-player'
import lottieJson from '../../Assets/Animations/enviado.json'

import configs from '../../Configurations/Configs.json'

const Contato = () => {
  const [mostrarContato, setContato] = useState(false);

  const fecharModalContato = () => {
    setMensagemErro()
    setExibirAnimacao(false)
    setContato(false);
  }

  const abrirModalContato = () => {
    setMensagemErro()
    setExibirAnimacao(false)
    setContato(true);
  }

  const [mensagemErro, setMensagemErro] = useState("");
  const [exibirAnimacao, setExibirAnimacao] = useState(false)

  const EnviarContato = () => {
    setMensagemErro()
    setExibirAnimacao(false)

    Axios.post(configs.BASE_URL+'/mailer/contato', {
      email: $('.input-contatoA').val(),
      conteudo: $('.input-contato').val()
    }).then((response) => {
      if (response.data.sucesso) {
        setMensagemErro()
        setExibirAnimacao(true)
      }

      if (response.data.erro) {
        setExibirAnimacao(false)
        setMensagemErro(response.data.erro)
      }
    })
  }

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h3 className='contato-text text-center'>Está com uma dúvida ou problema?</h3>
        <button className='btn-contato' onClick={abrirModalContato}>Entre em contato Conosco</button>
      </div>

      <Modal show={mostrarContato} onHide={fecharModalContato} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center">
          {exibirAnimacao === true
            ?
            <div className='d-flex flex-column align-items-center'>
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 300, height: 300 }}
              />
              <Alert variant="success" className="p-2"> Enviado com Sucesso! </Alert>
            </div>
            :
            console.log("Aguardando..")
          }
          {mensagemErro && <Alert variant="danger" className="p-2 feedback"> {mensagemErro} </Alert>}


          Digite o seu E-mail
          <input className="input-contatoA" type="text" />
          O que você quer nos dizer?
          <div class="input-group">
            <textarea class="input-contato form-control" aria-label="With textarea"></textarea>
          </div>
          <button className="btn-contato-bottom" onClick={EnviarContato}>Enviar Mensagem</button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Contato