import React from "react";
import "../../Style/Admin/SidebarAdmin.css"
import { useNavigate } from 'react-router-dom';

import SVGGerenciar from "../../Assets/Images/editar.svg"
import SVGAdd from "../../Assets/Images/add.svg"
import SVGUser from "../../Assets/Images/user.svg"

const AdminSidebar = () => {

    const redirecionar = useNavigate();

    const Deslogar = () => {
        localStorage.removeItem("token-admin")
        localStorage.removeItem("autorizacao_requestAdmin")
        localStorage.removeItem("token")
        localStorage.removeItem("autorizacao_request")
        localStorage.removeItem("user")
        redirecionar("/admin/login")
    }
    return (
        <div id="sidebaradmin" className="vh-100 d-none d-xl-flex">
            <div id="sidebar-menu">
                <ul className="d-flex">
                    <span id="textoMenu" className="d-none">Fechar Menu</span>
                </ul>
                <div className="d-flex justify-content-center h-100">
                    <ul id="menu-sidebar" className="list-group">
                        <li id="option">
                            <a href="/admin/adicionarperguntas/"><img id="icon" src={SVGAdd} alt="Acessao Adição Perguntas" /></a>
                        </li>
                        <li id="option">
                            <a href="/admin/simulados/" ><img id="icon" src={SVGGerenciar} alt="Acessar Simualdos" /></a>
                        </li>
                        <li id="option">
                            <a href="/admin/gerenciarusuarios/"><img id="icon" src={SVGUser} alt="Acessar Gerenciamento de Usuário" /></a>
                        </li>
                        <li id="option">
                            <span onClick={Deslogar}><img id="icon" src="../../assets/SVG/logout.svg" alt="Deslogar" /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar