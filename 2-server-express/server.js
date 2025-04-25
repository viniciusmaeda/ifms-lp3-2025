/**
 * Servidor back-end utilizando o módulo Express que manipula os métodos HTTP.
 * GET    - Obter dados do servidor
 * POST   - Criar dados no servidor
 * PUT    - Atualizar dados que existem no servidor
 * DELETE - Excluir dados existentes no servidor
 */

// Importar o módulo Express
// Este módulo é instalado através do comando 'npm install express'
const express = require('express');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// criação do aplicativo servidor
const app = express();

// manipulação das rotas utilizando os métodos HTTP

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


// POST
// rota raiz do servidor
app.post('/', (req, res) => {
  // obter os dados do corpo da requisição
  const novoCliente = {
    nome: 'Vinicius',
    email: 'vinicius@email.com',
    telefone: '67123456789',
    senha: '123456'
  };

  // responde com dados de sucesso
  res.status(201).send({
    mensagem: 'O cliente foi salvo com sucesso!',
    cliente: novoCliente
  });
});


// PUT
// rota raiz do servidor
app.put('/', (req, res) => {
  // responder com mensagem de sucesso
  res.status(200).send({
    mensagem: 'Você acessou o servidor através do método PUT.'
  });
});

// DELETE
// rota raiz do servidor
app.delete('/', (req, res) => {
  // responder com mensagem de sucesso
  res.status(202).send({
    mensagem: 'Você acessou o servidor através do método DELETE.'
  });
});


// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));