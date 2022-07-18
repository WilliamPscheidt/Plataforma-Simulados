import { Outlet, useNavigate } from "react-router-dom";
import Axios from 'axios'
import { useEffect, useState } from "react";

const ProtectedRoutesAdmin = () => {


  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  // Proteção desativada por questões de demonstração, caso queira ativar novamente deve remover os comentários.
  //
  //const [autenticadoAdmin, setAutenticadoAdmin] = useState(false);

  //const redirecionar = useNavigate();

  //useEffect(() => {
  //  Axios.post('https://api.zyngo.com.br/api/validarTokenAdmin', {
  //    token: localStorage.getItem('token-admin'),
  //  }).then((response) => {
  //    if (response.data.erro) {
  //      redirecionar("/admin/login")
  //      setAutenticadoAdmin(false)
  //    }
  //
  //   if (response.data.suceso) {
  //     setAutenticadoAdmin(true)
  //  }
  //  })
  //}, [autenticadoAdmin])

  //if(autenticadoAdmin == true) {
  //  return <Outlet />
  //}

  return <Outlet /> // Remova essa linha caso ative a proteção!

};

export default ProtectedRoutesAdmin;