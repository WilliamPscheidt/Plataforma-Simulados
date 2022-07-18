import React from 'react'
import SVGUP from '../../Assets/Images/up-2-svgrepo-com.svg'
import SVGFacebook from '../../Assets/Images/facebook-svgrepo-com.svg'
import SVGInstagram from '../../Assets/Images/instagram-svgrepo-com.svg'
import SVGTwitter from '../../Assets/Images/twitter-svgrepo-com.svg'

const Footer = () => {
  return (
    <>

      <div className='footer d-flex align-items-center'>
        <div className='container d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <h3 className='d-flex text-left d-sm-flex logo-titulo-footer'>Zyngo</h3>
            <img src={SVGFacebook} className="socials-footer" alt="Facebook"/>
            <img src={SVGInstagram} className="socials-footer" alt="Instagram"/>
            <img src={SVGTwitter} className="socials-footer" alt="Twitter"/>
          </div>
          <a href="#menu"><img src={SVGUP} className="imagem-footer d-flex align-items-center justify-content-center" alt="up"/></a>
        </div>
      </div>
    </>
  )
}

export default Footer