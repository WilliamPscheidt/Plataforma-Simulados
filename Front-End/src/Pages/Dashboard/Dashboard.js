import React, { useEffect, useState } from "react";
import CardsDash from "../../Components/Dashboard/CardsDash";
import Sidebar from "../../Components/Dashboard/Sidebar";
import '../../Style/Sidebar/Sidebar.css'
import '../../Style/Master-Dash/Master-Dash.css'
import DashboardStatsTop from "../../Components/Dashboard/DashboardStatsTop";
import DashboardStatsBottom from "../../Components/Dashboard/DashboardStatsBottom";

import MobileMenu from "../../Components/MobileMenu/MobileMenu";

import Axios from "axios";

const Dashboard = () => {

    const [pontuacao, setPontuacao] = useState(0);
    const [posicao, setPosicao] = useState(0);

    useEffect(() => {
        Axios.post('https://api.zyngo.com.br/dashboard/cardsDash', {
            email: localStorage.getItem("user")
        }).then((response) => {
            if(response.data.pontuacao && response.data.posicao) {
                setPontuacao(response.data.pontuacao)
                setPosicao(response.data.posicao)
            } else {
                console.log("Houve um erro")
            }
        });
    }, [])

    return (
        <>
        <div className="dashboard-container container-fluid d-flex">
            <Sidebar />

            <main className="content-container d-flex flex-column justify-content-center">
                <MobileMenu />
                <div className="row d-flex">
                    
                    <div className="container-cards d-flex justify-content-center">
                        <CardsDash 
                            titulo="Pontuação Obtida"
                            texto={pontuacao ? pontuacao :            
                                "--"
                            }
                            icone="./assets/SVG/Icons-Dashboard/Icone-Card-Top-1.svg"
                            iconeArrow="./assets/SVG/Icons-Dashboard/Arrow-Up.svg"
                        />
                        <CardsDash 
                            titulo="Posição no Ranking"
                            texto={posicao ? posicao : 
                                "--"
                            }
                            icone="./assets/SVG/Icons-Dashboard/Icone-Card-Top-2.svg"
                            iconeArrow="./assets/SVG/Icons-Dashboard/Arrow-Down.svg"
                        />
                    </div>
                </div>
                <div className="wrap-container d-flex justify-content-center">
                    <DashboardStatsTop />
                </div>
                <div className="wrap-container d-flex justify-content-center">
                    <DashboardStatsBottom />
                </div>
            </main>
        </div>
        </>
    )
}

export default Dashboard