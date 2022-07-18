# 🎒 O que você quer ver?
- <a href="#sobre">Sobre o Projeto</a>
- Tecnologias Utilizadas
- Preview do Projeto
- Layouts (Fimga/Framer)
- Deploy
- <a href="#responsaveis">Responsáveis</a>

# 🎒 Sobre o Projeto
<div id="sobre">Esse projeto tem como objetivo criar um ambiente de estudo para alunos e auxiliar Professores/Instituições de Ensino a elaborar questões e provas de forma digital, interativa e gammificada. No exemplo de preview abaixo foi utilizado para uma plataforma de Bombeiros Voluntários no entanto pode ser utilizado para qualquer nicho de estudos!</div> 

# 📡 Tecnologias Utilizadas                                                   
<div>Neste projeto foram utilizadas as tecnologias JavaScript, React e Node.JS, além de diversas outras bibliotecas para apoio.</div>
<div>
<img style="width: 32px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png">
<img style="width: 90px;" src="https://www.fullstackpython.com/img/logos/react.png">
<img style="width: 90px;" src="https://miro.medium.com/max/1400/1*cqQsY4mgoBbzWgG_XCYSjg.png">
</div>

# 📡 Preview do Projeto

Usuário:
- https://zyngo.com.br
- https://zyngo.com.br/acesso 
- https://zyngo.com.br/dashboard (Precisa logar)
- https://zyngo.com.br/provas (Precisa logar)
- https://zyngo.com.br/perfil (Precisa logar)
- https://zyngo.com.br/simulado (Precisa logar)

Administrador:
- https://zyngo.com.br/admin/simulados/ (Deve rodar o projeto localmente)
- https://zyngo.com.br/admin/adicionarperguntas/ (Deve rodar o projeto localmente)
- https://zyngo.com.br/admin/gerenciarusuarios/ (Deve rodar o projeto localmente)

Estrutura do Preview -> AWS (EC2) em São Paulo.

# 📡 Layouts (Figma/Framer):
- V1: https://framer.com/projects/Telas-projeto-bombeiros-TADS--rVCQ6j51gDKsp2G38lqd-1t8Ye (Esboço)
- V2: https://www.figma.com/proto/HAW7fXXkG1rvwFxne4T6tQ/Untitled?node-id=2%3A2 (Esboço)

# 📡 Deploy:
1) Baixe esse repositório (Back-End, Front-End e Banco de Dados).
2) Crie um Banco de Dados MySQL e importe o arquivo .SQL da pasta "Banco de Dados".
3) Acesse a pasta "Back-End" e modifique todos os arquivos para os dados do seu Banco de Dados (Host, Usuário, Senha e Porta) e também as senhas para tokenização, por default todos esses campos estão como "Edite".
4) Acesse a pasta "Front-End" e modifique todos os arquivos para utilizar o link utilizado para hospedar o seu Back-End. Caso esteja realizando o deploy localmente ficará algo semelhante a "http://localhost:4000/.."
5) Feito todas as alterações, acesse novamente a pasta "Back-End" com um Prompt de Comando ou Terminal e digite:
- npm install
- node index.js
6) Acesse a pasta "Front-End" com um Prompt de Comando ou Terminal e digite:
- npm install
- npm start
7) Se todos os passos estiverem corretos, a plataforma estará acessível em "localhost:3000" e sua api em "localhost:4000".
8) 
# 📡 Responsáveis
<div id="responsaveis">
- Front-End - Auxilio no Back-End - Infraestrutura - UI/UX: William Pscheidt Polaski
- Back-End - Infraestrutura - Gabriel Marques
- Project Manager - Rafael Gurkewitz - https://github.com/rafaelgurk<div>
