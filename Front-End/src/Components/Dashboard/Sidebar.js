import React from "react";
import { useNavigate } from 'react-router-dom';

import SVGAbrirMenu from '../../Assets/Images/abrirmenu.svg'
import SVGFecharMenu from '../../Assets/Images/fecharmenu.svg'

import $ from 'jquery'

const Sidebar = () => {

    const redirecionar = useNavigate();

    const Deslogar = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("autorizacao_request")
        localStorage.removeItem("nome")
        localStorage.removeItem("sobrenome")
        localStorage.removeItem("avatar")
        localStorage.removeItem("token")
        redirecionar("/acesso")
    }

    const AbrirMenu = () => {
        $("#sidebar-menu").css("width", "170px")
        $(".abrir-menu").attr("class", "abrir-menu d-none")
        $(".fechar-menu").attr("class", "fechar-menu d-flex")
        $(".abrir-texto").attr("class", "abrir-texto d-flex")
        $(".abrir-texto-logout").attr("class", "abrir-texto-logout d-flex")
        $(".abrir-texto-nome").attr("class", "abrir-texto-nome d-flex")
        $(".abrir-texto-fechar").attr("class", "abrir-texto-fechar d-flex")
    }

    const FecharMenu = () => {
        $("#sidebar-menu").css("width", "70px")
        $(".abrir-texto").attr("class", "abrir-texto d-none")
        $(".abrir-texto-fechar").attr("class", "abrir-texto-fechar d-none")
        $(".abrir-texto-logout").attr("class", "abrir-texto-logout d-none")
        $(".abrir-texto-nome").attr("class", "abrir-texto-nome d-none")
        $(".abrir-menu").attr("class", "abrir-menu d-flex")
        $(".fechar-menu").attr("class", "fechar-menu d-none")
    }

    return (
        <div id="sidebar" className="vh-100 d-none d-xl-flex">
            <div id="sidebar-menu">

                <div className="d-flex flex-column justify-content-between h-100">
                    <ul id="menu-sidebar" className="list-group">
                        <div id="option" className="abrir-menu">
                            <span className="d-flex"><img src={SVGAbrirMenu} id="icon" onClick={AbrirMenu} alt="Abrir Menu" title="Abrir Menu" /><span className="d-none" onClick={AbrirMenu} title="Abrir">Abrir</span></span>
                        </div>
                        <div id="option" className="fechar-menu d-none">
                            <span className="d-flex"><img src={SVGFecharMenu} id="icon" onClick={FecharMenu} alt="Fechar Menu" title="Fechar Menu" /><span className="abrir-texto-fechar d-none" onClick={FecharMenu} title="Fechar">Fechar</span></span>
                        </div>
                        <div id="optionseparator" className="separator" />
                        <li id="option">
                            <a href="/provas" className="d-flex"><img id="icon" src="./assets/SVG/home.svg" alt="Provas" title="Provas" /><span className="abrir-texto d-none" title="Provas">Início</span></a>
                        </li>
                        <li id="option">
                            <a href="/dashboard" className="d-flex"><img id="icon" src="./assets/SVG/dashboard.svg" alt="Dashboard" title="Dashboard" /><span className="abrir-texto d-none" title="Dashboard">Dashboard</span></a>
                        </li>
                        <li id="option">
                            <a href="/perfil" className="d-flex"><img id="icon" src="./assets/SVG/profile.svg" alt="Perfil" title="Perfil" /><span className="abrir-texto d-none" title="Perfil">Perfil</span></a>
                        </li>
                    </ul>
                    <ul className="list-group">
                        <li className="d-flex align-items-center">
                            <span onClick={Deslogar} className="d-flex"><img className="icon-bottom" src="./assets/SVG/logout.svg" alt="Deslogar" title="Deslogar" /><span className="abrir-texto-logout d-none" title="Deslogar">Deslogar</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar