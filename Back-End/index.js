const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// Declaração rotas
const mailer = require("./routes/mailer.js");
const admin = require("./routes/admin.js");
const prova = require("./routes/prova.js");
const dashboard = require("./routes/dashboard.js");

const senhaSecretaToken = "EDITAR";
const senhaSecretaAdmin = "EDITAR";

// Roteamento

app.use("/mailer", mailer);
app.use("/admin", admin);
app.use("/prova", prova);
app.use("/dashboard", dashboard);

// Configurações Gerais
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));

const credentials = {
  connectionLimit: 10,
  host: "EDITAR",
  user: "EDITAR",
  password: "EDITAR",
  database: "EDITAR",
};

var connection = mysql.createPool(credentials);

// Rota para troca de senha e avatar do usuário
app.post("/api/trocarSenha", (req, res) => {
  const { email, urlAvatar, senha1, senha2 } = req.body;
  if (senha1.length == 0 && senha2.length == 0) {
    connection.query(
      "UPDATE pessoas SET urlAvatar = ? WHERE email = ?",
      [urlAvatar, email],
      (err, result) => {
        if (err) {
          res.send({ erro: "Houve um erro =(" });
        }
        if (result) {
          res.send({ sucesso: "Avatar alterado com sucesso!" });
        }
      }
    );
  } else {
    var textoUp = /[A-Z]/g;
    var numeros = /[0-9]/g;

    if (senha1.length <= 8) {
      res.send({ erro: "Digite uma senha com mais de 8 digitos" });
      return
    } else if (!senha1.match(textoUp)) {
      res.send({ erro: "Erro: A sua senha deve ter Maiusculo e minúsculo" });
      return
    } else if (!senha1.match(numeros)) {
      res.send({ erro: "Erro: Digite números na sua senha" });
      return
    }
    if (senha1 != senha2){
      res.send({erro : "As senhas não coincidem!"})
      return
    }
    
    connection.query(
      "SELECT senha FROM pessoas WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          res.send({ erro: "Houve um erro interno!" });
        }
        if (result) {
          bcrypt.hash(senha1, saltRounds, (err, hash) => {
            if (err) {
              res.send({ erro: "Houve um erro!" });
            }
            if (hash) {
              connection.query(
                "UPDATE pessoas SET senha = ?, urlAvatar = ?  WHERE email = ?",
                [hash, urlAvatar, email],
                (err, resultado) => {
                  if (err) {
                    res.send({ erro: "Essa senha não é válida" });
                  }
                  if (resultado ) {
                    res.send({ sucesso: "Dados alterados com sucesso!" });
                  }
                }
              );
            }
          });
        }
      }
    );
  }
});

// Rota para validação de token do usuário
app.post("/api/validarToken", (req, res) => {
  const { token } = req.body;

  jwt.verify(token, senhaSecretaToken, (err, decoded) => {
    if (err) {
      res.send({ erro: "O seu token não é válido" });
    }

    if (decoded) {
      res.send({ suceso: "O seu token foi validado com sucesso" });
    }
  });
});

// Rota para login e atribuição de token
app.post("/api/login", (req, res) => {
  const { loginEmail, loginSenha } = req.body;

  if (loginEmail == "" || loginSenha == "") {
    res.send({ erro: "Digite em todos os campos!" });
  }
  connection.query(
    "SELECT nome,sobrenome,urlAvatar,senha,inativo FROM pessoas WHERE email = ?",
    [loginEmail],
    (err, result) => {
      if (err || result == "") {
        res.send({ erro: "Email não cadastrado!" });

      }
      if (result[0].inativo == 0) {
        bcrypt.compare(loginSenha, result[0].senha, (error, response) => {
          if (response == true) {
            const token = jwt.sign(
              { userEmail: loginEmail },
              senhaSecretaToken,
              { expiresIn: 3600 }
            );
            res.send({
              sucesso: "Usuário logado",
              token: token,
              nome: result[0].nome,
              sobrenome: result[0].sobrenome,
              avatar: result[0].urlAvatar,
              email: loginEmail,
            });
          }
          if (response == false) {
            res.send({ erro: "Senha incorreta!" });
          }
        });
      }
      if (result[0].inativo != 0) {
        res.send({
          erro: "Usuário está inativo, entre em contato com um administrador do sistema para reativar seu cadastro!",
        });
      }
    }
  );
});

