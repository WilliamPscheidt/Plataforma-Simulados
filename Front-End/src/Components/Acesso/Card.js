import React, { useState } from "react";

import * as $ from 'jquery';

import { Modal, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

import Voltar from "../Voltar/Voltar"

const Card = () => {

    const [show, setShow] = useState(false);
    const [showPerdeuSenha, setPerdeuSenha] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const perdeuSenhaClose = () => {
        setPerdeuSenha(false);
        setMensagemErro()
        setMensagemSucesso()
    }
    const perdeuSenhaOpen = () => {
        setPerdeuSenha(true);
        setMensagemErro()
        setMensagemSucesso()
    }
    const [mensagemErro, setMensagemErro] = React.useState("");
    const [mensagemSucesso, setMensagemSucesso] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState("");

    const [body, setBody] = useState({ loginEmail: '', loginSenha: '', registroNome: '', registroSobrenome: '', registroEmail: '', registroSenha: '' })
    const redirecionar = useNavigate();

    const inputChangeLogin = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onClickLogar = () => {
        setErrorMessage()
        Axios.post('https://api.zyngo.com.br/api/login', {
            loginEmail: body.loginEmail,
            loginSenha: body.loginSenha,
        }).then((response) => {

            console.log(response)

            if (response.data.erro) {
                setErrorMessage(response.data.erro)
            }

            if (response.data.sucesso) {
                localStorage.setItem('autorizacao_request', 'yes')
                localStorage.setItem('user', response.data.email)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('nome', response.data.nome)
                localStorage.setItem('sobrenome', response.data.sobrenome)
                localStorage.setItem('avatar', response.data.avatar)

                console.log(response.data)
                redirecionar("/dashboard")
            }
        });
    }

    const onClickRegistro = () => {
        setErrorMessage()

        if (!$('.form-check-input').is(":checked")) {
            setErrorMessage("Erro: Você deve aceitar os termos!")
            return
        }

        Axios.post('https://api.zyngo.com.br/api/registro', {
            registroNome: body.registroNome,
            registroSobrenome: body.registroSobrenome,
            registroEmail: body.registroEmail,
            registroSenha: body.registroSenha
        }).then((response) => {

            console.log(response)

            if (response.data.erro) {
                console.log(response.data.erro)
                setErrorMessage(response.data.erro)
            }

            if (response.data.sucesso) {
                localStorage.setItem('autorizacao_request', 'yes')
                localStorage.setItem('user', body.registroEmail)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('nome', response.data.nome)
                localStorage.setItem('sobrenome', response.data.sobrenome)
                localStorage.setItem('avatar', response.data.avatar)
                redirecionar("/provas")
            }
        })
    }

    const recuperarSenha = () => {
        setMensagemSucesso()
        setMensagemErro()
        console.log($('.input-esqueciminhasenha').val())
        Axios.post('https://api.zyngo.com.br/mailer/recuperarSenha', {
            email: $('.input-esqueciminhasenha').val(),
        }).then((response) => {
            if (response.data.erro) {
                setMensagemSucesso()
                setMensagemErro(response.data.erro)
            }

            if (response.data.sucesso) {
                setMensagemErro()
                setMensagemSucesso(response.data.sucesso)
            }
        })
    }

    function abrirRegistro() {
        $('#card').attr('class', 'd-none');
        $('#card-registro').attr('class', 'd-flex flex-column');
        $('#imgBanner').attr('src', './assets/SVG/banner-registro.svg');
        setErrorMessage(false)
    }

    function fecharRegistro() {
        $('#card-registro').attr('class', 'd-none')
        $('#card').attr('class', 'd-flex flex-column')
        $('#imgBanner').attr('src', './assets/SVG/banner-login.svg');
        setErrorMessage(false)
    }

    return (
        <>
            <Voltar />
            <div id="card" className="d-flex flex-column">
                <h3 className="text-left" id="titulo1">Acesse a sua Conta</h3>
                {errorMessage && <Alert variant="danger" className="p-2 feedbacklogin"> {errorMessage} </Alert>}
                <span id="textInput">E-mail</span>
                <input className="campo-login" type="text" name="loginEmail" value={body.loginEmail} onChange={inputChangeLogin} />
                <span id="textInput">Senha</span>
                <input className="campo-login" type="password" name="loginSenha" value={body.loginSenha} onChange={inputChangeLogin} />
                <button id="btnLogin" onClick={onClickLogar}>Acessar Conta</button>
                <button className="btnRegistrar" onClick={abrirRegistro}>Registrar uma Conta</button>
                <div className="d-flex justify-content-center">
                    <span className="btn-esqSenha">Esqueceu a sua Senha? <span id="cliquePerdeuSenha" onClick={perdeuSenhaOpen}>Clique aqui!</span></span>
                </div>
            </div>

            <div id="card-registro" className="d-flex flex-column d-none">
                {errorMessage && <Alert variant="danger" className="p-2 feedbacklogin"> {errorMessage} </Alert>}
                <h3 className="text-left" id="titulo1">Registre a sua Conta</h3>
                <span id="textInput">Nome</span>
                <input className="campo-login" type="text" name="registroNome" value={body.registroNome} onChange={inputChangeLogin} />
                <span id="textInput">Sobrenome</span>
                <input className="campo-login" type="text" name="registroSobrenome" value={body.registroSobrenome} onChange={inputChangeLogin} />
                <span id="textInput">E-mail</span>
                <input className="campo-login" type="text" name="registroEmail" value={body.registroEmail} onChange={inputChangeLogin} />
                <span id="textInput">Senha</span>
                <input className="campo-login" type="password" name="registroSenha" value={body.registroSenha} onChange={inputChangeLogin} />
                <div className="checar d-flex justify-content-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            <span id="texto-termos">Aceito os<span id="registrar-uma" onClick={handleShow}>Termos de Uso</span></span>
                        </label>
                    </div>
                </div>
                <button id="btnLogin" onClick={onClickRegistro}>Registrar Conta</button>
                <button className="btnRegistrar" onClick={fecharRegistro}>Acesse sua Conta</button>
            </div>

            <Modal show={showPerdeuSenha} onHide={perdeuSenhaClose} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Recuperação de Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center">
                    {mensagemErro && <Alert variant="danger" className="p-2 feedback"> {mensagemErro} </Alert>}
                    {mensagemSucesso && <Alert variant="success" className="p-2 feedback"> {mensagemSucesso} </Alert>}
                    Digite o seu E-mail
                    <input className="input-esqueciminhasenha" type="text" />
                    <button className="btn-esqueciminhasenha" onClick={recuperarSenha}>Recuperar Senha</button>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Termos de Uso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Política Privacidade</h3>
                    <p>A sua privacidade é importante para nós. É política do Bombeiros Voluntários respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Bombeiros Voluntários, e outros sites que possuímos e operamos.

                        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

                        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

                        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

                        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.

                        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

                        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>

                    <h3>Política de Cookies Bombeiros Voluntários</h3>
                    <h4>O que são cookies?</h4>
                    <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>
                    <h4>Como usamos os cookies?</h4>
                    <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>
                    <h4>Desativar cookies</h4>
                    <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>
                    <h4>Cookies que definimos</h4>
                    <ul>
                        <li>Cookies relacionados à conta:

                            Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.</li>
                        <li>Cookies relacionados ao login

                            Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.</li>
                        <li>Cookies relacionados a boletins por e-mail

                            Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.</li>
                        <li>Pedidos processando cookies relacionados

                            Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.</li>
                        <li>Cookies relacionados a pesquisas

                            Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.</li>
                        <li>Cookies relacionados a formulários

                            Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.</li>
                        <li>Cookies de preferências do site

                            Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.</li>
                    </ul>
                    <h4>Compromisso do Usuário</h4>
                    <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Bombeiros Voluntários oferece no site e com caráter enunciativo, mas não limitativo:</p>
                    <ul>
                        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                        <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, Onde ver a Bola ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Bombeiros Voluntários, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                    </ul>
                    <h4>Mais informações</h4>
                    <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                    <h5>Esta política é efetiva a partir de <b>Abril/2022</b>.</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Entendi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Card