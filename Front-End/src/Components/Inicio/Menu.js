import React from 'react'

import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const redirecionar = useNavigate();

    const Redirecionar = () => {
        redirecionar("/acesso")
    }

    return (
        <>
            <div>
                <h3 className='d-flex text-left d-sm-flex logo-titulo'>Zyngo</h3>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <ul className="itens-menu d-flex d-none d-sm-flex">
                    <li><a href="#cards" className='itens-menu'>Vantagens</a></li>
                    <li><a href="#conheca" className='itens-menu'>Conheça</a></li>
                    <li><a href="#contato" className='itens-menu'>Contato</a></li>
                </ul>
                <button className='btn-nav d-sm-block' onClick={() => Redirecionar()}><a href="/acesso" id="link-acesso">Acessar minha Conta</a></button>
            </div>
        </>
    )
}

export default Menu