/**
 * Servidor back-end utilizando o módulo Express que manipula os métodos HTTP.
 * separados nas rotas Cliente e Produto
 */

// Importar o módulo Express
// Este módulo é instalado através do comando 'npm install express'
const express = require('express');

// configuração de acesso ao servidor
const hostname = '127.0.0.1';
const port = 3000;

// criação do aplicativo servidor
const app = express();

// importar as configurações de rotas
const clienteRotas = require('./routes/Cliente');
const produtoRotas = require('./routes/Produto');

// GET
// rota raiz do servidor
app.get('/', (req, res) => {
  // código de status HTTP
  res.status(200);
  // envio da mensagem para o front-end
  res.send({
    mensagem: 'Você acessou a raiz do servidor web.'
  });
});

// expondo as rotas configuradas em Cliente.js e Produto.js
app.use('/cliente', clienteRotas);
app.use('/produto', produtoRotas);


// rodar o servidor
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});