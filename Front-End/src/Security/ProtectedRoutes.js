import { Outlet, useNavigate } from "react-router-dom";
import Axios from 'axios'
import { useEffect, useState } from "react";

const ProtectedRoutes = () => {

  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  //
  //const [autenticado, setAutenticado] = useState(false);

  //const redirecionar = useNavigate();

  //useEffect(() => {
  //  Axios.post('https://api.zyngo.com.br/api/validarToken', {
  //    token: localStorage.getItem('token'),
  //  }).then((response) => {
  //    if (response.data.erro) {
  //      redirecionar("/acesso")
  //    }
  //
  //    if (response.data.suceso) {
  //      setAutenticado(true)
  //    }
  //  })
  //}, [autenticado])
  //
  //if(autenticado === true && localStorage.getItem('user')) {
  //  return <Outlet />
  //}

  return <Outlet /> // Remova essa linha caso ative a proteção!

};

export default ProtectedRoutes;