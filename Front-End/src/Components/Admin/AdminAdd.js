import React, { useEffect, useState } from 'react'

import Alert from 'react-bootstrap/Alert'

import Axios from 'axios';

import $ from 'jquery'

import SVGFiltro from '../../Assets/Images/filter-svgrepo-com.svg'
import SVGFechar from '../../Assets/Images/x-svgrepo-com.svg'

const AdminAdd = () => {

  const [usuarios, setListaUsuarios] = useState([])
  const [feedback, setFeedback] = useState()
  const [tipoFeedback, setTipoFeedback] = useState()
  const [exibirFiltro, setExibirFiltro] = useState(true);

  const AtualizarDados = () => {
    Axios.get('https://api.zyngo.com.br/admin/listarPessoas')
      .then((response) => {
        setListaUsuarios(response.data.result)
      });
  }

  useEffect(() => {
    AtualizarDados()
  }, [])

  const adicionarAdministrador = (email) => {
    setFeedback()
    setTipoFeedback()

    Axios.post('https://api.zyngo.com.br/admin/cadastrarAdmin', {
      email: email,
      admEmail: localStorage.getItem('user')
    }).then((response) => {
      if (response.data.sucesso) {
        setFeedback("Você adicionou " + email + " como administrador")
        setTipoFeedback("success")
        atualizarDados()
      } else {
        setFeedback("Você não tem permissão para essa ação!")
        setTipoFeedback("danger")
      }

    })
  }

  const removerAdministrador = (email) => {
    setFeedback()
    setTipoFeedback()

    Axios.post('https://api.zyngo.com.br/admin/removerAdmin', {
      email: email,
      admEmail: localStorage.getItem('user')
    }).then((response) => {
      if (response.data.sucesso) {
        setFeedback("Você removeu o acesso administrativo de " + email)
        setTipoFeedback("success")
        atualizarDados()
      } else {
        setFeedback("Você não tem permissão para essa ação!")
        setTipoFeedback("danger")
      }
    })
  }

  const inativarConta = (email) => {
    setFeedback()
    setTipoFeedback()

    Axios.post('https://api.zyngo.com.br/admin/desativarConta', {
      email: email
    }).then((response) => {
      if (response.data.sucesso) {
        setFeedback("O usuário " + email + " foi inativado com sucesso")
        setTipoFeedback("success")
        atualizarDados()
      } else {
        setFeedback(response.data.erro)
        setTipoFeedback("danger")
      }
    })
  }

  const filtrarAdministradores = () => {
    Axios.get('https://api.zyngo.com.br/admin/listarPessoas')
      .then((response) => {
        const dadosMapeados = [];

        const dadosFiltrados = response.data.result.filter(FiltrarAdministradores)
        dadosFiltrados.forEach(filtrar => {
          dadosMapeados.push(filtrar)
        })

        function FiltrarAdministradores(value) {
          if (value.admin === 1)
            return value
        }

        setListaUsuarios(dadosMapeados)
      });
  }

  const filtrarInativos = () => {
    Axios.get('https://api.zyngo.com.br/admin/listarPessoas')
      .then((response) => {
        const dadosMapeados2 = [];

        const dadosFiltrados = response.data.result.filter(FiltrarAdministradores)
        dadosFiltrados.forEach(filtrar => {
          dadosMapeados2.push(filtrar)
        })

        function FiltrarAdministradores(value) {
          if (value.inativo === 1)
            return value
        }

        setListaUsuarios(dadosMapeados2)
      })

  }

  const reativarConta = (email) => {
    setFeedback()
    setTipoFeedback()

    Axios.post('https://api.zyngo.com.br/admin/reativarUsuario', {
      email: email
    }).then((response) => {
      if (response.data.sucesso) {
        setFeedback("O usuário " + email + " foi reativado")
        setTipoFeedback("success")
        atualizarDados()
      } else {
        setFeedback(response.data.erro)
        setTipoFeedback("danger")
      }
    })
  }

  const atualizarDados = () => {
    Axios.get('https://api.zyngo.com.br/admin/listarPessoas')
      .then((response) => {
        setListaUsuarios(response.data.result)
      });
  }

  const ExibirFiltros = () => {
    if (exibirFiltro === true) {
      $('.filtros').attr("class", "filtros d-flex")
      setExibirFiltro(false)
    } else {
      setExibirFiltro(true)
      $('.filtros').attr("class", "filtros d-none")
    }
  }

  const FecharAlerta = () => {
    setFeedback()
    setTipoFeedback()
  }

  return (
    <div class="gerenciar-usuarios col-12 col-md-12 p-3 d-flex flex-column vh-100">
      <div class="card-admin p-5">
        <h3 id="titulo-pagina">Gerenciar Usuários</h3>

        <div className='d-flex justify-content-between'>
          <div></div>
          <div>
            <button className='btn-filtro d-flex align-items-center justify-content-center' onClick={ExibirFiltros}>Filtrar<img src={SVGFiltro} alt="ExibirFiltros"/> </button>
            <div className='filtros d-none'>
              <button className="btnFiltro" onClick={() => filtrarAdministradores()}>Filtrar Administradores</button>
              <button className="btnFiltro" onClick={() => filtrarInativos()}>Filtrar Inativos</button>
              <button className="btnFiltro" onClick={() => atualizarDados()}>Remover Filtros</button>
            </div>
          </div>
        </div>

        <div className='lista_usuarios'>
          {feedback && <Alert variant={tipoFeedback} className="p-2 feedback">{feedback}<img src={SVGFechar} className='btnFecharAlert' onClick={FecharAlerta} alt="Fechar Alerta"/></Alert>}
          <div className="table-responsive">


            <table className="table table-sm table-striped table-hover">
              <tbody className="tabela-dados">
                {usuarios.length > 0
                  ?
                  usuarios.map((item, i) => {
                    return [
                      <tr key={i}>
                        <td>{item.admin === 1 ? <span className='admin-tag'>Staff</span> : <></>}{item.inativo === 1 ? <span className='admin-inativo'>Inativo</span> : <></>}{item.email}</td>
                        <td className='acoesAdministrador'>
                          {
                            item.admin === 0
                              ?
                              <button className='btn-acao' onClick={() => adicionarAdministrador(item.email)}>Adicionar Admin</button>
                              :
                              <button className='btn-acao-2' onClick={() => removerAdministrador(item.email)}>Remover Admin</button>}

                          {
                            item.inativo === 0
                              ?
                              <button className='btn-acao' onClick={() => inativarConta(item.email)}>Inativar</button>
                              :
                              <button className='btn-acao-2' onClick={() => reativarConta(item.email)}>Reativar</button>}
                        </td>
                      </tr>
                    ]
                  })
                  :
                  "Sem dados"
                }
              </tbody>
            </table>


          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAdd