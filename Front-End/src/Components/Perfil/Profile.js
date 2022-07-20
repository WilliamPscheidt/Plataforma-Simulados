import React, { useState } from 'react'

import Axios from "axios"

import { Modal } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

import { useNavigate } from 'react-router-dom';

import configs from '../../Configurations/Configs.json'

import $ from "jquery"

const Profile = () => {

  const redirecionar = useNavigate();

  const nome = localStorage.getItem('nome');
  const sobrenome = localStorage.getItem('sobrenome');
  const email = localStorage.getItem('user');

  const [avatar, setAvatar] = useState();

  const [mostrarModal, setModal] = useState(false);

  const fecharModal = () => {
    setModal(false);
    setMensagemErro()
    setMensagemSucesso()
  }

  const abrirModal = () => {
    setModal(true);
    setMensagemErro()
    setMensagemSucesso()
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage] = useState("");

  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const modificarSenha = () => {
    const novaSenha = $("#novaSenhaInput").val();
    const novaSenha2 = $(".novasenha2").val();
    Axios.post(configs.BASE_URL+'/api/trocarSenha', {
      senha1: novaSenha,
      senha2: novaSenha2,
      email: localStorage.getItem("user"),
      urlAvatar: avatar
    }).then((response) => {
      if (response.data.sucesso) {
        localStorage.removeItem("token-admin")
        localStorage.removeItem("avatar")
        localStorage.removeItem("autorizacao_request")
        localStorage.removeItem("user")
        localStorage.removeItem("nome")
        localStorage.removeItem("autorizacao_requestAdmin")
        localStorage.removeItem("sobrenome")
        localStorage.removeItem("token")
        redirecionar("/acesso")
      } else {
        setErrorMessage(response.data.erro)
      }

    });
  }

  const desativarConta = () => {
    setMensagemErro()
    setMensagemSucesso()
    if ($("#inputdesativar").val() === "desativar") {
      Axios.post(configs.BASE_URL+'/admin/desativarConta', {
        email: localStorage.getItem("user")
      }).then((response) => {
        if (response.data.sucesso) {
          localStorage.removeItem("token-admin")
          localStorage.removeItem("avatar")
          localStorage.removeItem("autorizacao_request")
          localStorage.removeItem("user")
          localStorage.removeItem("nome")
          localStorage.removeItem("autorizacao_requestAdmin")
          localStorage.removeItem("sobrenome")
          localStorage.removeItem("token")
          redirecionar("/acesso")
        } else {
          setMensagemErro("Houve um erro")
        }
      });
    } else {
      setMensagemErro("Para desativar, digite 'desativar' no campo")
    }
  }

  const abrirAvatar = () => {
    $("#lista-avatar").attr("class", "d-flex")
    $(".avatar1").attr("class", "avatar1 d-none")
    $(".avatar2").attr("class", "avatar2 d-flex")
  }

  const fecharAvatar = () => {
    $("#lista-avatar").attr("class", "d-none")
    $(".avatar1").attr("class", "avatar1 d-flex")
    $(".avatar2").attr("class", "avatar2 d-none")
  }

  const alterarAvatar = (e) => {
    $(".avatar1").attr("src", e.target.src)
    $(".avatar2").attr("src", e.target.src)
    setAvatar(e.target.src)
  }

  return (
    <>
      <Modal show={mostrarModal} onHide={fecharModal} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Você tem certeza disso?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center">
          <span className='text-center'>Para desativar a sua conta digite "desativar" abaixo:</span>
          <input id="inputdesativar" className="input-esqueciminhasenha" type="text" />
          <button className="btn-esqueciminhasenha" onClick={desativarConta}>Desativar minha Conta</button>
          {mensagemErro && <Alert variant="danger" className="p-2 feedback"> {mensagemErro} </Alert>}
          {mensagemSucesso && <Alert variant="success" className="p-2 feedback"> {mensagemSucesso} </Alert>}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      <div id="provas-disponiveis" className="d-flex flex-column">
        <div className='d-flex align-items-center'>
          <img id="icon-titulo" src="./assets/SVG/profile2.svg" alt="Ícone" /><h3 id="titulo-perfil">Perfil</h3>
        </div>
        <div>
          {errorMessage && <Alert variant="danger" className="p-2 feedback"> {errorMessage} </Alert>}
          {successMessage && <Alert variant="success" className="p-2 feedback"> {successMessage} </Alert>}
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <div>
              <img id="avatar" className='avatar1' src={localStorage.getItem("avatar")} onClick={abrirAvatar} alt="Avatar" />
              <img id="avatar" className='avatar2 d-none' src={localStorage.getItem("avatar")} onClick={fecharAvatar} alt="Avatar" />
            </div>
            <div id="lista-avatar" className='d-none'>
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/2.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/3.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/4.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/5.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/7.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/8.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/9.jpg" alt="Avatar" />
              <img id="avatar" onClick={alterarAvatar} src="https://api2.bombeirosvoluntarios.top/avatar/10.jpg" alt="Avatar" />
            </div>
          </div>
        </div>
        <span id="span-input">Nome</span> <input value={nome} disabled />
        <span id="span-input">Sobrenome</span> <input value={sobrenome} disabled />
        <span id="span-input">E-mail</span> <input value={email} disabled />
        <span id="span-input">Digite a nova Senha</span> <input type="password" id="novaSenhaInput" placeholder='Digite a nova Senha' />
        <span id="span-input">Repita a nova Senha</span> <input type="password" id="novaSenhaInput" className='novasenha2' placeholder='Digite a nova Senha' />
        <div className='botoesacoes d-flex align-items-center justify-content-between'>
          <div>
            <button id="btnSalvar" onClick={modificarSenha}>Salvar Alterações</button>
          </div>
          <div className='d-flex flex-column'>
            <button id="btnDesativar" onClick={abrirModal}>Desativar Conta</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Profile