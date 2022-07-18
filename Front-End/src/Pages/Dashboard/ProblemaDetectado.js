import React from 'react'

import '../../Style/Simulado/Problema.css'

const ProblemaDetectado = () => {
  return (
    <>
      <div className='problema-detectado vh-100 d-flex align-items-center justify-content-center'>
        <div className="card-resultados d-flex flex-column align-items-center justify-content-center">
          <div className="resultados-titulo">
            <h3 className="resultados-h3">Prova Cancelada</h3>
          </div>

          <h3 className='resultados-exibir text-center'>Detectamos inconsistências na sua prova, a prova será cancelada devido a quebra das Regras de Uso</h3>

          <div>
            <button className="resultados-voltar"><a href="/provas" id="link">Voltar para o Início</a></button>
            <button className="resultados-dashboard"><a href="/dashboard" id="link">Acessar Dashboard</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemaDetectado