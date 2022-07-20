import React, { useState } from 'react'

import Axios from 'axios'
import Alert from 'react-bootstrap/Alert'

import configs from '../../Configurations/Configs.json'

const AdminPerguntas = () => {

    const [errorMessage, setErrorMessage] = React.useState("");
    const [sucessMessage, setSucessMessage] = React.useState("");

    const [body, setBody] = useState(
        {
            pergunta: '',
            opcaoA: '',
            opcaoB: '',
            opcaoC: '',
            opcaoD: '',
            dificuldade: 'facil',
            respostaCorreta: 'A'
        })

    const escutarAlteracoes = ({ target }) => {
        setSucessMessage()
        setErrorMessage()
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const alterarDificuldade = (e) => {
        setSucessMessage()
        setErrorMessage()
        setBody({
            ...body,
            dificuldade: e.target.value
        })
    }

    const alterarCorreta = (e) => {
        setSucessMessage()
        setErrorMessage()
        setBody({
            ...body,
            respostaCorreta: e.target.value
        })
    }

    const onClickAdicionarQuestao = () => {
        setSucessMessage()
        setErrorMessage()
        if (!isNaN(body.pergunta) || !isNaN(body.opcaoA) || !isNaN(body.opcaoB) || !isNaN(body.opcaoC) || !isNaN(body.opcaoD) || !isNaN(body.opcaoE)) {
            setErrorMessage("Erro: Digite em todos os campos")
            return
        }

        Axios.post(configs.BASE_URL+'/admin/inserirQuestao', {
            pergunta: body.pergunta,
            opcaoA: body.opcaoA,
            opcaoB: body.opcaoB,
            opcaoC: body.opcaoC,
            opcaoD: body.opcaoD,
            respostaCorreta: body.respostaCorreta,
            dificuldade: body.dificuldade
        }).then((response) => {
            if (response.data.erro) {

                setErrorMessage("Erro: " + response.data.erro)
            }

            if (response.data.suceso) {
                setSucessMessage("Concluído: Adicionado com sucesso!")
            }
        });
    }

    return (
        <div className="addperguntas col-12 col-md-12 p-3 d-flex flex-column vh-100">
            <div className="card p-5">
                <h2 id="tituloGrafico" className='text-right'>Adicionar Perguntas</h2>

                {errorMessage && <Alert variant="danger" className="p-2 feedback-admin"> {errorMessage} </Alert>}
                {sucessMessage && <Alert variant="success" className="p-2 feedback-admin"> {sucessMessage} </Alert>}

                <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea" name="pergunta" placeholder='Digite a pergunta' value={body.pergunta} onChange={escutarAlteracoes}></textarea>
                </div>
                <div class="input-group mb-3">
                    <input type="text" placeholder="Digite a opção A" class="form-control" aria-label="Text input with checkbox" name="opcaoA" value={body.opcaoA} onChange={escutarAlteracoes} />
                </div>
                <div class="input-group mb-3">
                    <input type="text" placeholder="Digite a opção B" class="form-control" aria-label="Text input with checkbox" name="opcaoB" value={body.opcaoB} onChange={escutarAlteracoes} />
                </div>
                <div class="input-group mb-3">
                    <input type="text" placeholder="Digite a opção C" class="form-control" aria-label="Text input with checkbox" name="opcaoC" value={body.opcaoC} onChange={escutarAlteracoes} />
                </div>
                <div class="input-group mb-3">
                    <input type="text" placeholder="Digite a opção D" class="form-control" aria-label="Text input with checkbox" name="opcaoD" value={body.opcaoD} onChange={escutarAlteracoes} />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text bg-light" for="inputGroupSelect01">Resposta Correta</label>
                    </div>
                    <select class="custom-select bg-light" id="inputGroupSelect01" onChange={alterarCorreta}>
                        <option selected value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Dificuldade</label>
                    </div>
                    <select class="custom-select bg-light" id="inputGroupSelect01" onChange={alterarDificuldade}>
                        <option value="facil">Fácil</option>
                        <option value="moderado">Moderado</option>
                        <option value="dificil">Dificil</option>
                    </select>
                </div>

                <button className='btnAdd' onClick={onClickAdicionarQuestao}>Adicionar Pergunta</button>

            </div>

        </div>
    )
}

export default AdminPerguntas