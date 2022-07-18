import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const Ranking = (props) => {

    const [provas, setProvas] = useState(0);
    const [ranking, setRanking] = useState([]);
    const [posicao, setPosicao] = useState(0);

    useEffect(() => {
        Axios.post('https://api.zyngo.com.br/dashboard/homeDashboard', {
            email: localStorage.getItem('user'),
        }).then((response) => {
            setRanking(response.data.ranking)
            setProvas(response.data.provas)
            setPosicao(response.data.posicao)
        })
    }, [])

    return (
        <>
            <div id="ranking" className='d-flex flex-column'>
                <div id="ranking-div" className="d-flex">
                    <h3 id="titulo-ranking">Melhores da Semana</h3>
                </div>

                {
                    ranking.length > 0
                        ?
                        <ul id="ranking-pessoas" className='d-flex flex-column justify-content-center'>
                            <li id="rank"><span id="top1">Top 1</span><img id="avatar-ranking" src={ranking[0].urlAvatar} alt="Avatar" /><span id="texto-ranking">{ranking[0].nomeCompleto}</span></li>
                            <li id="rank"><span id="top2">Top 2</span><img id="avatar-ranking" src={ranking[1].urlAvatar} alt="Avatar" /><span id="texto-ranking">{ranking[1].nomeCompleto}</span></li>
                            <li id="rank"><span id="top3">Top 3</span><img id="avatar-ranking" src={ranking[2].urlAvatar} alt="Avatar" /><span id="texto-ranking">{ranking[2].nomeCompleto}</span></li>
                            <li id="rank"><span id="toplow">Top 4</span><img id="avatar-ranking" src={ranking[3].urlAvatar} alt="Avatar" /><span id="texto-ranking">{ranking[3].nomeCompleto}</span></li>
                            <li id="rank"><span id="toplow">Top 5</span><img id="avatar-ranking" src={ranking[4].urlAvatar} alt="Avatar" /><span id="texto-ranking">{ranking[4].nomeCompleto}</span></li>
                        </ul>
                        :
                        "Carregando"
                }


            </div>

            <div id="provas-realizadas" className='d-flex flex-column'>
                <div id="ranking-div" className="d-flex">
                    <h3 id="titulo-ranking">Seus Dados</h3>
                </div>
                <div className='container-dados d-flex flex-column'>
                    <span className='provas-realizadas-texto d-flex'><img src="./assets/SVG/Icons-Dashboard/Arrow-Up.svg" id="icon-dados" alt="Provas Realizadas" />Provas Realizadas: {provas > 0 ? provas : 0}</span>
                    <span className='provas-realizadas-texto d-flex'><img src="./assets/SVG/Icons-Dashboard/Arrow-Down.svg" id="icon-dados" alt="Pontuação" />Posiçao no Ranking: {posicao > 0 ? posicao : 0}</span>
                </div>
            </div>
        </>
    )
}

export default Ranking