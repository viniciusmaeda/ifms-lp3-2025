// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotasProduto = express.Router();

// GET
// rota para acesar o método GET para cliente
rotasProduto.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a rota raiz de produto.'
  });
});


// POST
// rota para acesar o método POST para produto
rotasProduto.post('/', (req, res) => {
  // obter os dados do corpo da requisição
  const novoProduto = {
    nome: 'Notebook',
    processador: 'i7',
    preco: '3.200,00'
  };

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Cliente cadastrado com sucesso.',
    novoCliente: novoProduto
  });
});

// PUT
rotasProduto.put('/', (req, res) => {
  // responder com mensagem de sucesso
  res.status(200).send({
    mensagem: 'Você acessou o servidor através do método PUT.'
  });
});


// DELETE
// rota raiz do servidor
rotasProduto.delete('/', (req, res) => {
  // responder com mensagem de sucesso
  res.status(202).send({
    mensagem: 'Você acessou o servidor através do método DELETE.'
  });
});

// exportar toda a configuração das rotas
module.exports = rotasProduto;