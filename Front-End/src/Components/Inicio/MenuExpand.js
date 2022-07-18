import React from 'react'

import Lottie from 'react-lottie-player'
import lottieJson from '../../Assets/Animations/99728-online-learning.json'

import { useNavigate } from 'react-router-dom';

const MenuExpand = () => {

    const redirecionar = useNavigate();

    const Redirecionar = () => {
        redirecionar("/acesso")
    }

    return (
        <>
            <div className='gradient-top'></div>
            <div className="sobrea d-flex flex-column align-items-center justify-content-center d-md-none d-sm-flex col-sm-12">
                <Lottie className='lottie-menu'
                    loop
                    animationData={lottieJson}
                    play
                />
            </div>
            <div className="sobrea d-flex flex-column d-sm-flex d-md-none col-sm-12 align-items-center">
                <span className='texto-menu2 text-center d-sm-block'>
                    <span className='slogan text-left'>Aprenda e</span><br />
                    <span className='slogan2 text-left'>Conquiste o Mundo!</span><br />
                    <span className='texto'>A nossa plataforma irá lhe dar a máxima <br /> assistência para que você consiga se <br /> tornar um Bombeiro Voluntário <br /></span>
                </span>

                <button className='btn-simulado d-none d-sm-block' onClick={() => Redirecionar()}>Fazer um Simulado</button>
            </div>
            <div className="sobrea d-flex flex-column d-none d-md-flex col-md-6 ">
                <span className='texto-menu2 text-left'>
                    <span className='slogan text-left'>Aprenda e</span><br />
                    <span className='slogan2 text-left'>Conquiste o Mundo!</span><br />
                    <span className='texto'>A nossa plataforma irá lhe dar a máxima <br /> assistência para que você consiga se <br /> tornar um Bombeiro Voluntário <br /></span>
                </span>
                <button className='btn-simulado' onClick={() => Redirecionar()}>Fazer um Simulado</button>

                <div className='d-flex align-items-left justify-content-left '>
                    <button className='btn-simulado d-block d-sm-none' onClick={() => Redirecionar()}><a href="/provas" id="link-simulado">Fazer um Simulado</a></button>
                </div>
            </div>
            <div className="sobrea d-flex flex-column align-items-center justify-content-center d-none d-md-flex col-md-6 ">
                <Lottie className='lottie-menu d-none d-md-flex col-md-6'
                    loop
                    animationData={lottieJson}
                    play
                />
            </div>
        </>
    )
}

export default MenuExpand