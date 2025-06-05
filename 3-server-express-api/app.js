/**
 * Servidor back-end utilizando o módulo Express que cria uma API Rest e realiza
 * as operações de CRUD, envolvendo os métodos HTTP (GET, POST, PUT e DELETE).
 * 
 * LEIA O ARQUIVO README.md PARA MAIORES INFORMAÇÕES DO PROJETO.
 */

// Importar o módulo Express
const express = require('express');
require('dotenv').config(); // carregar variáveis de ambiente (dotenv)

// criação do aplicativo servidor
const app = express();

// configuração de acesso ao servidor
// Os valores são obtidos do arquivo .env
const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

// importar as configurações de rotas
const clienteRotas = require('./routes/cliente');
const produtoRotas = require('./routes/produto');

// Rotear a raiz do projeto
app.get('/', (req, res) => {
  // emite uma mensagem com a funcionalidade do servidor
  res.status(200).send('Servidor API Rest que manipula as rotas /produto e /cliente/.');
})

// Indica que o servidor irá responder com dados JSON
app.use(express.json());

// Expor as rotas do servidor
app.use('/cliente', clienteRotas);
app.use('/produto', produtoRotas);

// rodar o servidor
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});