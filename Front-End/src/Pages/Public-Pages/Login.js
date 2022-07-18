import React from "react";
import '../../Style/Acesso/Style-Login.css'

import Banner from '../../Components/Acesso/Banner'
import Card from "../../Components/Acesso/Card";

const Login = () => {
    return (
        <>
            <div className="login-page" id="bgColor">
                <div className="row" id="bgColor">
                    <Banner />
                    <div id="login" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 100-vh d-flex flex-column justify-content-center align-items-center">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login