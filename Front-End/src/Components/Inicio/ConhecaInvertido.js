import React from 'react'

import Lottie from 'react-lottie-player'

import Animacao from '../../Assets/Animations/43414-student.json'

import { useNavigate } from 'react-router-dom';

const ConhecaInvertido = () => {
    const redirecionar = useNavigate();

    const Redirecionar = () => {
        redirecionar("/acesso")
    }

    return (
        <>
            <div className="card-imagem col-xl-5 d-none d-xl-flex align-items-right justify-content-center">
                <Lottie
                    loop
                    animationData={Animacao}
                    play
                    style={{ width: 500, height: 400, float: 'right' }}
                />
            </div>
            <div className="card-sobre col-lg-12 col-xl-7 d-flex justify-content-right">
                <div className='container-left p-5 d-flex flex-column justify-content-between'>
                    <div>
                        <h3 className='title-sobre'>Quem somos Nós?</h3>
                    </div>
                    <div>
                        <span className='p-sobre'>O objetivo geral desta plataforma é de lhe auxiliar nos estudos para se tornar bombeiro voluntário. Para um melhor preparo antes de passar pelo processo seletivo, vamos disponibilizar uma plataforma de treinamento com acesso a simulados contendo questões voltadas a área e provas anteriores.</span>
                    </div>
                    <div className='container-btn-left'>
                        <button className='btn-container' onClick={() => Redirecionar()}>Faça um Simulado</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ConhecaInvertido