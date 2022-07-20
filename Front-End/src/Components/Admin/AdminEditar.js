import React, { useEffect, useState } from 'react'

import $ from 'jquery'

import Axios from 'axios'

import Alert from 'react-bootstrap/Alert'

import { Modal, Button } from 'react-bootstrap';

import { Spinner } from 'react-bootstrap';

import configs from '../../Configurations/Configs.json'

import SVGEdit from '../../Assets/Images/edit-svgrepo-com.svg'
import SVGRemove from '../../Assets/Images/remove-svgrepo-com.svg'
import SVGFiltro from '../../Assets/Images/filter-svgrepo-com.svg'

const AdminEditar = () => {
    const [body] = useState({ id: '' })
    const [errorMessage, setErrorMessage] = React.useState("");

    const [sucesso, setSucesso] = React.useState("");
    const [questao, setQuestao] = useState([])
    const [elementosShow, setElementosShow] = useState([])
    const [showPerdeuSenha, setPerdeuSenha] = useState(false);
    const [exibirFiltro, setExibirFiltro] = useState(true);
    const [questaoEdicao, setQuestaoEdicao] = useState();

    const perdeuSenhaClose = () => setPerdeuSenha(false);
    const perdeuSenhaOpen = () => setPerdeuSenha(true);

    const [ElementosQuestao, setElementosQuestao] = useState(
        {
            pergunta: '',
            opcaoA: '',
            opcaoB: '',
            opcaoC: '',
            opcaoD: '',
            dificuldade: 'facil',
            respostaCorreta: 'A'
        })

    useEffect(() => {
        Axios.get(configs.BASE_URL+'/admin/listarQuestoes')
            .then((response) => {
                setElementosShow(response.data.result)
            });
    }, [])

    const escutarAlteracoes = ({ target }) => {
        const { name, value } = target
        setElementosQuestao({
            ...ElementosQuestao,
            [name]: value
        })
    }

    const alterarDificuldade = (e) => {
        setElementosQuestao({
            ...ElementosQuestao,
            dificuldade: e.target.value
        })
    }

    const alterarCorreta = (e) => {
        setElementosQuestao({
            ...ElementosQuestao,
            respostaCorreta: e.target.value
        })
    }

    const EditarQuestao = () => {
        Axios.post(configs.BASE_URL+'/admin/atualizarQuestao', {
            id: questaoEdicao,
            pergunta: ElementosQuestao.pergunta,
            opcaoA: ElementosQuestao.opcaoA,
            opcaoB: ElementosQuestao.opcaoB,
            opcaoC: ElementosQuestao.opcaoC,
            opcaoD: ElementosQuestao.opcaoD,
            dificuldade: ElementosQuestao.dificuldade,
            respostaCorreta: ElementosQuestao.respostaCorreta
        }).then((response) => {
            if (response.data.sucesso) {
                perdeuSenhaClose()
                AtualizarLista()
            }
        });
    }

    const AtualizarLista = () => {
        Axios.get(configs.BASE_URL+'/admin/listarQuestoes')
            .then((response) => {
                setElementosShow()
                setElementosShow(response.data.result)
            });
    }

    const editarQuestao = (id) => {
        Axios.post(configs.BASE_URL+'/admin/visualizarQuestao', {
            id: id
        }).then((response) => {
            setQuestao(response.data.result)
        });

        perdeuSenhaOpen()
    }

    const excluirQuestao = (id) => {
        Axios.post(configs.BASE_URL+'/admin/excluirQuestoes', {
            id: id
        }).then((response) => {
            if (response.data.erro) {
                setErrorMessage("Erro: " + response.data.erro)
            }

            if (response.data.sucesso) {
                AtualizarLista()
                setSucesso("Sucesso: Questão com ID " + id + " " + response.data.sucesso)
            }
        });
    }

    const FiltrarDificuldade = (dificuldade) => {
        Axios.get(configs.BASE_URL+'/admin/listarQuestoes')
            .then((response) => {
                const dificuldadesMapeadas = [];

                const dadosFiltrados = response.data.result.filter(FiltrarDificuldades)
                dadosFiltrados.forEach(filtrar => {
                    dificuldadesMapeadas.push(filtrar)
                })

                function FiltrarDificuldades(value) {
                    if (value.dificuldade === dificuldade)
                        return value
                }

                setElementosShow(dificuldadesMapeadas)
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

    return (
        <>
            <Modal show={showPerdeuSenha} onHide={perdeuSenhaClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edição de Questão</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center">
                    {
                        questao.length > 0
                            ?
                            <div className='d-flex flex-column'>

                                <div class="campo-edicao d-flex flex-column">
                                    Pergunta
                                    <input className="input-edicao inputPergunta" placeholder={questao[0].pergunta} name="pergunta" value={body.pergunta} onChange={escutarAlteracoes} />
                                </div>

                                <div class="campo-edicao d-flex flex-column">
                                    Dificuldade
                                    <select class="custom-select2 bg-light" id="inputGroupSelect01" onChange={alterarDificuldade}>
                                        <option value="facil">Fácil</option>
                                        <option value="moderado">Moderado</option>
                                        <option value="dificil">Dificil</option>
                                    </select>
                                </div>

                                <div className="campo-edicao d-flex flex-column">
                                    Opçao A
                                    <input className="input-edicao inputOpA" placeholder={questao[0].opcaoA} name="opcaoA" value={body.opcaoA} onChange={escutarAlteracoes} />
                                </div>

                                <div className="campo-edicao d-flex flex-column">
                                    Opçao B
                                    <input className="input-edicao inputOpB" placeholder={questao[0].opcaoB} name="opcaoB" value={body.opcaoB} onChange={escutarAlteracoes} />
                                </div>
                                <div className="campo-edicao d-flex flex-column">
                                    Opçao C
                                    <input className="input-edicao inputOpC" placeholder={questao[0].opcaoC} name="opcaoC" value={body.opcaoC} onChange={escutarAlteracoes} />
                                </div>
                                <div className="campo-edicao d-flex flex-column">
                                    Opçao D
                                    <input className="input-edicao inputOpD" placeholder={questao[0].opcaoD} name="opcaoD" value={body.opcaoD} onChange={escutarAlteracoes} />
                                </div>
                                <div className="campo-edicao d-flex flex-column">
                                    Resposta Correta
                                    <select class="custom-select2 bg-light" id="inputGroupSelect01" onChange={alterarCorreta}>
                                        <option defaultValue>Escolha...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                </div>
                                <div className="campo-edicao ">

                                </div>
                            </div>
                            :
                            <Spinner animation="border" />
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => perdeuSenhaClose()} variant="secondary">Cancelar</Button>
                    <Button onClick={() => EditarQuestao()} variant="primary">Salvar Alterações</Button>
                </Modal.Footer>
            </Modal>
            <div className="card-admin listar-questoes container col-12 col-md-12 p-5 bg-light d-flex flex-column">
                <h1 id="tituloGrafico">Gerenciar Simulados</h1>

                <div className='div-alertas'>
                    {errorMessage && <Alert variant="danger" className="alerta p-2"> {errorMessage} </Alert>}
                    {sucesso && <Alert variant="success" className="alerta p-2"> {sucesso} </Alert>}
                </div>

                <div className='d-flex justify-content-between'>
                    <div></div>
                    <div>
                        <button className='btn-filtro d-flex align-items-center justify-content-center' onClick={ExibirFiltros}>Filtrar<img src={SVGFiltro} alt="Filtrar"/> </button>
                        <div className='filtros d-none'>
                            <button onClick={() => AtualizarLista()} className="btnFiltro">Remover Filtros</button>
                            <button onClick={() => FiltrarDificuldade("facil")} className="btnFiltro">Filtrar Fácil</button>
                            <button onClick={() => FiltrarDificuldade("moderado")} className="btnFiltro">Filtrar Moderados</button>
                            <button onClick={() => FiltrarDificuldade("dificil")} className="btnFiltro">Filtrar Difícil</button>
                        </div>
                    </div>
                </div>

                <div className='table-responsive'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='bg-light'>
                                <th scope="col">ID</th>
                                <th scope="col">Pergunta</th>
                                <th scope="col">Dificuldade</th>
                            </tr>
                        </thead>
                        <tbody className="tabela-dados">
                            {elementosShow.length > 0
                                ?
                                elementosShow.map((item, i) => {
                                    return [
                                        <tr key={i}>
                                            <td>{item.codPergunta}</td>
                                            <td>{item.pergunta}</td>
                                            <td>{item.dificuldade}</td>
                                            <td><img src={SVGRemove} className="editardados" onClick={() => excluirQuestao(item.codPergunta)} alt="Remover"></img></td>
                                            <td><img src={SVGEdit} className="editardados" onClick={() => editarQuestao(item.codPergunta) || setQuestaoEdicao(item.codPergunta)} alt="Editar"></img></td>
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
        </>
    )
}

export default AdminEditar