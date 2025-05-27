// Importar os módulos
const express = require('express');
const routes = express.Router();

// GET (Read)
// Rota para obter (Read) os dados no BD
routes.get('/', (req, res) => {
  res.status(200).send('/produto (GET)');
});

// POST (Create)
// Rota para criar (Create) novos valores no BD
routes.post('/', (req, res) => {
  res.status(201).send('/produto (POST)');
});

// PUT (Update)
// Rota para atualizar (Update) valores no BD
routes.put('/', (req, res) => {
  res.status(200).send('/produto (PUT)');
});

// DELETE (Delete)
// Rota para excluir (Delete) valores do BD
routes.delete('/', (req, res) => {
  res.status(200).send('/produto (DELETE)');
});
// Exportar o módulo com as rotas
module.exports = routes;