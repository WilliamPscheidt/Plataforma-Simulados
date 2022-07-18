import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div className="wrap-card d-flex align-items-center justify-content-center">
                <div className='div-card'>
                    <div className='internal-container-card d-flex flex-column align-items-center p-5'>
                        <div className='d-flex align-items-center'><h3 className='card-titulo'>{props.titulo}</h3></div>
                        <div className='card-titulo d-flex align-items-center'><img src={props.icone} className="icone-card" alt="Ícone" /></div>
                        <div className='align-items-center'><p className="text-center card-texto ">{props.texto}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards