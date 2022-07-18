import React from "react";
import '../../Style/404/404.css'

import Lottie from 'react-lottie-player'
import lottieJson from '../../Assets/Animations/notfound.json'

const Erro = () => {
    return (
        <div className="NotFound d-flex vh-100 justify-content-center align-items-center">
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 500, height: 500 }}
            />
            <div className="d-flex flex-column">
                <h1 className="texto">Hey, não encontramos essa página =(</h1>
                <h1 className="texto"><a href="/" className="link-inicio">Clique aqui para Voltar!</a></h1>
            </div>
        </div>
    )
}

export default Erro