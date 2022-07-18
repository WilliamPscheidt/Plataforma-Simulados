import React from 'react'

import SVGVoltar from '../../Assets/Images/back-svgrepo-com.svg'

const Voltar = () => {
  return (
    <a href='/'><img src={SVGVoltar} style={{ position: "absolute", top: 30, left: 30, width: "30px", fill: "#00D8B6" }} alt="Voltar"/></a>
  )
}

export default Voltar