import React from 'react'
import '../../Style/MobileMenu/MobileMenu.css'
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'

const MobileMenu = () => {

    const redirecionar = useNavigate();

    const Deslogar = () => {
        localStorage.removeItem("autorizacao_request")
        localStorage.removeItem("nome")
        localStorage.removeItem("sobrenome")
        localStorage.removeItem("avatar")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        redirecionar("/acesso")
    }

    const AbrirMenu = () => {
        $(".menu-expand").attr('class', 'menu-expand d-flex');
        $("#abrirmenu2").attr('class', 'd-block');
    }

    const FecharMenu = () => {
        $(".menu-expand").attr('class', 'menu-expand d-none');
        $("#abrirmenu").attr('class', 'd-block');
        $("#abrirmenu2").attr('class', 'd-none');
    }

    return (
        <div className='mobile-menu d-sm-block d-xl-none'>
            <div className='menu'>
                <img id="abrirmenu" className="d-block" src="./assets/SVG/menu.svg" onClick={AbrirMenu} alt="Abrir Menu" />
            </div>

            <div className='menu2'>
                <img id="abrirmenu2" className="d-none" src="./assets/SVG/fechar-menu.svg" onClick={FecharMenu} alt="Fechar Menu" />
            </div>

            <div className='menu-expand d-none'>
                <div className='d-flex flex-column align-items-left justify-content-center'>
                    <a href="/provas" id="texto-menu"><img id="icon" src="./assets/SVG/home.svg" alt="Home" /><span>Home</span></a>
                    <a href="/perfil" id="texto-menu"><img id="icon" src="./assets/SVG/profile.svg" alt="Perfil" /><span>Perfil</span></a>
                    <a href="/dashboard" id="texto-menu"><img id="icon" src="./assets/SVG/dashboard.svg" alt="Dashboard" /><span>Dashboard</span></a>
                    <span onClick={Deslogar} id="texto-menu"><img id="icon" className='deslogar' src="./assets/SVG/logout.svg" alt="Deslogar" /><span>Deslogar</span></span>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu