import React from "react";

const CardsDash = (props) => {

    return (
        <div id="card-top" className="col-sm-4 p-4 d-flex flex-column card1 align-items-center justify-content-center">
            <div className="d-flex">
                <img src={props.icone} alt="Ícone" />
                <h1 id="titulo">{props.titulo}</h1>
            </div>

            <div className="d-flex align-items-center">
                <img src={props.iconeArrow} alt="Ícone" />
                <span id="textoCard">{props.texto}</span>
            </div>
        </div>
    )
}

export default CardsDash