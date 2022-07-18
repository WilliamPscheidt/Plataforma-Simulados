import React from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Profile from '../../Components/Perfil/Profile'
import '../../Style/Perfil/Perfil.css'
import MobileMenu from "../../Components/MobileMenu/MobileMenu";

const Perfil = () => {

  return (
    <>
    
    <div className="perfil container-fluid">
        <MobileMenu />
        <div className="row">
            <Sidebar />
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-11 d-flex justify-content-center align-items-center">
              <div id="perfil-container">
                  <Profile />
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Perfil