// Rota para validação de token do administrador
app.post("/api/validarTokenAdmin", (req, res) => {
  const { token } = req.body;

  jwt.verify(token, senhaSecretaAdmin, (err, decoded) => {
    if (err) {
      res.send({ erro: "O seu token não é válido" });
    }

    if (decoded) {
      res.send({ suceso: "O seu token foi validado com sucesso" });
    }
  });
});

// Rota para login e atribuição de token da página de administração
app.post("/api/validarAdmin", (req, res) => {
  const { email, senha } = req.body;

  if (!isNaN(email) || !isNaN(senha)) {
    res.send({ erro: "Digite em todos os campos!" });
    return;
  }

  connection.query(
    "SELECT senha,admin FROM pessoas WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send({ erro: "Houve um erro interno!" });
      } else {
        if (result.length > 0) {
          bcrypt.compare(senha, result[0].senha, (error, response) => {
            if (error) {
              res.send({ erro: "Houve um erro interno!" });
            }
            if (response) {
              if (result[0].admin == 1) {
                const token = jwt.sign({ email: email }, senhaSecretaAdmin, {
                  expiresIn: 40000,
                });
                res.send({
                  sucesso:
                    "Verificações de acesso concluídas, é um admministrador",
                  token: token,
                });
              } else {
                res.send({
                  erro: "Houve um erro, você não é um administrador =(",
                });
              }
            } else {
              res.send({ erro: "Senha incorreta" });
            }
          });
        } else {
          res.send({ erro: "Login inexistente" });
          console.log("Abc");
        }
      }
    }
  );
});

// Rota para registro de usuário
app.post("/api/registro", (req, res) => {
  const { registroNome, registroSobrenome, registroEmail, registroSenha } = req.body;
  let avatar = "https://api2.bombeirosvoluntarios.top/avatar/1.jpg"
  const timestamp = new Date();

  if (
    registroNome == "" ||
    registroSobrenome == "" ||
    registroEmail == "" ||
    registroSenha == ""
  ) {
    res.send({ erro: "Digite em todos os campos" });
    return;
  }

  // Validação de email
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!registroEmail.match(validRegex)) {
    res.send({ erro: "Seu e-mail é inválido" });
    return;
  }
// Validação de senha
  var textoUp = /[A-Z]/g;
  var numeros = /[0-9]/g;

  if (registroSenha.length <= 8) {
    res.send({ erro: "Digite uma senha com mais de 8 digitos" });
    return;
  } else if (!registroSenha.match(textoUp)) {
    res.send({ erro: "Erro: A sua senha deve ter Maiusculo e Minúsculo" });
    return;
  } else if (!registroSenha.match(numeros)) {
    res.send({ erro: "Erro: Digite números na sua senha" });
    return;
  }

  connection.query(
    "SELECT * FROM pessoas WHERE email = ?",
    [registroEmail],
    (err, result) => {
      if (err) {
        res.send({ erro: "Houve um erro interno!" });
      } else {
        if (result) {
          bcrypt.hash(registroSenha, saltRounds, (err, hash) => {
            connection.query(
              "INSERT INTO pessoas (nome,sobrenome,email,senha, urlAvatar) values (?, ?, ?, ?, ?)",
              [registroNome, registroSobrenome, registroEmail, hash, avatar],
              (err, result) => {
                if (err) {
                  res.send({ erro: "Esse e-mail já está em uso" });
                }
                
                if (result) {
                    const token = jwt.sign({ email: registroEmail, timestamp : timestamp },senhaSecretaToken,
                        { expiresIn: 3600 }
                    );
                    res.send({
                        sucesso: "Usuário logado",
                        token: token,
                        nome: registroNome,
                        sobrenome: registroSobrenome,
                        avatar: avatar,
                        email : registroEmail
                    });
                }
              }
            );
          });
        } else {
            res.send({erro: "Houve um erro interno!"})
        }
      }
    }
  );
});

app.listen(4000, () => console.log("rodando..."));
