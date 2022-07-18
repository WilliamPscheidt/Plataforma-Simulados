-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 18-Jul-2022 às 14:40
-- Versão do servidor: 5.7.38
-- versão do PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bombeiro_bd`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `historico`
--

CREATE TABLE `historico` (
  `codHistorico` int(11) NOT NULL,
  `codPessoa` int(11) NOT NULL,
  `codPergunta` int(11) NOT NULL,
  `respostaUsuario` char(1) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ip` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `perguntas`
--

CREATE TABLE `perguntas` (
  `codPergunta` int(11) NOT NULL,
  `pergunta` longtext NOT NULL,
  `opcaoA` text NOT NULL,
  `opcaoB` text NOT NULL,
  `opcaoC` text NOT NULL,
  `opcaoD` text NOT NULL,
  `dificuldade` varchar(10) NOT NULL DEFAULT 'dificil',
  `respostaCorreta` char(1) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPRESSED;

--
-- Extraindo dados da tabela `perguntas`
--

INSERT INTO `perguntas` (`codPergunta`, `pergunta`, `opcaoA`, `opcaoB`, `opcaoC`, `opcaoD`, `dificuldade`, `respostaCorreta`, `status`) VALUES
(228, 'Sempre que o socorrista estiver realizando qualquer tipo de atividade em ambiente elevado (operações treinamentos, etc.), o risco de uma queda existe, principalmente quando a atividade é realizada junto às extremidades do local. O corpo humano, por natureza, tem no umbigo, seu ponto de equilíbrio, onde as massas(inferior e superior) praticamente se equivalem. Dessa forma, qualquer aproximação do socorrista das extremidades do local elevado, seja para realizar qualquer atividade, ou mesmo, apenas observar algum ponto específico, deve seguir a seguinte regra:', 'O Bombeiro deve ter seu umbigo sempre acima do ponto mais elevado da extremidade do local elevado.', 'O Bombeiro deve ter seu umbigo sempre abaixo do ponto mais baixo da extremidade do local elevado.', 'O Bombeiro deve ter seu umbigo sempre abaixo do ponto mais elevado da extremidade do local elevado.', 'O Bombeiro deve ter seu umbigo sempre abaixo do ponto mais elevado da extremidade do local mais baixo.', 'moderado', 'C', 0),
(229, 'O sistema hidráulico preventivo de uma edificação tem objetivos bem definidos. Assinale o incorreto:', 'Permitir que o usuário da edificação efetue o combate do princípio do fogo.', 'Permitir que o corpo de bombeiros possa utilizar a canalização para bombear água para o sistema.', 'Abastecer as viaturas do Corpo de Bombeiros para utilização em incêndios em edificações vizinhas.', 'Abastecer as residências vizinhas ao foco de incêndio caso falte água.', 'moderado', 'D', 0),
(230, 'Os gases da combustão podem ser conceituados como aquelas substâncias gasosas que surgem durante o incêndio e permanecem mesmo após os produtos da combustão serem resfriados até alcançarem temperaturas normais. A  quantidade e os tipos de gases da combustão presentes durante e depois de um incêndio variam de acordo com: Aponte a exceção.', 'A composição química do material da combustão.', 'As condições físicas e resistência dos indivíduos expostos.', 'A quantidade de oxigênio disponível.', 'A temperatura do incêndio.', 'moderado', 'B', 0),
(231, 'De acordo com as fases do atendimento emergencial assinale a alternativa em que a ordem esteja correta:', 'Acionamento, Prontidão, Avaliação, Controle e Finalização.', 'Prontidão, Acionamento, Avaliação, Controle e Finalização.', 'Avaliação, Prontidão, Acionamento, Controle e Finalização.', 'Controle, Prontidão, Acionamento, Avaliação e Finalização.', 'moderado', 'B', 0),
(232, 'Quanto às Zonas de Trabalho em uma área de acidente com produto perigoso, assinale a alternativa incorreta:', 'Zona Quente: Localizada na parte central do acidente, é o local onde os contaminantes estão ou poderão surgir. A zona de exclusão é delimitada pela chamada linha quente.', 'Zona Morna: É a localidade que fica posicionada na área de transição entre as áreas contaminadas e as áreas limpas. Esta zona é delimitada pelo chamado corredor de redução da contaminação. Toda saída da zona de exclusão deverá ser realizada por esse corredor.', 'Zona Fria: Localizada na parte mais externa da área é considerada não contaminada. O posto de comando da operação e todo o apoio logístico ficam nessa área.', 'Zona Gelada: Localizada na parte central do acidente, é o local onde os contaminantes estão ou poderão surgir.', 'moderado', 'D', 0),
(233, 'Resultado de eventos adversos, naturais ou provocados pelo homem, sobre um ecossistema vulnerável, causando danos humanos, materiais e/ou ambientais e consequentes prejuízos econômicos e sociais. Este Conceito se refere a:', 'Desastre', 'Risco', 'Risco Aceitável', 'Situação Crítica', 'moderado', 'D', 0),
(234, 'De acordo com o Decreto Estadual no 4.909, de 18 Out 1994, o número mínimo de extintores necessários para um Sistema Preventivo depende, EXCETO:', 'Do risco do incêndio; Da ocupação.', 'Da localização e a sinalização dos extintores; Da probabilidade do fogo bloquear o acesso principal da edificação.', 'Da adequação do agente-extintor a classe de incêndio do local a proteger; Da capacidade extintora do agente-extintor.', 'Da área e do respectivo caminhamento necessário à distribuição dos extintores.', 'moderado', 'B', 0),
(235, 'Para efeito de determinação dos níveis de exigências dos sistemas de segurança contra incêndios, as edificações serão classificadas em função:', 'Da ocupação, da localização e da carga de fogo.', 'Da área construída, da distância dos mananciais e da carga de fogo.', 'Do material construído, da localização e da capacidade de ocupação.', 'Da carga de fogo, do tipo de atividade e do número de saídas de emergência.', 'moderado', 'A', 0),
(236, '(NSCI/94 art. 34) Quando o risco é médio, os extintores devem ser, tanto quando possível, equidistantes e distribuídos de forma a cobrir a área do risco respectivo e que o operador não percorra, do extintor até o ponto mais afastado, um caminhamento de:', '20m', '10m', '15m', '25m', 'moderado', 'C', 0),
(237, '\"Na classificação de afogados, existem diferentes graus, facilitando os primeiros atendimentos à vítima. No grau\n1, a vítima aspira pouca quantidade de líquido ocasionando:\"', 'Pouca espuma na boca/nariz, necessitando de oxigênio.', 'Tosse sem espuma na boca ou nariz, necessitando de repouso, aquecimento e tranquilização.', 'Vômito, necessitando de observação hospitalar por 6 a 48 horas.', 'Extremidades roxas, necessitando de oxigênio e internação hospitalar.', 'dificil', 'B', 0),
(238, 'O Estatuto dos Policiais Militares de Santa Catarina quando trata sobre disciplina e hierarquia esclarece que:', 'Posto é o grau hierárquico do Major, conferido por ato do Governador.', 'Graduação é o grau hierárquico do Oficial, conferido pelo Comandante Geral da Policia Militar.', 'O aspirante-oficial PM e o Aluno-oficial PM são denominados de grau hierárquico de precedência.', 'Sempre que policial militar da reserva remunerada ou reformado fizer uso do posto ou graduação, deverá fazê-lo mencionando essa situação.', 'dificil', 'D', 0),
(239, 'Sobre a precedência, conforme estabelece o Estatuto dos Policiais Militares de Santa Catarina, aponte nas alternativas abaixo a única verdadeira:', 'O Aluno-Oficial PM é hierarquicamente inferior ao Subtenente PM.', 'O Aspirante-a-Oficial PM é hierarquicamente superior aos demais praças.', 'O aluno do Curso de Formação de Sargentos é inferior a Cabo PM, para efeito de precedência.', 'O Aluno do Curso de Formação de Sargentos durante exercícios de estágios operacionais terá precedência sobre os Sargentos da Polícia Militar.', 'dificil', 'B', 0),
(240, '\"As promoções para a Polícia Militar de Santa Catarina e para o Corpo de Bombeiros Militar estão previstas no\nseu Estatuto, e serão:\"', 'Efetuadas de dois em dois anos alternadamente por antiguidade e merecimento.', 'Alternadamente para a Polícia Militar nos anos pares e Corpo de Bombeiros Militar nos anos ímpares.', 'Para o Corpo de Bombeiros Militar nos dias 31 de janeiro, 13 de junho, 11 de agosto e 25 de novembro.', 'Para o Corpo de Bombeiros Militar nos dias 31 de janeiro, 05 de maio, 11 de agosto e 25 de novembro.', 'dificil', 'C', 0),
(241, 'Pela legislação atual, os militares de Santa Catarina desfrutam de diversos direitos relacionados à Maternidade, Paternidade e Adoção. Sobre este assunto, aponte a única afirmativa verdadeira.', 'Os Militares estaduais tem direito ao afastamento total do serviço em virtude do nascimento do filho, pelo período de até sessenta dias consecutivos.', 'À Militar estadual gestante é assegurada a licença à maternidade pelo período de 90 dias a partir da apresentação da certidão de nascimento, podendo somar mais 30 dias de anterioridade, totalizando 120 consecutivos, e poderá se não usufruiu da anterioridade, incluir estes dias remanescentes ao final da licença.', 'Nos casos de adoção de criança até dez anos, se menino e até 12 anos se menina, o militar estadual terá direito há de trinta dias.', 'A licença paternidade será de 15 dias para os casos de adoção de criança com menos de 6 anos de idade.', 'dificil', 'D', 0),
(242, 'Você, condutor, ao sair para uma ocorrência sob chuva forte, enfrenta uma pista alagada. Nesse caso você:', 'Mantém-se com menor distância de seguimento do veículo à sua frente.', 'Avalia a proporção do alagamento, pois a água pode estar escondendo algum buraco mais profundo.', 'Ultrapassa os veículos que estão à sua frente.', 'Ultrapassa os veículos que estão à sua frAumenta a velocidade para atravessar a área alagada.ente.', 'dificil', 'B', 0),
(243, 'Relacionadas com a direção defensiva, adota-se como usual uma regra simples, conhecida como REGRA DOS DOIS SEGUNDOS, que serve, principalmente para:', 'Cruzar o semáforo quando em sinal amarelo.', 'Dar seta antes de entrar ou sair da pista.', 'Manter distância segura do veículo da frente.', 'Interromper luz alta em viagens noturnas.', 'dificil', 'C', 0),
(244, '\"O trânsito é feito pelas pessoas e assim como as demais atividades humanas, quatro princípios são importantes\npara o relacionamento e sua convivência social. Um deles é o principio da Co-responsabilidade pela vida social, que diz respeito a formação de atitudes, valorização de comportamentos de segurança, mobilidade e melhoria dos espaços públicos. Os outros três princípios estão citados nas alternativas abaixo. Cite a exceção.\"', 'Princípio da Igualdade de Direitos.', 'Princípio da Harmonia.', 'Princípio da Participação.', 'Princípio da Dignidade da Pessoa Humana.', 'dificil', 'B', 0),
(245, 'Conforme o perfil trimodal da morte por trauma ocorrem após a primeira hora aproximadamente:', '50% das mortes', '30% das mortes', '20% das mortes', '10% das mortes', 'dificil', 'A', 0),
(246, '\"Desde _________ os fabricantes norte-americanos são obrigados a submeter os veículos de passeio a testes de impactos\nfrontais e desde _________ a testes de impactos laterais, fazendo com que aumente a utilização de materiais que reúnam as características de menos massa e mais resistência. Assinale a alternativa que completa correta e respectivamente as lacunas acima.\"', '1995 - 2003', '1993 - 2005', '1998 - 2003', '1996 - 2005', 'dificil', 'C', 0),
(253, 'ATT', 'ATT', 'ATT', 'ATT', 'ATT', 'moderado', 'C', 1),
(254, 'ATTATT', 'ATT', 'ATT', 'ATT', 'ATT', 'dificil', 'C', 1),
(255, 'fdsfasfsafdasfas', 'hklhjkh', 'afsfads', 'fsafdas', 'fdsasfdasd', 'dificil', 'A', 1),
(256, 'asdgsda', 'sdgagsda', 'sgadasg', 'gasddgsa', 'sadggasd', 'moderado', 'B', 1),
(262, 'teste', 'testeARC', 'testeARC', 'testeARC', 'testeARC', 'dificil', 'C', 1),
(263, 'ATTATTA', 'ATT', 'ATT', 'ATT', 'ATT', 'facil', 'A', 1),
(264, 'TESTEARC2', 'TESTEARC2', 'TESTEARC2', 'TESTEARC2', 'TESTEARC2', 'facil', 'A', 1),
(265, 'ASASD', 'ASDASD', 'ASDASD', 'ASDASD', 'ASDDSA', 'facil', 'A', 1),
(266, 'pergunta', 'questao a', 'questao b', 'questao c', 'questao d', 'dificil', 'B', 1),
(267, '(FUMARC - 2014 - Prefeitura de Sete Lagoas/ MG - Bombeiro) - Certo apresentador de um programa de prêmios na TV fez uma proposta para um telespectador participante que já tinha ganhado um prêmio de R$ 10.000,00. A proposta foi a seguinte: \n“ - Você trocaria o seu prêmio por 1 milhão de centavos de reais?”. Considerando a proposta, é CORRETO afirmar que\n\n', 'Não valeria a pena trocar, pois perderia R$ 10,00 na troca.', 'O valor da troca seria o mesmo do prêmio oferecido.', 'Valeria trocar, pois aumentaria o prêmio em R$ 100,00.', 'Valeria trocar, pois aumentaria seu prêmio em 10%.', 'facil', 'B', 1),
(268, '(CAIPIMES - 2010 - SPTURIS/SP - Bombeiro) - Um frasco de detergente pesa 320 gramas. Uma caixa com duas dúzias e meia de frascos pesará:', '8,6kg.', '9,6kg.', '96kg.', '86kg.', 'facil', 'B', 1),
(269, 'Gestão de Concursos - 2014 - Prefeitura de Igarapé/MG - Bombeiro) Leia o texto a seguir. \nJoão foi a um jogo de futebol que, por ter terminado empatado, se estendeu até a prorrogação. A duração total da partida foi de 136 minutos. \nSe a partida terminou às 23h e 46min., assinale a alternativa que indica o horário de início da partida, de forma CORRETA.', '21h', '22h', '21h e 30min', '22h e 30min', 'facil', 'C', 1),
(270, '(CETRO- soldado da Polícia Militar do Estado de São Paulo) De acordo com a norma-padrão da Língua Portuguesa,assinale a alternativa correta em relação à ocorrência da crase.', 'O funcionário estava disposto à refazer a atividade.', 'Contou o ocorrido à suas superiores, mas pediu sigilo.', 'Algumas profissões têm o dia à dia bastante agitado.', ' À tarde, iremos ao cinema.', 'facil', 'D', 1),
(271, 'FUMARC - 2014 - Prefeitura de Sete Lagoas/ MG - Bombeiro) Certo apresentador de um programa de prêmios na TV fez uma proposta para um telespectador participante que já tinha ganhado um prêmio de R$ 10.000,00. A proposta foi a seguinte: “ - Você trocaria o seu prêmio por 1 milhão de centavos de reais?”. Considerando a proposta, é CORRETO afirmar que: ', 'Não valeria a pena trocar, pois perderia R$ 10,00 na troca.', 'O valor da troca seria o mesmo do prêmio oferecido.', 'Valeria trocar, pois aumentaria o prêmio em R$ 100,00.', 'Valeria trocar, pois aumentaria seu prêmio em 10%.', 'facil', 'B', 1),
(272, '(CAIPIMES - 2010 - SPTURIS/SP - Bombeiro) Um frasco de detergente pesa 320 gramas. Uma caixa com duas dúzias e meia de frascos pesará:', '8,6kg.', '9,6kg.', '96kg.', '86kg.', 'facil', 'B', 1),
(273, '(CONSULPAM - 2019) As maiores cidades do Brasil têm um problema em comum, além da violência e do desemprego: os congestionamentos diários. Nos últimos dez anos, a frota de veículos do país passou de 30 milhões para 50 milhões.\nTendo por base a informação anterior: Supondo que o acréscimo tenha sido de veículos contendo 4 pneus (sem considerar o estepe) e de veículos contendo 2 pneus, em quantidades iguais, quantos pneus tivemos de acréscimo nas cidades brasileiras?', '20 milhões.', '40 milhões.', '60 milhões.', '80 milhões.', 'facil', 'C', 0),
(274, 'Prefeitura de Igarapé/MG - 2014) Leia o texto a seguir. João foi a um jogo de futebol que, por ter terminado empatado, se estendeu até a prorrogação. A duração total da partida foi de 136 minutos. Se a partida terminou às 23h e 46min., assinale a alternativa que indica o horário de início da partida, de forma CORRETA.', '21h', '22h', '21h e 30min', '22h e 30min', 'facil', 'C', 1),
(275, '(Prefeitura de Igarapé/MG - 2014) Leia o texto a seguir. João foi a um jogo de futebol que, por ter terminado empatado, se estendeu até a prorrogação. A duração total da partida foi de 136 minutos. Se a partida terminou às 23h e 46min., assinale a alternativa que indica o horário de início da partida, de forma CORRETA.', '21h', '22h', '21h e 30min', '22h e 30min', 'facil', 'C', 0),
(276, '(CAIPIMES - 2010) - Um frasco de detergente pesa 320 gramas. Uma caixa com duas dúzias e meia de frascos pesará:', '8,6kg.', '9,6kg.', '96kg.', '86kg.', 'facil', 'B', 0),
(277, '(FUMARC - 2014) Certo apresentador de um programa de prêmios na TV fez uma proposta para um telespectador participante que já tinha ganhado um prêmio de R$ 10.000,00. A proposta foi a seguinte: “ - Você trocaria o seu prêmio por 1 milhão de centavos de reais?”. Considerando a proposta, é CORRETO afirmar que: ', 'Não valeria a pena trocar, pois perderia R$ 10,00 na troca.', 'O valor da troca seria o mesmo do prêmio oferecido.', 'Valeria trocar, pois aumentaria o prêmio em R$ 100,00.', 'Valeria trocar, pois aumentaria seu prêmio em 10%.', 'facil', 'B', 0),
(278, '(CETRO - Estado de São Paulo) De acordo com a norma-padrão da Língua Portuguesa,assinale a alternativa correta em relação à ocorrência da crase.', 'O funcionário estava disposto à refazer a atividade.', 'Contou o ocorrido à suas superiores, mas pediu sigilo.', 'Algumas profissões têm o dia à dia bastante agitado.', 'À tarde, iremos ao cinema.', 'facil', 'D', 1),
(279, '(GUALIMP - 2020) Fernando encheu completamente com água um copo em formato cilíndrico com 6 centímetros de diâmetro e 8 centímetros de altura. Depois, transferiu toda a água desse copo para outro, também cilíndrico, com 8 centímetros de diâmetro. Qual a altura atingida pela água no novo recipiente? ', '4,5 cm.', '5,5 cm.', '5,0 cm.', '4.0 cm.', 'facil', 'A', 0),
(280, '(Prefeitura MG - 2013) Quanto ao emprego dos pronomes, segundo o padrão culto, marque a alternativa CORRETA:', 'Jean, nós queremos falar consigo.', 'Com nós outros tal problema não acontece.', 'Havia pouco o que reduzir.', 'Na árvore, para lá da montanha, houve uma reunião de tropeiros, que fui convidado.', 'facil', 'B', 0),
(281, '(CBM SC, 2013) Em um vestibular o candidato realiza 3 provas, e o critério de aprovação é dado através da média e do desvio padrão dessas. Se um candidato obteve nas provas: 58 pontos, 69 pontos e 74 pontos, então a média e o desvio padrão aproximado das notas desse candidato são, respectivamente:', '67 e 44,66', '70 e 44,66', '67 e 6,68', '70 e 6,68', 'facil', 'C', 0),
(282, '(CBM SC, 2013) Para encher uma caixa d?água, que está inicialmente vazia, duas bombas juntas demoram 24 horas. Se somente uma for colocada para funcionar, ela demorará 20 horas a menos que a outra demoraria sozinha. Em quanto tempo cada uma delas enche a caixa sozinha?', '40 horas e 60 horas.', '30 horas e 50 horas.', '12 horas e 32 horas.', '4 horas e 20 horas.', 'facil', 'A', 1),
(283, '(CETRO - Estado de São Paulo) De acordo com a norma-padrão da Língua Portuguesa, assinale a alternativa correta em relação à ocorrência da crase.', 'O funcionário estava disposto à refazer a atividade.', 'Contou o ocorrido à suas superiores, mas pediu sigilo.', 'Algumas profissões têm o dia à dia bastante agitado.', 'À tarde, iremos ao cinema.', 'facil', 'D', 0),
(284, '(CBM SC, 2013) Para encher uma caixa d\'água, que está inicialmente vazia, duas bombas juntas demoram 24 horas. Se somente uma for colocada para funcionar, ela demorará 20 horas a menos que a outra demoraria sozinha. Em quanto tempo cada uma delas enche a caixa sozinha?', '40 horas e 60 horas.', '30 horas e 50 horas.', '12 horas e 32 horas.', '4 horas e 20 horas.', 'facil', 'A', 0),
(285, '(Prefeitura de Palhoça - SC, 2021) Sustentabilidade é a capacidade de sustentação ou conservação de um processo ou sistema. No que diz respeito ao assunto “Sustentabilidade” analise as questões abaixo e identifique a sequência correta:\n I. O conceito de sustentabilidade aborda a maneira como se deve agir em relação à natureza. \n II. O desenvolvimento sustentável tem como objetivo a preservação do planeta e atendimento das necessidades empresariais. \n III. Um recurso natural explorado de modo sustentável durará para sempre e com condições de também ser explorado por gerações futuras. IV. Como exemplo de sustentabilidade temos: economia de água, garantia de alimentação em longo prazo e controle da urbanização e integração entre campo e cidades maiores.\nA sequência correta é:', 'Apenas a assertiva I está correta.', 'As assertivas I e III estão corretas.', 'As assertivas I, II, III e IV estão corretas.', 'As assertivas II e III estão corretas.', 'facil', 'B', 0),
(286, '(UFU MG, 2013) Quanto aos atos de Improbidade Administrativa que importam em enriquecimento ilícito, assinale a alternativa INCORRETA.', 'Receber vantagem econômica de qualquer natureza, direta ou indireta, para tolerar a exploração ou a prática de jogos de azar, de lenocínio, de narcotráfico, de contrabando, de usura ou de qualquer outra atividade ilícita, ou aceitar promessa de tal vantagem.', 'Perceber vantagem econômica, direta ou indireta, para facilitar a alienação, permuta ou locação de bem público ou o fornecimento de serviço por ente estatal por preço inferior ao valor de mercado.', 'Aceitar emprego, comissão ou exercer atividade de consultoria ou assessoramento para pessoa física ou jurídica que tenha interesse suscetível de ser atingido ou amparado por ação ou omissão decorrente das atribuições do agente público, durante a atividade.', 'Realizar operação financeira sem observância das normas legais e regulamentares ou aceitar garantia insuficiente ou inidônea.', 'moderado', 'D', 0),
(287, 'Pergunta Demonstração', 'Resposta A', 'Resposta B', 'Resposta C', 'Resposta D', 'moderado', 'B', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoas`
--

CREATE TABLE `pessoas` (
  `codPessoa` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `email` varchar(60) CHARACTER SET utf8 NOT NULL,
  `senha` varchar(200) CHARACTER SET utf8 NOT NULL,
  `urlAvatar` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT 'https://api2.bombeirosvoluntarios.top/avatar/1.jpg',
  `pontuacao` int(10) NOT NULL DEFAULT '0',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `inativo` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPRESSED;

-- --------------------------------------------------------

--
-- Estrutura da tabela `provas`
--

CREATE TABLE `provas` (
  `codProva` int(11) NOT NULL,
  `codPessoa` int(11) NOT NULL,
  `acertos` int(11) NOT NULL,
  `erros` int(2) NOT NULL DEFAULT '0',
  `dificuldade` varchar(10) NOT NULL,
  `tempo` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `historico`
--
ALTER TABLE `historico`
  ADD UNIQUE KEY `codHistorico` (`codHistorico`),
  ADD KEY `historico_ibfk_1` (`codPessoa`),
  ADD KEY `codPergunta` (`codPergunta`);

--
-- Índices para tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD PRIMARY KEY (`codPergunta`);

--
-- Índices para tabela `pessoas`
--
ALTER TABLE `pessoas`
  ADD PRIMARY KEY (`codPessoa`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `provas`
--
ALTER TABLE `provas`
  ADD UNIQUE KEY `codProva` (`codProva`),
  ADD KEY `codPessoa` (`codPessoa`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `historico`
--
ALTER TABLE `historico`
  MODIFY `codHistorico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=775;

--
-- AUTO_INCREMENT de tabela `perguntas`
--
ALTER TABLE `perguntas`
  MODIFY `codPergunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=288;

--
-- AUTO_INCREMENT de tabela `pessoas`
--
ALTER TABLE `pessoas`
  MODIFY `codPessoa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT de tabela `provas`
--
ALTER TABLE `provas`
  MODIFY `codProva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=421;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `historico`
--
ALTER TABLE `historico`
  ADD CONSTRAINT `historico_ibfk_1` FOREIGN KEY (`codPessoa`) REFERENCES `pessoas` (`codPessoa`),
  ADD CONSTRAINT `historico_ibfk_2` FOREIGN KEY (`codPergunta`) REFERENCES `perguntas` (`codPergunta`);

--
-- Limitadores para a tabela `provas`
--
ALTER TABLE `provas`
  ADD CONSTRAINT `provas_ibfk_1` FOREIGN KEY (`codPessoa`) REFERENCES `pessoas` (`codPessoa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
