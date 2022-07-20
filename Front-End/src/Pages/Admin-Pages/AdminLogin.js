import React, {useState} from "react";

import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import '../../Style/Admin/Admin-Login.css'

import configs from '../../Configurations/Configs.json'

import Lottie from 'react-lottie-player'
import bgSimulado from '../../Assets/Animations/84669-background-animation (2).json'

import Voltar from "../../Components/Voltar/Voltar";

const AdminLogin = () => {

  const [errorMessage, setErrorMessage] = React.useState("");
  const [body, setBody] = useState({ email: '', senha: '' })
  const redirecionar = useNavigate();

  const inputChangeLogin = ({ target }) => {
    const { name, value } = target
    setBody({
      ...body,
      [name]: value
    })
  }

  const onClickLogar = () => {

    if (!isNaN(body.email) || !isNaN(body.senha)) {
      setErrorMessage("Erro: Digite em todos os campos")
      return
    }

    Axios.post(configs.BASE_URL+'/api/validarAdmin', {
      email: body.email,
      senha: body.senha,
    }).then((response) => {

      if (response.data.erro) {
        setErrorMessage("Erro: " + response.data.erro)
      }

      if (response.data.sucesso) {
        localStorage.setItem('autorizacao_requestAdmin', "autorizado")
        localStorage.setItem('user', body.email)
        localStorage.setItem('token-admin', response.data.token)
        redirecionar("/admin/simulados/")
      }
    });
  }

  return (
    <>
      <Voltar />
      <div className="bg-login-admin">
        <Lottie className="bg-login-top"
          loop
          animationData={bgSimulado}
          play
        />
      </div>
      <div id="admin-page" className="admin-login container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="card-admin d-flex flex-column justify-content-center">
          <span id="titulo-admin" className="text-right">Administração</span>
          {errorMessage && <Alert variant="danger" className="p-2 feedback-admin"> {errorMessage} </Alert>}
          <input id="input-admin" placeholder="Digite o seu e-mail" name="email" value={body.email} onChange={inputChangeLogin} />
          <input id="input-admin" type="password" placeholder="Senha" name="senha" value={body.senha} onChange={inputChangeLogin} />
          <button id="btnLogin" onClick={onClickLogar}>Login</button>
        </div>
      </div>
    </>
  )
}

export default AdminLogin