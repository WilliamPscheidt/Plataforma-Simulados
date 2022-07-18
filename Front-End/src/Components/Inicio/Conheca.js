import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '../../Assets/Animations/study.json'

import { useNavigate } from 'react-router-dom';


const Conheca = () => {
    const redirecionar = useNavigate();

    const Redirecionar = () => {
        redirecionar("/acesso")
    }

    return (
        <>
            <div className="card-sobre col-lg-12 col-xl-7">
                <div className='container-left p-5 d-flex flex-column justify-content-between'>
                    <div>
                        <h3 className='title-sobre'>Por que estudar conosco?</h3>
                    </div>
                    <div>
                        <p className='p-sobre'>Com a plataforma Zyngo você terá acesso a diversos simulados e provas, além de um sistema de ranking onde poderá disputar com diversas pessoas do Brasil e do Mundo a fim de definir o seu nível de conhecimento em comparação com os demais usuários.</p>
                    </div>
                    <div className='container-btn-left'>
                        <button className='btn-container' onClick={() => Redirecionar()}>Faça um Simulado</button>
                    </div>
                </div>
            </div>
            <div className="card-imagem col-xl-5 d-none d-xl-flex align-items-right justify-content-center">
                <Lottie className='lottie-sobre'
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 500, height: 400, float: 'right' }}
                />
            </div>
        </>
    )
}

export default Conheca